import {useState} from 'react';

const Newsletter = () => {

    const [inputSend, setinputSend] = useState(true);

    const send = () => {
        setinputSend(false)
    }

    const ok = () => {
        setinputSend(true)
    }

    return (
        <div className="newsletter">
            <span>Zapisz się na newsletter</span>
            <input type="email" placeholder="Wpisz swój e-mail"></input>
            <button onClick={send}>Wyślij</button>
            {inputSend ? null : <div className="newsletter-info"><span>Zostałeś zapisany do newslettera</span><button className='ok' onClick={ok}>Ok</button></div>}
        </div>
        
        
    )
}

export default Newsletter

