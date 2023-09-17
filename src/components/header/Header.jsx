import mainLogo from "../../assets/android-chrome-192x192.png";
import "./styles.css";

const Header = () => {
  return (
    <>
      <header>
        <div className="main">
          <img src={mainLogo} alt="music-icon" />
          <h1>Best of the Best Hits</h1>
        </div>
        <p>Checkout my favourite music. Select a genre to get started</p>
      </header>
      <hr />
    </>
  );
};

export default Header;
