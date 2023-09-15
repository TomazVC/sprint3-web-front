import Cabecalho from "../components/Cabecalho";
import Rodape from "../components/Rodape";
import Mainlogin from "../components/Mainlogin";
import "../style/pages/construcao.scss";

export default function Login(){
    return(
        <div className="container">
            <Cabecalho/>
            <Mainlogin/>
            <Rodape/>
        </div>
    )
}