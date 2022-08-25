import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "../pages/home";
import Posts from "../pages/posts";
import Navbar from '../components/navbar';
import Esporte from "../pages/postslista/esporte/esporte.jsx";
import Escolar from "../pages/postslista/escolar/escolar.jsx";
import Internet from "../pages/postslista/internet/internet";
import Estrutural from "../pages/postslista/estrutural/estrutural";
import Pagina404 from "../components/pagina404";

export default function Rotas() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/sobre" element={<Posts />} />
                <Route path="/Racismo-No-Esporte" element={<Esporte />} />
                <Route path="/Racismo-Escolar" element={<Escolar />} />
                <Route path="/Racismo-Na-Internet" element={<Internet />} />
                <Route path="/Racismo-Estrutural" element={<Estrutural />} />
                <Route path="*" element={<Pagina404 />} />
            </Routes>
        </BrowserRouter>
    )
}