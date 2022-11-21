import { useState } from "react";
import DisplayBook from "./DisplayBook";

const Recommends = (props) => {
  const [showCategories, setShowCategories] = useState("book-categories-none");
  const showBooks = () => {
    setShowCategories("book-categories-block");
  };

  return (
    <div className="recommends">
      <DisplayBook />
    </div>
  );
};

export default Recommends;
