const express = require("express");
const axios = require("axios");
const cors = require("cors");  // <-- import cors

const app = express();

app.use(cors()); // <-- enable CORS for all routes
app.use(express.json());

// Twitch/IGDB credentials


const CLIENT_ID = "1tj8rx39ifu2sun4ti1z4739s5ottx";   // Your Client ID
const CLIENT_SECRET = "zzsagxwqjxfz4hn0cfiyjebxzqb99b"; // Your Client Secret


let accessToken = "";
let tokenExpiry = 0;

// --- Get App Access Token from Twitch ---
async function getAccessToken() {
    // Return cached token if still valid
    if (accessToken && Date.now() < tokenExpiry) return accessToken;

    try {
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
        tokenExpiry = Date.now() + res.data.expires_in * 1000 - 60000; // Refresh 1 min before expiry
        console.log("New IGDB Access Token fetched");
        return accessToken;
    } catch (err) {
        console.error("Failed to get access token:", err.response?.data || err);
        throw new Error("IGDB Auth Failed");
    }
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

app.get("/games-by-genre", async (req, res) => {
    const genreQuery = req.query.genre;

    if (!genreQuery) {
        return res.status(400).json({ error: "Missing ?genre=GENRE_NAME_OR_ID" });
    }

    try {
        const token = await getAccessToken();

        let genreId = Number(genreQuery);

        // If NOT numeric → treat as name
        if (isNaN(genreId)) {
            const genreList = await axios.post(
                "https://api.igdb.com/v4/genres",
                "fields id,name; limit 500;",
                {
                    headers: {
                        "Client-ID": CLIENT_ID,
                        "Authorization": `Bearer ${token}`,
                        "Content-Type": "text/plain",
                    }
                }
            );

            const match = genreList.data.find(
                g => g.name.toLowerCase() === genreQuery.toLowerCase()
            );

            if (!match) {
                return res.status(404).json({ error: "Genre not found" });
            }

            genreId = match.id;
        }

        // Fetch games of that genre
        const games = await axios.post(
            "https://api.igdb.com/v4/games",
            `
            fields name, summary, cover.image_id, genres, rating;
            where genres = ${genreId} & cover != null;
            sort rating desc;
            limit 20;
            `,
            {
                headers: {
                    "Client-ID": CLIENT_ID,
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "text/plain",
                }
            }
        );

        res.json(games.data);

    } catch (err) {
        console.error(err.response?.data || err);
        res.status(500).json({ error: "Failed to fetch games by genre" });
    }
});




async function fetchRelated(endpoint, ids, fields, token) {
    if (!ids || ids.length === 0) return [];
    const res = await axios.post(
        `https://api.igdb.com/v4/${endpoint}`,
        `fields ${fields}; where id = (${ids.join(",")}); limit ${ids.length};`,
        {
            headers: {
                "Client-ID": CLIENT_ID,
                "Authorization": `Bearer ${token}`,
                "Content-Type": "text/plain",
            }
        }
    );
    return res.data;
}

    
app.get("/fullgame", async (req, res) => {
    const gameId = req.query.id;
    if (!gameId) return res.status(400).json({ error: "Missing ?id=GAME_ID" });

    try {
        const token = await getAccessToken();

        // 1️⃣ Fetch main game info
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
                    "Content-Type": "text/plain",
                }
            }
        );

        const game = gameRes.data[0];
        if (!game) return res.status(404).json({ error: "Game not found" });

        // 2️⃣ Fetch related data in parallel
        const [
            cover,
            screenshots,
            artworks,
            genres,
            themes,
            platforms,
            involvedCompanies,
            videos,
            similarGames
        ] = await Promise.all([
            fetchRelated("covers", game.cover ? [game.cover] : [], "url,image_id", token),
            fetchRelated("screenshots", game.screenshots, "url,image_id", token),
            fetchRelated("artworks", game.artworks, "url,image_id", token),
            fetchRelated("genres", game.genres, "name,id", token),
            fetchRelated("themes", game.themes, "name", token),
            fetchRelated("platforms", game.platforms, "name,abbreviation", token),
            fetchRelated("involved_companies", game.involved_companies, "company,developer,publisher", token),
            fetchRelated("game_videos", game.videos, "video_id", token),
            fetchRelated("games", game.similar_games, "name,cover.image_id,genres.name", token)
        ]);

        // 3️⃣ Return combined result
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

    } catch (err) {
        console.error(err.response?.data || err);
        res.status(500).json({ error: "Failed to fetch full game details" });
    }
});

// --- Start Server ---
app.listen(5000, () => {
    console.log("Server running on port 5000");
});
