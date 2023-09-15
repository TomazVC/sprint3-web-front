import Cabecalho from "../components/Cabecalho";
import Rodape from "../components/Rodape";
import Maincontato from "../components/Maincontato";
import "../style/pages/contato.scss";

export default function Contato(){
    return(
        <div className="containerContato">
            <Cabecalho/>
            <Maincontato/>
            <Rodape/>
        </div>
    )
}