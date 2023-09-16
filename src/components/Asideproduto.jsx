import Exemplotank from "../img/exemplotank.png";
import Reproducao from  "../img/reproducao.png";
import Exemplohomem from "../img/exemplo_homem.webp";
import Exemplo2tank from "../img/exemplo2tank.png";
import "../style/components/asideproduto.scss";

export default function asideproduto(){
    const ExemplotankAlt = "Exemplotank";
    const ReproducaoAlt = "Reproducao";
    const ExemplohomemAlt = "Exemplohomem";
    const Exemplo2tankAlt = "Exemplo2tank";

    return(
        <>
            <aside id="asideprodutoimg">
                <img src={Exemplotank} alt={ExemplotankAlt}/>
                <img src={Reproducao} alt={ReproducaoAlt}/>
                <img src={Exemplohomem} alt={ExemplohomemAlt}/>
                <img src={Exemplo2tank} alt={Exemplo2tankAlt}/>
            </aside>
        </>
    )
}

