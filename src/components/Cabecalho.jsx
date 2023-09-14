import "../style/components/cabecalho.scss";
import {Link} from 'react-router-dom'
import AquaLogo from "../img/aquatank_logo.png";

export default function Cabecalho(){
    let AquaLogoAlt = "AquaLogo";
    return(
        <>
        <header>
                <Link to={'/'}>
                <img src={AquaLogo} alt={AquaLogoAlt}/>
                </Link>
            <nav>
                <ul>        
                    <li><Link to={'/Produto'}>Produto</Link></li>
                    <li><Link to={'/Contratar'}>Como Contratar</Link></li>
                    <li><Link to={'/PeloMundo'}>AquaT pelo mundo</Link></li>
                    <li><Link to={'/Login'} class='laranjinha'>Login</Link></li>
                </ul>
            </nav>
        </header>
        </>
    )
}