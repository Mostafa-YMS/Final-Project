import Navbar from "../components/Navbar";
import "../styles/home.css";
import img from "../img/Main.svg";

export const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h1> Login form </h1>
          </div>
          <div className="col-6">
            <img src={img} className="imlink" />
          </div>
        </div>
      </div>
    </>
  );
};
