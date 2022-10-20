import "./App.css";
import Layout from "./components/Layout";
import Onas from "./components/website-items/Onas";
import Kontakt from "./components/website-items/Kontakt";
import Zaloguj from "./components/website-items/Zaloguj";
import BestsellersOtherPage from "./components/website-items/BestsellersOtherPage";
import Rejestracja from "./components/website-items/Rejestracja";
import Zapowiedzi from "./components/website-items/Zapowiedzi";
import Promocje from "./components/website-items/Promocje";
import Nowosci from "./components/website-items/Nowosci";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Layout />}></Route>
        <Route exact path="/onas" element={<Onas />}></Route>
        <Route exact path="/kontakt" element={<Kontakt />}></Route>
        <Route exact path="/ksiazki" element={<Layout />}></Route>
        <Route exact path="/zaloguj" element={<Zaloguj />}></Route>
        <Route
          exact
          path="/bestsellers"
          element={<BestsellersOtherPage />}
        ></Route>
        <Route exact path="/rejestracja" element={<Rejestracja />}></Route>
        <Route exact path="/zapowiedzi" element={<Zapowiedzi />}></Route>
        <Route exact path="/promocje" element={<Promocje />}></Route>
        <Route exact path="/nowosci" element={<Nowosci />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
