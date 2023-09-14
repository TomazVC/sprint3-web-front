import Cabecalho from "../components/Cabecalho";
import Rodape from "../components/Rodape";
import Mainhome from '../components/Mainhome'
import "../style/pages/main.scss";

export default function Home(){
    return(
        <>
            <Cabecalho/>
            <Mainhome/>
            <Rodape/>
        </>
    )
}