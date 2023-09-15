import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contato from "./pages/Contato";
import Empresas from "./pages/Empresas";
import Blog from "./pages/Blog";
import Contratar from "./pages/Contratar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NoPage from "./pages/NoPage";
import PeloMundo from "./pages/PeloMundo";
import Produto from "./pages/Produto";
import TrabalheAqui from "./pages/TrabalheAqui";
import "./style/pages/main.scss";

export default function App(){
  return(
    <div>
        <BrowserRouter>
            <Routes>
                <Route index element={<Home/>}/>
                <Route exact path="/contato" element={<Contato/>}/>
                <Route exact path="/empresas" element={<Empresas/>}/>
                <Route exact path="/contratar" element={<Contratar/>}/>
                <Route exact path="/blog" element={<Blog/>}/>
                <Route exact path="/login" element={<Login/>}/>
                <Route exact path="/pelomundo" element={<PeloMundo/>}/>
                <Route exact path="/produto" element={<Produto/>}/>
                <Route exact path="/trabalheaqui" element={<TrabalheAqui/>}/>
                <Route exact path="*" element={<NoPage/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  )
}