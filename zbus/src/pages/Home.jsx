import Navbar from "../components/Navbar";
import "../styles/home.css";
import img from "../img/homepic.svg";

export const Home = () => {
  return (
    <div className="App">
      <div className="content">
        <div className="home">
          <Navbar />
          <img src={img} alt="My Happy SVG" className="imlink" />
          <h1 style={{ float: "left" }}> Login form </h1>
        </div>
      </div>
    </div>
  );
};
