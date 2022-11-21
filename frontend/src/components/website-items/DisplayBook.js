import data from "../../data";

const DisplayBook = () => {
  return (
    <div className="book">
      {data.products.map((product) => (
        <div className="book">
          <div className="book-image"></div>
          <div className="book-info"></div>
          <span className="book-title">{product.tittle}</span>
          <span className="book-author" key={product.author}></span>
          <img src={product.image} height="150px" width="100px" />
          <h4 className="book-price" key={product.price}></h4>
          <button className="addtobuy">Do koszyka</button>
        </div>
      ))}
    </div>
  );
};

export default DisplayBook;
