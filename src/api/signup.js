import axios from "axios";

axios
  .post("http://localhost/books_store_React/insert.php", obj)
  .then((res) => console.log(res.data))
  .catch((error) => {
    console.log(error.response);
  });
