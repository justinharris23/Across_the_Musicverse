import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import "./App.css";
// import Search from "./components/Search";

function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <Main />
        {/* <Search /> */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
