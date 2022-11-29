import NavBar from "./NavBar";
import Footer from "./Footer";
import {useContext, useEffect, useState} from "react";
import KoszykContext from "../Context/KoszykContext";
import { useNavigate } from "react-router-dom";

const Koszyk = () => {

    const [isEmptyBin , setisEmptyBin] = useState(false);
    const [items, setItems] = useState([]);
    const navigate = useNavigate();

  
   

    const context = useContext(KoszykContext);
    
    useEffect(()=> {
        setItems([...context.item])
        console.log(context.item);
        if(context.item.length >= 1){
            setisEmptyBin(true);
        }else if(context.item.length == 0){
            setisEmptyBin(false);
        }
    },[])

   const buy = () => {
    navigate('/transakcja');
   }

  

   
    return(
    <>
    <NavBar />
    <div className="koszyk">
        {isEmptyBin === false ? <span>Koszyk jest pusty</span> : <div className="koszyk-item">  {context.item.map((item,index)=>{

            return(
                <><div className="item-koszyk"><span>{item.title}</span><span>{item.price}</span><button onClick={(e) => {
                   
                    const ind = context.item.indexOf(item);
                    console.log(ind);
                    const arr = (context.item).splice(index,1);
                    setItems([...arr]);
                    if(context.item.length == 0){
                        setisEmptyBin(false);
                    }
                   
                    
                }} className="btn btn-danger">X</button></div></>
            )
        })}
        <button onClick={buy} className="btn btn-success">Zapłać</button>
        </div>} 
    </div>
    <Footer />
    </>
    )
}

export default Koszyk