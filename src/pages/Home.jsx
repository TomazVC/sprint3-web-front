import Cabecalho from "../components/Cabecalho";
import Rodape from "../components/Rodape";
import Mainhome from '../components/Mainhome';
import Sectionhome from '../components/Sectionhome';
import Asidehome from "../components/Asidehome";
import '../style/pages/home.scss'


export default function Home(){
    return(
        <div className='container'>
            <Cabecalho/>
            <Mainhome/>
            <Sectionhome/>
            <Asidehome/>
            <Rodape/>
        </div>
    )
}