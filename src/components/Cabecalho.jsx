import "../style/components/cabecalho.scss";
import AquaLogo from "../img/aquatank_logo.png";

export default function Cabecalho(){
    let AquaLogoAlt = "AquaLogo";
    return(
        <header>
            <a href="/">
                <img src={AquaLogo} alt={AquaLogoAlt} class="logo"/>
            </a>
            <h2><a href="./Produto">Produto</a></h2>
            <h2><a href="./Contratar">Como Contratar</a></h2>
            <h2><a href="./PeloMundo">AquaT Pelo Mundo</a></h2>
            <h2 class="laranjinha"><a href="./Login">Login</a></h2>
        </header>
    )
}