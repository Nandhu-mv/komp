import React from 'react'
import '../styles/home.css'
import '../styles/anim.css'
import axios from 'axios'
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useState, useEffect } from 'react'

function Home() {

  const [gameId, setgameId] = useState(121);
  const [home, sethome] = useState(true);


  const [search, setSearch] = useState(null);
  const [show, setShow] = useState(false);

  const [sgames, setsgames] = useState([]);

  const [ggames, setggames] = useState([]);
  
   const [selectedGenre, setSelectedGenre] = useState('Adventure');



  const [game, setGame] = useState(null);
  const [error, setError] = useState(null);
  const [Loading, setLoading] = useState(false);

    useEffect(() => {
    console.log("UPDATED GAME:", ggames);
  }, [ggames]);


        // for maingame

  useEffect(() => {

    const pullapi = async () => {
      try {
        setLoading(true)
        const res = await axios.get(`http://localhost:5000/fullgame?id=${gameId}`);
        console.log("GAME DATA:", res.data);

        setGame(res.data);

      } catch (err) {
        setError(err);
        console.error(err);
      }
      finally {
        setLoading(false)
      }
    };

    pullapi();
  }, [gameId]);


      // by genre sort

      const GENRES = [
          "Arcade","Adventure","Fighting","Racing","Shooter","RPG","Simulator","Puzzle",
          "Sport","Strategy","Visual Novel","Music","Platform"
        ];

  useEffect(() => {
  if (!selectedGenre) return;

  const fetchGamesByGenre = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/games-by-genre?genre=${selectedGenre}`
      );
      setggames(res.data);
    } catch (err) {
      console.error("Error fetching games:", err);
    }
  };

  fetchGamesByGenre();
}, [selectedGenre]);




      // for search 
     
  useEffect(() => {

    const fetchGames = async () => {

      try {
        const res = await axios.get(`http://localhost:5000/games?search=${search}`);
        setsgames(res.data);
        console.log(res.data);

      } catch (err) {
        console.error("Error fetching games:", err);
      }
    };

    if (search) {
      fetchGames();
    }
  }, [search]);




  const handlesearch = (e) => {

    setSearch(e.target.value);

  }

  const handleclickgenre = (id) =>{

    setgameId(id);
    sethome(false);

  }






  if (error) return <div style={{ color: "red" }}>{error.message}</div>;
  if (!game) return <h2>Loading...</h2>;

  return (
    <div className='mainpage'>

      <nav className='nav1'>
        <h1 className='logo'>Spade's Arcade</h1>

        <input type="search"
          placeholder='Search games....'
          value={search ? search : ""}
          onChange={handlesearch}
          onFocus={() => setShow(true)}
          onBlur={() => setShow(false)}

        />
        {show && <div className="searchitems" onMouseDown={(e) => e.preventDefault()} >
          {sgames.map((i) => (
            <li key={i.id} onMouseDown={() => { if (search !== "") { setgameId(i.id); sethome(false) } }} >
              <img src={i.cover ? (Array.isArray(i.cover) ? i.cover[0].url : i.cover.url) : null} alt="" />
              <p>{i.name}</p> </li>))}
        </div>}

        <ul>
          <li onClick={() => sethome(true)}>Home</li>
          <li>Top Games</li>
          <li>Newest Release</li>
          <li>About </li>
        </ul>
      </nav>

      <nav className='nav2'>
        <ul className='nav2ulist'>
          <li className='lidrop'>
            Browse <i className="fa-solid fa-caret-down"></i>
            <ul className='dropcontent'>
              <li>All Games</li>
              <li>Favourites</li>
              <li>Wishlisted</li>
            </ul>
          </li>

          <li className='lidrop'>
            Catagory <i className="fa-solid fa-caret-down"></i>
            <ul className='dropcontent'>
              {GENRES.map((g) => (
                <li key={g} onClick={() => { setSelectedGenre(g); sethome(true); }}>
                  {g}
                </li>
              ))}
            </ul>
          </li>

          <li className='lidrop'>
            Collections <i className="fa-solid fa-caret-down"></i>
            <ul className='dropcontent'>
              <li>My List</li>
              <li>Add +</li>
            </ul>
          </li>

          <li className='lidrop'>
            Platforms <i className="fa-solid fa-caret-down"></i>
            <ul className='dropcontent'>
              <li>PC</li>
              <li>Playstation</li>
              <li>X-box</li>
            </ul>
          </li>
        </ul>
      </nav>

      {
        Loading && <div className='loadingpage'>
          <div className="loader"></div>

        </div>
      }

      {!home && !Loading && <div className="main-games">

        <div className="topinfo">

          {game.cover?.length > 0 && (
            <img
              className='coverimg'
              src={`https://images.igdb.com/igdb/image/upload/t_cover_big/${game.cover[0].image_id}.jpg`}
              alt="Cover"
            />
          )}

          <div className="textinfo">

            <h1 className='gamename'>{game.name}</h1>

            {game.summary && (
              <p >{game.summary}</p>
            )}

            {game.genres && (
              <p style={{ color: "white" }}>
                <b>Genres:</b> {game.genres.map(g => g.name).join(", ")}
              </p>
            )}

            {game.platforms && (
              <p style={{ color: "white" }}>
                <b>Platforms:</b> {game.platforms.map(p => p.name).join(", ")}
              </p>
            )}

          </div>
        </div>




        <div className="gamecontent">

          {game.screenshots?.length > 0 && (
            <div className='ss'>
              <Carousel>
                {game.screenshots.map((ss) => (
                  <Carousel.Item key={ss.id}>
                    <img
                      src={`https://images.igdb.com/igdb/image/upload/t_screenshot_med/${ss.image_id}.jpg`}
                      alt="Screenshot"
                      style={{ width: "100%", borderRadius: "10px" }}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
          )}

          {<div className={game.videos.length > 0 ? "gametrailer" : "notrailer"}>

            <iframe title='gametrailer' className='trailer'
              src={`https://www.youtube.com/embed/${game.videos.length > 0 ? game.videos[0].video_id : "BMzzXYQ8zoQ"}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>

          </div>}

        </div>

        <div className="similargames">

          <h2 style={{color:"white"}} >Similar Games</h2>

          <Row xs={1} md={5} className="g-4">
            {game.similarGames?.map((i) => (
              <Col key={i.id}>
                <Card className='simcards' onClick={()=>setgameId(i.id)} text='white' bg='dark' border='dark' id={i.id}>
                  <img
                    src={`https://images.igdb.com/igdb/image/upload/t_cover_big/${i.cover?.image_id}.jpg`}
                    alt={`similargame-${i.name}`}
                  />
                  <Card.Body >
                    <Card.Title>{i.name}</Card.Title>

                    <Card.Text>
                      {i.genres?.slice(0, 2).map((g) => (
                        <li className='similargenre' key={g.id}>{g.name}</li>
                      ))}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>



        </div>




      </div>}

      {home && <div className='genreitems'> 

        <Row xs={1} md={5} className="g-5">
            {ggames?.map((i) => (
              <Col key={i.id}>
                <Card className='cards' onClick={()=>handleclickgenre(i.id) } text='white' bg='dark' border='dark' id={i.id}>
                  <div className="imgcontainer">
                  <img
                    src={`https://images.igdb.com/igdb/image/upload/t_cover_big/${i.cover?.image_id}.jpg`}
                    alt={`ggames-${i.name}`}
                  />
                  </div>
                  <Card.Body >
                    <Card.Title>{i.name}</Card.Title>

                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        
        
      </div> }



      <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <h3 className="footer-title">Spade's Arcade</h3>
          <p className="footer-text">Your one-stop place for awesome games.</p>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Links</h3>
          <ul className="footer-list">
            <li><a href="/" className="footer-link">Home</a></li>
            <li><a href="/games" className="footer-link">Games</a></li>
            <li><a href="/about" className="footer-link">About</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Follow Us</h3>
          <ul className="footer-list">
            <li>Instagram</li>
            <li>Twitter</li>
            <li>YouTube</li>
          </ul>
        </div>

      </div>

      <p className="footer-copy">
        © {new Date().getFullYear()} Spade's Arcade. All rights reserved.
      </p>
    </footer>


    </div>
  );
}

export default Home;
