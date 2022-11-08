import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import "./App.css";
// import Search from "./components/Search";

function App() {
  return (
    <div className="App">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

      <link
        href="https://fonts.googleapis.com/css2?family=Nunito:wght@600&display=swap"
        rel="stylesheet"
      />

      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
