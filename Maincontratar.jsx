import "../style/components/maincontratar.scss"
import AquaLogo from "../img/aquatank_logo.png";

export default function Maincontratar(){
    const AquaLogoAlt = "AquaLogo";
    return(
        <>
            <main>
                <div className="conteudo-contratar">
                    <img src={AquaLogo} alt={AquaLogoAlt}/>
                    <div className="texto">
                        <h2>Contatos Aquatank:</h2>
                        <p>(xx) xxxxx-xxxx</p>
                        <p>email@aquatank.com</p>
                        <p>facebook.com/aquatank</p>
                        <p>Endereço: Rua dos Aquários 3798.</p>
                    </div>
                    <img src={AquaLogo} alt={AquaLogoAlt}/>
                </div>
        </main>
        </>
    )
}