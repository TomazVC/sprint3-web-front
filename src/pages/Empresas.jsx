import Cabecalho from "../components/Cabecalho";
import Rodape from "../components/Rodape";
import Mainempresas from "../components/Mainempresas";
import "../style/pages/empresas.scss";

export default function Empresas(){
    return(
        <div className="containerEmpresas">
            <Cabecalho/>
            <Mainempresas/>
            <Rodape/>
        </div>
    )
}