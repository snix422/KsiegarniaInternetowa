import NavBar from "./NavBar";
import Footer
from "./Footer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Rejestracja = () => {

    const navigate = useNavigate();

    const [inputs, setInputs] = useState([]);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }
    const handleSubmit = (event) => {
        event.preventDefault();
       const url = `http://localhost:8000/php/registartion.php`;
        axios.post(url,
        {
        headres:{
            'Access-Control-Allow-Origin':' http://localhost:8000',
            'Access-Control-Allow-Methods': 'HEAD, GET, POST, PUT, PATCH, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type', 
        },
        withCredentials: true,
        }, inputs
    ).then(response=>{console.log(response.data);
        }).catch(err=>console.log(err.message));
       
    }

    return (
        
        <div className="register">
            <NavBar />
            <span className="text-regsister">Rejestracja</span>
            <label className="label-register">Login</label>
            <input className="input-register" name="login" onChange={handleChange} type="text" placeholder="Wpisz swój login"></input>
            <label className="label-register">Hasło</label>
            <input className="input-register" name="pass" onChange={handleChange} type="text" placeholder="Wpisz swoje hasło"></input>
            <label className="label-register">E-mail</label>
            <input className="input-register" name="email" onChange={handleChange} type="email" placeholder="Wpisz swój login"></input>
            <button onClick={handleSubmit} className="button-register">Załóż konto</button>
            <Footer />

        </div>
    )
}

export default Rejestracja