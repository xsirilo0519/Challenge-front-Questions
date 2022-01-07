import {Link} from "react-router-dom"
import logo from "../imagen/logo.png"
const Navbar = ({elements}) => {
    return (
        <nav>
            <img src={logo}></img> <h1>QuestionsSof</h1>
        <section >
           
           {
               elements.map((element,index)=>{
                   return (<Link key={index} to={element.url}>{element.titulo}</Link>)
               })
           }
        </section>
        </nav>
    )
}

export default Navbar
