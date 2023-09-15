import Cabecalho from "../components/Cabecalho";
import Rodape from "../components/Rodape";


export default function NoPage(){
    return(
        <>
            <Cabecalho/>
            <h2>Error 404: Not Found</h2>
            <Rodape/>
        </>
    )
}