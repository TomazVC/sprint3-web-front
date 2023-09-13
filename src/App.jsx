import { BrowserRouter, Routes, Route } from "react-router-dom";
import Construcao from "./pages/Construcao";
import Contratar from "./pages/Contratar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NoPage from "./pages/NoPage";
import PeloMundo from "./pages/PeloMundo";
import Produto from "./pages/Produto";
import TrabalheAqui from "./pages/TrabalheAqui";

export default function App(){
  return(
    <div>
        <BrowserRouter>
            <Routes>
                <Route index element={<Home/>}/>
                <Route exact path="/construcao" element={<Construcao/>}/>
                <Route exact path="/contratar" element={<Contratar/>}/>
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