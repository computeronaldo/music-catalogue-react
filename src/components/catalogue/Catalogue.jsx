import { useState, useEffect, useDebugValue } from "react";
import { musicData } from "../../musicData";
import Music from "../music/Music";
import "./styles.css";

const Catalogue = () => {
  const [songs, setSongs] = useState([]);
  const [currentGenre, setCurrentGenre] = useState("hip-hop");

  const clickHandler = (genre) => {
    if (genre === "hip-hop") setCurrentGenre(genre);
    if (genre === "rock") setCurrentGenre(genre);
    if (genre === "electronic") setCurrentGenre(genre);

    const data = musicData.find((item) => item.hasOwnProperty(genre));
    setSongs(data[genre]);
  };

  useEffect(() => {
    const data = musicData.find((item) => item.hasOwnProperty("hip-hop"));
    setSongs(data["hip-hop"]);
  }, []);

  return (
    <div className="catalogue">
      <div className="genres">
        <button
          className={currentGenre === "hip-hop" ? "active" : ""}
          onClick={() => clickHandler("hip-hop")}
        >
          Hip-Hop
        </button>
        <button
          className={currentGenre === "rock" ? "active" : ""}
          onClick={() => clickHandler("rock")}
        >
          Rock
        </button>
        <button
          className={currentGenre === "electronic" ? "active" : ""}
          onClick={() => clickHandler("electronic")}
        >
          Electronic
        </button>
      </div>
      <div className="genre-info">
        {songs === undefined ? "Loading beats..." : <Music songs={songs} />}
      </div>
    </div>
  );
};
export default Catalogue;
