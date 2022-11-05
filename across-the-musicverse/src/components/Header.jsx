import Nav from "./Nav";
// import Search from "./Search";

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
      <Nav />
      <img
        src="across-the-musicverse/assets/music-header-int.jpg"
        alt="musicverse"
      />
    </div>
  );
}
