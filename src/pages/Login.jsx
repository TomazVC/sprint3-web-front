import Cabecalho from "../components/Cabecalho";
import Rodape from "../components/Rodape";
import Mainlogin from "../components/Mainlogin";

export default function Login(){
    return(
        <div className="container">
            <Cabecalho/>
            <Mainlogin/>
            <Rodape/>
        </div>
    )
}