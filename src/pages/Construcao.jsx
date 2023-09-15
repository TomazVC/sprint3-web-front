import Cabecalho from "../components/Cabecalho";
import Rodape from "../components/Rodape";
import Mainconstrucao from "../components/Mainconstrucao";
import "../style/pages/construcao.scss";

export default function Construcao(){
    return(
        <div className="container2">
            <Cabecalho/>
            <Mainconstrucao/>
            <Rodape/>
        </div>
    )
}