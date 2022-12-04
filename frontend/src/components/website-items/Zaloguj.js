import NavBar from "./NavBar";
import Footer from "./Footer";
import {Link } from "react-router-dom";
import { useState, useEffect } from "react";
const Zaloguj = () => {

    const [valid, setValid] = useState(null);
    const [errors , setErrors] = useState({
        mail: '',
        haslo: '',
    })
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const LogIn = () => {
        setValid(false);
    }

    const takepassinput = (e) => {
        console.log(e.target.value);
        setPassword(e.target.value);
        console.log(password);

    }

    const takeemailinput = (e) => {
        console.log(e.target.value);
        setEmail(e.target.value);
        console.log(email);

    }

    useEffect(()=> {
        if(password.length>=4 || password.length === 0){
            setErrors({haslo:''})
        }else {
            setErrors({haslo: 'Wymagane 4 litery'});
            console.log(errors.haslo);
        }
    },[password])


    useEffect(()=> {
        if(validateEmail(email)){
            setErrors({mail:''})
        }else {
            setErrors({mail:'Niepoprawny email'});
        }
    },[email])

    function validateEmail(email) {
        const res = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return res.test(email);
      }
    return (
        <>
        <NavBar />
        <div className="zaloguj">
            <span className="text-zaloguj">Zaloguj</span>
            { valid === false ? <div className="alert alert-danger">Nieprawidłowe dane logowania</div> : null }
            <label className="label-zaloguj">Login</label>
            <input value={email} onChange={takeemailinput} className={`form-control ${errors.mail ? 'is-invalid' : null }`}type="text" placeholder="Wprowadź swój login"></input>
            <div className="invalid-feedback">{errors.mail}</div>
            <label className="label-zaloguj">Hasło</label>
            <input value={password} onChange ={takepassinput} className={`form-control ${errors.haslo ? 'is-invalid' : null}`} type="text" placeholder="Wprowadź swoje hasło"></input>
            <div className="invalid-feedback">{errors.haslo}</div>
            <button className="button-zaloguj" onClick={LogIn}>Zaloguj</button>
            <span className="info-register">Nie masz jeszcze konta?</span>
            <Link to="/rejestracja" className="button-register">Załóż konto</Link>
        </div>
        <Footer />
        </>
    )
}

export default Zaloguj