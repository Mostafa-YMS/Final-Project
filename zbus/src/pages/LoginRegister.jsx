import "../styles/home.css";
import img from "../img/Main.svg";

export const LoginRegister = (props) => {
  
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6 justify-content-center align-self-center">
              {props.mode}
          </div>
          <div className="col-6 justify-content-center align-self-center">
            <img src={img} className="imlink" />
            <h1 className="text-center display-1">UBus</h1>
          </div>
        </div>
      </div>
    </>
  );
};
