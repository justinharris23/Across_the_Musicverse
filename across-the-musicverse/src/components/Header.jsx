import Nav from "./Nav";
import HeaderPicture from "./assets/music-header-new.jpg";

export default function Header() {
  return (
    <div>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Bungee+Spice&display=swap"
        rel="stylesheet"
      />
      <h2 className="Main">Across the Musicverse</h2>
      <img src={HeaderPicture} width="100%" height="auto" />
      <Nav />
    </div>
  );
}
