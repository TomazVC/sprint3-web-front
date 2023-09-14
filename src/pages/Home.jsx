import Cabecalho from "../components/Cabecalho";
import Rodape from "../components/Rodape";
import Mainhome from '../components/Mainhome';
import Sectionhome from '../components/Sectionhome';
import "../style/pages/main.scss";

export default function Home(){
    return(
        <>
            <Cabecalho/>
            <Mainhome/>
            <Sectionhome/>
            <Rodape/>
        </>
    )
}