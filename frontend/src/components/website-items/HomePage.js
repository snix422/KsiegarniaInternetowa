import Recommends from "./Recommends";
import "../../css/HomePage.css";

const HomePage = (props) => {
  return (
    <div className="home-content">
      <Recommends class={props.class} />
      
      
    </div>
  );
};

export default HomePage;
