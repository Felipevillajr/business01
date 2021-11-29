import "./App.css";
import Header from "./components/header/Header";
import Hero from "./imgs/heroimg.jpg";

function App() {
  return (
    <div className="App">
      <Header />
      <section className="hero__banner">
        <img id="hero-img" src={Hero} alt="imgforbanner"></img>
      </section>
    </div>
  );
}

export default App;
