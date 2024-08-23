import { Link } from "react-router-dom";

function Contato (){
    return (
        <div>
            <h1>Bem-vindo a pagina Contato</h1>
            <span>42 98402-1000</span>
            <span>Frost Salazar</span>
            <br/>
            <Link to="/home">Ir para a pagina Sobre</Link><br/>
            <Link to="/sobre">Ir para a pagina contato</Link>
            <hr/>
            <Link to="/produto">Ir para a pagina produto</Link>

        </div>
    );
}

export default Contato;