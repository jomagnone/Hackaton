
import { AppBar } from "@material-ui/core";
import { Link } from "react-router-dom";
import '../styles/NavBar.css';

const NavBar = () => {
    return (
        <AppBar position="relative">
            <div className="Wrapper">
                <div className="Left">
                    <Link to='/' style={{textDecoration: "none", color: "white"}}><h1 className="Logo">My Learning</h1></Link>
                </div>
                <div className="Center">
                    <Link to='/' style={{textDecoration: "none", color: "white"}}><div className="MenuItem">Home</div></Link>
                    <Link to='/courses' style={{textDecoration: "none", color: "white"}}><div className="MenuItem">Catalogo</div></Link>
                    <Link to='/myLearning' style={{textDecoration: "none", color: "white"}}><div className="MenuItem">Mis Cursos</div></Link>     
                    <Link to='/admin' style={{textDecoration: "none", color: "white"}}><div className="MenuItem">Gestion</div></Link>                
                </div>
                <div className="Right">

                    <div className="MenuItem"><Link to='/login' style={{textDecoration: "none", color: "white"}}>LOGIN</Link></div>
                </div>
            </div>
        </AppBar>
    );
}

export default NavBar;