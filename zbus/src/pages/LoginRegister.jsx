import "../styles/home.css";
import img from "../img/logger.png";
import GooGle from "../components/GoogleLog"
import FaceLog from "../components/faceLog"



export const LoginRegister = (props) => {
  {document.body.style.backgroundImage = `url(${img})`
  document.body.style.backgroundRepeat = `no-repeat`
  document.body.style.backgroundSize = `cover`
}
  return (
    <div className="logger">
      <div className="container" style={{ marginTop: "50px" }}>
        <div className="row">
          <div className="col-6 justify-content-center align-self-center">
            <div style={{marginTop:"60px"}}>
              {props.mode}
            </div>
            
            <div className="row">
              <div className="col-6">
                <FaceLog/>
              </div>
              <div className="col-6">
                <GooGle/>
              </div>
            </div>
          </div>
          <div className="col-6 justify-content-center align-self-center">
          </div>
        </div>
      </div>
    </div>
  );
};
