import Cabecalho from "../components/Cabecalho";
import Rodape from "../components/Rodape";
import Mainblog from "../components/Mainblog";
import "../style/pages/blog.scss";

export default function Blog(){
    return(
        <div className="containerBlog">
            <Cabecalho/>
            <Mainblog/>
            <Rodape/>
        </div>
    )
}