import ExemploHomemImg from "../img/exemplo_homem.webp";
import Exemplo2TankImg from "../img/exemplo2tank.png";
import VisaoCimaImg from "../img/visao_cima.png";
import "../style/components/asidehome.scss";

export default function asidehome(){
    let ExemploHomemImgAlt = "ExemploHomemImg";
    let Exemplo2TankImgAlt = "Exemplo2TankImg";
    let VisaoCimaImgAlt = "VisaoCimaImg";
    return(
        <>
            <aside>
                <img src={ExemploHomemImg} alt={ExemploHomemImgAlt}/>
                <img src={Exemplo2TankImg} alt={Exemplo2TankImgAlt}/>
                <img src={VisaoCimaImg} alt={VisaoCimaImgAlt}/>
            </aside>
        </>
    )
}