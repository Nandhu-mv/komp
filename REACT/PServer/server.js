const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());


const CLIENT_ID = "1tj8rx39ifu2sun4ti1z4739s5ottx";
const CLIENT_SECRET = "caqbf6efoba9jcfpyqadic1ic6zz4j";

let accessToken = "";
let tokenExpiry = 0;


async function getAccessToken() {
    if (Date.now() < tokenExpiry && accessToken) {
        return accessToken;
    }

    const res = await axios.post(
        "https://id.twitch.tv/oauth2/token",
        null,
        {
            params: {
                client_id: CLIENT_ID,
                client_secret: CLIENT_SECRET,
                grant_type: "client_credentials",
            }
        }
    );

    accessToken = res.data.access_token;
    tokenExpiry = Date.now() + res.data.expires_in * 1000;

    return accessToken;
}


app.get("/games", async (req, res) => {
    const search = req.query.search || "zelda";

    try {
        const token = await getAccessToken();

        const response = await axios.post(
            "https://api.igdb.com/v4/games",
            `search "${search}"; fields name,summary,cover.url; limit 10;`,
            {
                headers: {
                    "Client-ID": CLIENT_ID,
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "text/plain",
                }
            }
        );


        res.json(response.data);

    } catch (err) {
        console.error(err.response?.data || err);
        res.status(500).json({ error: "Failed to fetch data from IGDB" });
    }
});


app.post("/games", express.text(), async (req, res) => {
    try {
        const query = req.body;
        const token = await getAccessToken();  

        const result = await axios.post(
            "https://api.igdb.com/v4/games",
            query,
            {
                headers: {
                    "Client-ID": CLIENT_ID,
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "text/plain",
                }
            }
        );


        res.json(result.data);
    } catch (error) {
        console.error(error.response?.data || error);
        res.status(500).json({ error: error.message });
    }
});



//fullgame

app.get("/fullgame", async (req, res) => {
    const gameId = req.query.id;
    if (!gameId) return res.status(400).json({ error: "Missing ?id=GAME_ID" });

    try {
        const token = await getAccessToken();

        // --- 1. MAIN GAME FETCH ---
        const gameRes = await axios.post(
            "https://api.igdb.com/v4/games",
            `
                fields name,summary,storyline,first_release_date,cover,screenshots,artworks,genres,themes,platforms,involved_companies,videos,similar_games;
                where id = ${gameId};
                limit 1;
            `,
            {
                headers: {
                    "Client-ID": CLIENT_ID,
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "text/plain"
                }
            }
        );

        const game = gameRes.data[0];
        if (!game) return res.status(404).json({ error: "Game not found" }); 

        // Helper fetcher
        async function fetchRelated(endpoint, ids, fields) {
            if (!ids || ids.length === 0) return [];
            const r = await axios.post(
                `https://api.igdb.com/v4/${endpoint}`,
                `
                    fields ${fields};
                    where id = (${ids.join(",")});
                    limit ${ids.length};
                `,
                {
                    headers: {
                        "Client-ID": CLIENT_ID,
                        "Authorization": `Bearer ${token}`,
                        "Content-Type": "text/plain"
                    }
                }
            );
            return r.data;
        }

        // --- 2. PARALLEL FETCH RELATED DATA ---
        const [
            cover,
            screenshots,
            artworks,
            genres,
            themes,
            platforms,
            involvedCompanies,
            videos,
            similarGames,
        ] = await Promise.all([
            fetchRelated("covers", game.cover ? [game.cover] : [], "url,image_id"),
            fetchRelated("screenshots", game.screenshots, "url,image_id"),
            fetchRelated("artworks", game.artworks, "url,image_id"),
            fetchRelated("genres", game.genres, "name"),
            fetchRelated("themes", game.themes, "name"),
            fetchRelated("platforms", game.platforms, "name,abbreviation"),
            fetchRelated("involved_companies", game.involved_companies, "company,developer,publisher"),
            fetchRelated("game_videos", game.videos, "video_id"),
            fetchRelated("games", game.similar_games, "name,cover")
        ]);

        // --- 3. RETURN MERGED RESULT ---
        res.json({
            ...game,
            cover,
            screenshots,
            artworks,
            genres,
            themes,
            platforms,
            involvedCompanies,
            videos,
            similarGames
        });

    } catch (error) {
        console.error(error.response?.data || error);
        res.status(500).json({ error: "Failed to fetch full game details" });
    }
});






// Start server
app.listen(5000, () => {
    console.log("Server running on port 5000");
});
