import { Link } from "react-router-dom";

function Home (){
    return (
        <div>
            <h1>Bem-vindo a pagina Home</h1>
            <span>Frost Salazar</span>
            <br/>
            <Link to="/sobre">Ir para a pagina Sobre</Link><br/>
            <Link to="/contato">Ir para a pagina contato</Link>
            <hr/>
            <Link to="/produto">Ir para a pagina produto</Link>

        </div>
    );
}

export default Home;