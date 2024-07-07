import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Services from "./components/Services/Services";
import "./App.css";
import boy from "../src/img/boy.png";
import boy1 from "../src/img/vector.avif";
import Experience from "./components/Experience/Experience";
import Works from "./components/Works/Works";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonial from "./components/Testimonials/Testimonial";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { useContext } from "react";
import { themeContext } from "./Context";
function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar />
      <Intro />
      <Works />
      <Services />
      <div className="box">
        <div>
          <img  src={boy} />
        </div>
        <div>
          <h1 style={{fontSize:"30px",marginTop:"200px"}}>The Unseen of spending three years of PixelGrade</h1>
          <p style={{color:"GrayText",fontSize:"18px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel diam rhoncus, scelerisque enim et, ultrices lacus. Etiam sollicitudin eros in ornare sagittis. Aliquam pulvinar metus leo, porta malesuada felis tempus rutrum</p>
          <button style={{color:"white",backgroundColor:"green",border:"none",padding:"10px 20px"}}>Learn More</button>
        </div>
      </div>
      <br/>
      <br/>
      <br/>
      <Experience />
      <div className="box">
        <div>
          <img  src={boy1} />
        </div>
        <div>
          <h1 style={{fontSize:"30px",marginTop:"200px"}}>The Unseen of spending three years of PixelGrade</h1>
          <p style={{color:"GrayText",fontSize:"18px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel diam rhoncus, scelerisque enim et, ultrices lacus. Etiam sollicitudin eros in ornare sagittis. Aliquam pulvinar metus leo, porta malesuada felis tempus rutrum</p>
        </div>
      </div>
      <br/>
      <br/>
      <br/>
      <Services />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
