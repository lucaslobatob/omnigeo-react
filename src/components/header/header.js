import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logoaut from "../../assets/img/logoaut.png";
import "./header.css";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const goToSection = (sectionId) => {
        if (location.pathname !== "/") {
            // Vai para a home, depois scrolla
            navigate("/", { state: { scrollTo: sectionId } });
        } else {
            // Já está na home, só scrolla
            const el = document.getElementById(sectionId);
            if (el) el.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <header className="header">
            <div className="header__logo">
                <Link to="/">
                    <img src={logoaut} alt="Logo Omnigeo" />
                </Link>
            </div>

            <nav>
                <ul className={`menu ${menuOpen ? "active" : ""}`}>
                    <li><Link to="/">Home</Link></li>
                    <li><a onClick={() => goToSection("quem-somos")}>Quem Somos</a></li>
                    <li><a onClick={() => goToSection("servicos")}>Serviços</a></li>
                    <li className="dropdown">
                        <a onClick={() => goToSection("obras")}>Obras</a>
                        <ul className="submenu">
                            <li><Link to="/reservatorio-agua">Reservatórios de Água</Link></li>
                            <li><Link to="/reservatorio-irrigacao">Reservatórios de Irrigação</Link></li>
                            <li><Link to="/tanques-elevados">Tanques Elevados</Link></li>
                            <li><Link to="/ete">Estação de Tratamento de Esgoto</Link></li>
                            <li><Link to="/aterros-sanitarios">Aterros Sanitários</Link></li>
                            <li><Link to="/piscicultura">Piscicultura</Link></li>
                            <li><Link to="/paisagisticos">Paisagísticos</Link></li>
                            <li><Link to="/biodigestor">Biodigestor</Link></li>
                        </ul>
                    </li>
                    <li><a href="#orcamentos">Orçamentos</a></li>
                </ul>
            </nav>

            {/* Botão de contato */}
            <div className="btn">
                <a href="https://wa.me/5514996228947" target="_blank">Contato</a>
            </div>
        </header>
    );
}

export default Header;
