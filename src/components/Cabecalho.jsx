import React, {useState, useEffect} from "react";
import {Link, useLocation} from "react-router-dom";
import AquaLogo from "../img/aquatank_logo.png";
import "../style/components/cabecalho.scss";

export default function Cabecalho(){
    const AquaLogoAlt = "AquaLogo";
    const location = useLocation();
    const [linkAtivo, setLinkAtivo] = useState("");

    useEffect(() => {
    if(location.pathname === "/Produto"){
        setLinkAtivo("Produto");
    }
    else if(location.pathname === "/Contratar"){
        setLinkAtivo("Contratar");
    }
    else if(location.pathname === "/PeloMundo"){
        setLinkAtivo("PeloMundo");
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
            <header>
                <Link to={"/"}><img src={AquaLogo} alt={AquaLogoAlt} /></Link>
                <nav>
                    <ul>
                        <li><Link to={"/Produto"} style={estiloLink("Produto")}>Produto</Link></li>
                        <li><Link to={"/Contratar"} style={estiloLink("Contratar")}>Como Contratar</Link></li>    
                        <li><Link to={"/PeloMundo"} style={estiloLink("PeloMundo")}>AquaT pelo mundo</Link></li>    
                        <li><Link to={"/Login"} className="laranjinha">Login</Link></li>
                    </ul>
                </nav>
            </header>
        </>
    );
}