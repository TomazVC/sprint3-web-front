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
        else if(location.pathname === "/Contato"){
            setLinkAtivo("Contato");
        }
        else if(location.pathname === "/Empresas"){
            setLinkAtivo("Empresas");
        }
        else if(location.pathname === "/Blog"){
            setLinkAtivo("Blog");
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
                <img src={SoftForge} alt={SoftForgeAlt} className="logo2"/>
                <nav>
                    <ul>
                        <li><Link to={'/TrabalheAqui'} style={estiloLink("TrabalheAqui")}>Trabalhe aqui</Link></li>
                        <li><Link to={'/Contato'} style={estiloLink("Contato")}>Contato</Link></li>
                        <li><Link to={'/Empresas'} style={estiloLink("Empresas")}>Para Empresas</Link></li>
                        <li><Link to={'/Blog'} style={estiloLink("Blog")}>Blog</Link></li>
                    </ul>
                </nav>
                <div>
                    <p className="foo-text">
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