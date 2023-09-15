import Cabecalho from "../components/Cabecalho";
import Maintrabalheaqui from "../components/Maintrabalheaqui";
import Sectiontrabalheaqui from "../components/Sectiontrabalheaqui";
import Rodape from "../components/Rodape";
import "../style/pages/trabalheaqui.scss";

export default function TrabalheAqui(){
    return(
        <div className="containerTrabalheAqui">
            <Cabecalho/>
            <Sectiontrabalheaqui/>
            <Maintrabalheaqui/>
            <Rodape/>
        </div>
    )
}