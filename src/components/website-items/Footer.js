import Newsletter from "./Newsletter"

const Footer = () => {
    return (
        <div className="footer">
            <Newsletter />
            <div className="footer-links">
                <div className="footer-links-urbookstore">
                    <span>UrBookStore</span>
                    <a href="#">O nas</a>
                    <a href="#">Kontakt</a>
                    <a href="#">Załóż konto</a>
                    <a href="#">Polityka prywatności</a>
                </div>
                <div className="footer-links-zakupy">
                    <span>Zakupy</span>
                    <a href="#">Bestsellery</a>
                    <a href="#">Zapowiedzi</a>
                    <a href="#">Promocje</a>
                    <a href="#">Regulamin</a>
                </div>
                <div className="footer-links-oferta">
                    <span>Oferta</span>
                    <a href="#">Książki</a>
                    <a href="#">Audiobooki</a>
                    <a href="#">Muzyka</a>
                    <a href="#">Filmy</a>
                </div>
                <div className="footer-links-topbooks">
                    <span>Top 5 książek</span>
                    <a href="#">Historia i teraźniejszość</a>
                    <a href="#">Historia i teraźniejszość</a>
                    <a href="#">Historia i teraźniejszość</a>
                    <a href="#">Historia i teraźniejszość</a>
                    <a href="#">Historia i teraźniejszość</a>
                </div>
            </div>
            <div className="footer-copywright">
                <span>© 2022 Księgarnia internetowa UrBookStore.</span>
            </div>

        </div>
    )
}

export default Footer