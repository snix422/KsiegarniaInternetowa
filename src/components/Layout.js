import NavBar from "./website-items/NavBar"
import HomePage from "./website-items/HomePage"
import Footer from "./website-items/Footer"
import { useState } from "react"

const Layout = () => {

    const [showCategory, setShowCategory] = useState('');
    
    
    const takeClass = (value) => {

        console.log(value);
        setShowCategory(value);
    }

   

    return ( 
        <>
        <NavBar class={takeClass} />
        <HomePage class={showCategory} />
        <Footer />
       </>

    )
}

export default Layout