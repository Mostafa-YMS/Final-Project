import "../styles/home.css";
import img from "../img/Main.svg";
import { Loginform } from "../components";

export const Home = (props) => {
  
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6">
              {props.mode}
          </div>
          <div className="col-6">
            <img src={img} className="imlink" />
            <h1 className="text-center display-1">UBus</h1>
          </div>
        </div>
      </div>
    </>
  );
};
