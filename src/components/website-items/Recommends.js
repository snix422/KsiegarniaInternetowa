import { useState } from "react";

const Recommends = (props) => {

    const [showCategories, setShowCategories] = useState('book-categories-none');
    const showBooks = () => {
        setShowCategories('book-categories-block')
    }

    return (
        <div className="recommends">
            <div className={props.class}>
                <a href="#">Literatura</a>
                <a href="#">Kryminał,Thriller,Sensacja</a>
                <a href="#">Dla dzieci</a>
                <a href="#">Nauka i Biznes</a>
                <a href="#">Filozofia</a>
                <a href="#">Kuchnia</a>
                <a href="#">Moda i Uroda</a>
        </div>
            <div className="book">
                <div className="book-image"></div>
                <div className="book-info">
                    <button>Polecane</button>
                    <span className="book-title">Cesarzowa. Pierwsze lata Sisi na wiedeńskim dworze</span>
                    <span className="book-author">Martina Winkelhofer</span>
                    <h4 className="book-price">56,99zł</h4>
                    <button className="addtobuy">Do koszyka</button>
                    
                </div>
            </div>
            <div className="book">
            <div className="book-image"></div>
                <div className="book-info">
                    <button>Polecane</button>
                    <span className="book-title">Cesarzowa. Pierwsze lata Sisi na wiedeńskim dworze</span>
                    <span className="book-author">Martina Winkelhofer</span>
                    <h4 className="book-price">56,99zł</h4>
                    <button className="addtobuy">Do koszyka</button>
                    
                </div>
            </div>
            <div className="book">
            <div className="book-image"></div>
                <div className="book-info">
                    <button>Polecane</button>
                    <span className="book-title">Cesarzowa. Pierwsze lata Sisi na wiedeńskim dworze</span>
                    <span className="book-author">Martina Winkelhofer</span>
                    <h4 className="book-price">56,99zł</h4>
                    <button className="addtobuy">Do koszyka</button>
                    
                </div>
            </div>
            <div className="book">
            <div className="book-image"></div>
                <div className="book-info">
                    <button>Polecane</button>
                    <span className="book-title">Cesarzowa. Pierwsze lata Sisi na wiedeńskim dworze</span>
                    <span className="book-author">Martina Winkelhofer</span>
                    <h4 className="book-price">56,99zł</h4>
                    <button className="addtobuy">Do koszyka</button>
                    
                </div>
            </div>
            <div className="book">
            <div className="book-image"></div>
                <div className="book-info">
                    <button>Polecane</button>
                    <span className="book-title">Cesarzowa. Pierwsze lata Sisi na wiedeńskim dworze</span>
                    <span className="book-author">Martina Winkelhofer</span>
                    <h4 className="book-price">56,99zł</h4>
                    <button className="addtobuy">Do koszyka</button>
                    
                </div>
            </div>
            <div className="book">
            <div className="book-image"></div>
                <div className="book-info">
                    <button>Polecane</button>
                    <span className="book-title">Cesarzowa. Pierwsze lata Sisi na wiedeńskim dworze</span>
                    <span className="book-author">Martina Winkelhofer</span>
                    <h4 className="book-price">56,99zł</h4>
                    <button className="addtobuy">Do koszyka</button>
                    
                </div>
            </div>
            <div className="book">
            <div className="book-image"></div>
                <div className="book-info">
                    <button>Polecane</button>
                    <span className="book-title">Cesarzowa. Pierwsze lata Sisi na wiedeńskim dworze</span>
                    <span className="book-author">Martina Winkelhofer</span>
                    <h4 className="book-price">56,99zł</h4>
                    <button className="addtobuy">Do koszyka</button>
                    
                </div>
            </div>
            <div className="book">
            <div className="book-image"></div>
                <div className="book-info">
                    <button>Polecane</button>
                    <span className="book-title">Cesarzowa. Pierwsze lata Sisi na wiedeńskim dworze</span>
                    <span className="book-author">Martina Winkelhofer</span>
                    <h4 className="book-price">56,99zł</h4>
                    <button className="addtobuy">Do koszyka</button>
                    
                </div>
            </div>
            <div className="book">
            <div className="book-image"></div>
                <div className="book-info">
                    <button>Polecane</button>
                    <span className="book-title">Cesarzowa. Pierwsze lata Sisi na wiedeńskim dworze</span>
                    <span className="book-author">Martina Winkelhofer</span>
                    <h4 className="book-price">56,99zł</h4>
                    <button className="addtobuy">Do koszyka</button>
                    
                </div>
            </div>
            
        </div>
        
    )
}

export default Recommends