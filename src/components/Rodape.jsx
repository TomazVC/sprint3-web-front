import "../style/components/rodape.scss";
import SoftForge from "../img/SF_IBM.png";
import {Link} from 'react-router-dom'

export default function Rodape(){
    let SoftForgeAlt = "SoftForgeAlt"
    return(
        <>
            <footer>
                <img src={SoftForge} alt={SoftForgeAlt} class="logo2"/>
                <nav>
                    <ul>
                        <li><Link to={'/TrabalheAqui'}>Trabalhe aqui</Link></li>
                        <li><Link to={'/Construcao'}>Contato</Link></li>
                        <li><Link to={'/Construcao'}>Para Empresas</Link></li>
                        <li><Link to={'/Construcao'}>Blog</Link></li>
                    </ul>
                </nav>
                <div>
                    <p class="foo-text">
                        <Link to={'/Construcao'}>
                            Compliance
                            <br/>
                                Política de Privacidade
                            <br/>
                                Termos de Uso
                        </Link>
                    </p>
                </div>
            </footer>
        </>
    )
}