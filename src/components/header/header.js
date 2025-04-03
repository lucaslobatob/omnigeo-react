import { useState } from "react";
import logoaut from "../../assets/img/logoaut.png";
import "./header.css";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="header">
            <div className="header__logo">
                <img src={logoaut} alt="Logo Omnigeo" />
            </div>

            {/* Ícone do menu hamburguer */}
            <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                ☰
            </div>

            {/* Menu principal */}
            <nav>
                <ul className={`menu ${menuOpen ? "active" : ""}`}>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#quem-somos">Quem Somos</a></li>
                    <li><a href="#servicos">Serviços</a></li>
                    <li className="dropdown">
                        <a href="#obras">Obras</a>
                        <ul className="submenu">
                            <li><a href="#obras">Reservatórios de Água</a></li>
                            <li><a href="#obras">Reservatórios de Irrigação</a></li>
                            <li><a href="#obras">Reservatórios de Vinhaça</a></li>
                            <li><a href="#obras">Estação de Tratamento de Esgoto</a></li>
                            <li><a href="#obras">Aterros Sanitários</a></li>
                            <li><a href="#obras">Piscicultura</a></li>
                            <li><a href="#obras">Paisagísticos</a></li>
                            <li><a href="#obras">Biodigestor</a></li>
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
