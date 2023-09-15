import Cabecalho from "../components/Cabecalho";
import Mainproduto from "../components/Mainproduto";
import Rodape from "../components/Rodape";
import Asideproduto from "../components/Asideproduto";
import "../style/pages/produto.scss";

export default function Produto(){
    return(
        <div className = "containerProduto">
            <Cabecalho/>
            <Mainproduto/>
            <Asideproduto/>
            <Rodape/>
        </div>    
    )
}