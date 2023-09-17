import "./styles.css";

const Music = ({ songs }) => {
  return (
    <ul>
      {songs.map((song) => {
        return (
          <li className="song-item" key={song.key}>
            <span>Track: {song.track}</span>
            <span>Artist: {song.artist}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default Music;
