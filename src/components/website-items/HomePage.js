import Recommends from "./Recommends"
import Bestsellers from "./Bestsellers"

const HomePage = (props) => {
    return(
    <div className="home-content">
        <Recommends class={props.class} />
        <hr></hr>
        <Bestsellers />
    </div>
    )

}


export default HomePage