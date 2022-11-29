import "../../css/Bestsellers.css";
import "../../css/Book.css";

const DisplayBook = (props) => {

  console.log(props.title)
  
  
  return (

   
    
      
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
        <button className="addtobuy">Do koszyka</button>
        
    </div>
</div>
      
   
  );
};

export default DisplayBook;
