import data from "../../data";
import KoszykContext from "../Context/KoszykContext";
import { useContext } from "react";
import { Link } from "react-router-dom";


const DisplayBook = (props) => {

  console.log(props.title)

  const Context = useContext(KoszykContext);

 const addToKoszyk = () => {
  Context.item.push({title:props.title,
                    price: props.price})
 }

 console.log(Context);
  
  
  return (

   
    
    <Link to="/book">
    <div className="book">
   
    <div>
        <img className="book-image"  src={props.image} alt={props.title} />
    </div>
    <div className="book-info">
        <button></button>
        <span className="book-title">{props.title}</span>
        <span className="book-author">{props.author}</span>
        <span>{props.rating}</span>
        <h4 className="book-price">{props.price} zł</h4>

        <button onClick={addToKoszyk} className="addtobuy">Do koszyka</button>
        
        
    </div>
</div>
 </Link>

      
   
  );
};

export default DisplayBook;
