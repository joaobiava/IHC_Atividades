import { Link } from "react-router-dom";

function Sobre(){
    return(
        <div>
            <h1>Bem-vindo à página SOBRE</h1>

            <Link to='/'>Home</Link>
            <Link to='/contato'>contato</Link>

        </div>
    );
}

export default Sobre;