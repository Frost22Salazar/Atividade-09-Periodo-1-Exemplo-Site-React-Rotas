import { Link } from "react-router-dom";

function Sobre (){
    return (
        <div>
            <h1>Bem-vindo a pagina Sobre</h1>
            <span>Frost Salazar</span>
            <br/>
            <Link to="/home">Ir para a pagina home</Link><br/>
            <Link to="/contato">Ir para a pagina contato</Link>
            <hr/>
            <Link to="/produto">Ir para a pagina produto</Link>

        </div>
    );
}

export default Sobre;