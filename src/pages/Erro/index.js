import { Link } from "react-router-dom";

function Erro(){
    return (
        <div>
            <h2>Erro 404</h2>
            <p>Página não encontrada</p>
            <span>Ultilize esse links para voltar a paginas</span>
            <Link to="Home">Voltar para a página inicial</Link>
            <Link to="Login">Voltar para a página de login</Link>
            <Link to="Contato">Voltar para a página de login</Link>
        </div>
    );
}


export default Erro;