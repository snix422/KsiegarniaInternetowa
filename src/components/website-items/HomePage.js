import Recommends from "./Recommends"
import Bestsellers from "./Bestsellers"

const HomePage = (props) => {
    return(
    <div className="home-content">
        <h3>Polecamy</h3>
        <Recommends class={props.class} />
        <h3>Bestsellery</h3>
        <Bestsellers />
    </div>
    )

}


export default HomePage