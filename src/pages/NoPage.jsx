import Cabecalho from "../components/Cabecalho";
import Rodape from "../components/Rodape";
import "../style/pages/main.scss";

export default function NoPage(){
    return(
        <>
            <Cabecalho/>
            <h2>Error 404: Not Found</h2>
            <Rodape/>
        </>
    )
}