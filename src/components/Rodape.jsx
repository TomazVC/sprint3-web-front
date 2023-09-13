import "../style/components/rodape.scss";
import SoftForge from "../img/SF_IBM.png";

export default function Rodape(){
    let SoftForgeAlt = "SoftForgeAlt"
    return(
        <>
            <footer>
                <img src={SoftForge} alt={SoftForgeAlt} class="logo2"/>
                <h2><a href="./TrabalheAqui">Trabalhe aqui</a></h2>
                <h2><a href="./Construcao">Contato</a></h2>
                <h2><a href="./Construcao">Para Empresas</a></h2>
                <h2><a href="./Construcao">Blog</a></h2>
                <div>
                    <p class="foo-text">
                        <a href="./Construcao">
                            Compliance
                            <br/>
                                Política de Privacidade
                            <br/>
                                Termos de Uso
                        </a>
                    </p>
                </div>
            </footer>
        </>
    )
}