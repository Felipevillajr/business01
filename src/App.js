import "./App.css";
import Header from "./components/header/Header";
import Hero from "./imgs/heroimg.jpg";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <section className="hero__banner">
        <img id="hero-img" src={Hero} alt="imgforbanner"></img>
      </section>
      <section className="info">
        <h1>Section Title</h1>
        <div className="info__story">
          <img className="imgs-filler" src={Hero} alt="filler img"></img>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentium optio, eaque rerum! Provident
            similique accusantium nemo autem. Veritatis obcaecati tenetur iure
            eius earum ut molestias architecto voluptate aliquam nihil, eveniet
            aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur
            error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
            quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias
            eos sapiente officiis modi at sunt excepturi expedita sint? Sed
          </p>
        </div>
        <h1>Section Title</h1>
        <div className="info__story">
          <p>
            error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
            quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias
            eos sapiente officiis modi at sunt excepturi expedita sint? Sed
            quibusdam recusandae alias error harum maxime adipisci amet laborum.
            Perspiciatis minima nesciunt dolorem! Officiis iure rerum voluptates
            a cumque velit quibusdam sed amet tempora. Sit laborum ab, eius
            fugit doloribus tenetur fugiat, temporibus enim commodi iusto libero
            magni deleniti quod quam consequuntur! Commodi minima excepturi
            repudiandae velit hic maxime doloremque. Quaerat provident commodi
            consectetur veniam similique ad earum omnis ipsum saepe, voluptas,
            hic voluptates pariatur est explicabo fugiat, dolorum eligendi quam
            cupiditate excepturi mollitia maiores labore suscipit quas? Nulla,
            placeat. Voluptatem quaerat non architecto ab laudantium modi minima
            sunt esse temporibus sint culpa, recusandae aliquam numquam totam
            ratione voluptas quod exercitationem fuga. Possimus quis earum
            veniam quasi aliquam eligendi, placeat qui corporis!
          </p>
          <img className="imgs-filler" src={Hero} alt="filler img"></img>
        </div>
        <h1>Section Title</h1>
        <div className="img-gallery">
          <img className="imgs-filler2" src={Hero} alt="filler img"></img>
          <img className="imgs-filler2" src={Hero} alt="filler img"></img>
          <img className="imgs-filler2" src={Hero} alt="filler img"></img>
          <img className="imgs-filler2" src={Hero} alt="filler img"></img>
          {/* <img className="imgs-filler2" src={Hero} alt="filler img"></img>
          <img className="imgs-filler2" src={Hero} alt="filler img"></img>
          <img className="imgs-filler2" src={Hero} alt="filler img"></img>
          <img className="imgs-filler2" src={Hero} alt="filler img"></img> */}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
