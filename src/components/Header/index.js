import { Link } from "react-router-dom";

function Header(){
    return (
        <header>
            <div>
                <Link to="/">Home</Link>
                <Link to="/sobre">Sobre</Link>
                <Link to="/contato">Contato</Link>
            </div>
        </header>
    );
}

export default Header;