import Cabecalho from "../components/Cabecalho";
import Rodape from "../components/Rodape";
import Mainlogin from "../components/Mainlogin";
import "../style/pages/Login.scss";

export default function Login(){
    return(
        <div class="container-Login">
            <Cabecalho/>
            <Mainlogin/>
            <Rodape/>
        </div>
    )
}