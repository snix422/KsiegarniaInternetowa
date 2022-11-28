import Recommends from "./Recommends";
import Bestsellers from "./Bestsellers";
import BookPage from "./BookPage";

const HomePage = (props) => {
  return (
    <div className="home-content">
      <Recommends class={props.class} />
      <BookPage />
      
      
    </div>
  );
};

export default HomePage;
