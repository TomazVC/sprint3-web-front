import React, {useState, useEffect} from "react";
import SoftForge from "../img/SF_IBM.png";
import {Link, useLocation} from "react-router-dom";
import "../style/components/rodape.scss";

export default function Rodape(){
    const SoftForgeAlt = "SoftForgeAlt"
    const location = useLocation();
    const [linkAtivo, setLinkAtivo] = useState("");

    useEffect(() => {
        if(location.pathname === "/TrabalheAqui"){
            setLinkAtivo("TrabalheAqui");
        }
        else if(location.pathname === "/Construcao"){
            setLinkAtivo("Construcao");
        }
        else if(location.pathname === "/Construcao"){
            setLinkAtivo("Construcao2");
        }
        else if(location.pathname === "/Construcao"){
            setLinkAtivo("Construcao3");
        }
        else{
            setLinkAtivo("");
        }
        },[location.pathname]);
    
        const estiloLink = (link) => ({
            color: link === linkAtivo ? "#6BF8D9" : "#5e9186",
        });

    return(
        <>
            <footer>
                <img src={SoftForge} alt={SoftForgeAlt} class="logo2"/>
                <nav>
                    <ul>
                        <li><Link to={'/TrabalheAqui'} style={estiloLink("TrabalheAqui")}>Trabalhe aqui</Link></li>
                        <li><Link to={'/Construcao'} style={estiloLink("Construcao")}>Contato</Link></li>
                        <li><Link to={'/Construcao'} style={estiloLink("Construcao2")}>Para Empresas</Link></li>
                        <li><Link to={'/Construcao'} style={estiloLink("Construcao3")}>Blog</Link></li>
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