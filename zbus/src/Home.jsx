import Navbar from './Navbar';
import "./home.css"
import img from'./homepic.svg';

const Home = () => {
    return (
        <div className="home">
          <Navbar />
          <img src = {img} alt="My Happy SVG" className="imlink"/>
          <h1 style={{float:'left'}} >     Login form </h1>
        </div>
        
        
        
         );
}
 
export default Home;