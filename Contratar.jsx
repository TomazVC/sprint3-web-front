import Cabecalho from "../components/Cabecalho";
import Rodape from "../components/Rodape";
import Contratarmain from "../components/Maincontratar"
import "../style/pages/contratar.scss"

export default function Contratar(){
    return(
        <div className="container-contratar">
            <Cabecalho/>
            <Contratarmain/>
            <Rodape/>
        </div>

    )
}