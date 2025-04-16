import React from 'react';
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import { Fancybox } from '@fancyapps/ui';
import { useEffect } from 'react';
import Header from '../../components/header/header.js';
import Orcamento from '../../components/orcamentos/orcamento.js';
import Contato from '../../components/contato/contato.js';
import FaleConosco from '../../components/faleConosco/faleConosco.js';
import Footer from '../../components/footer/footer.js';
import './aterrosSanitarios.css';
import aterrosanitario1 from '../../assets/img/imgObras/aterrosanitario/30.png';
import aterrosanitario2 from '../../assets/img/imgObras/aterrosanitario/31.png';
import aterrosanitario3 from '../../assets/img/imgObras/aterrosanitario/32.png';


function ReservatorioIrrigacao() {
    useEffect(() => {
        Fancybox.bind('[data-fancybox="gallery"]', {});
    }, []);

    return (
        <div>
            <Header />
            <main>
                <section className="conteudo-reservatorio">
                    <h1>Aterros Sanitários</h1>
                    <p>
                        A impermeabilização com geomembranas PEAD é essencial em aterros sanitários para garantir a contenção adequada de resíduos e a proteção do solo e do lençol freático contra a contaminação. Nossa instalação garante ótimo acabamento e funcionalidade, sempre respeitando as exigências técnicas e ambientais do projeto.
                    </p>
                    <section className="imagens-obras">
                        {[aterrosanitario1, aterrosanitario2, aterrosanitario3].map((imgSrc, index) => (
                            <a href={imgSrc} data-fancybox="gallery" key={index}>
                                <img src={imgSrc} alt={`Aterros Sanitários ${index + 1}`} className="imagem-reservatorio" />
                            </a>
                        ))}
                    </section>
                </section>
                <Orcamento />
                <Contato />
                <FaleConosco />
            </main>
            <Footer />
        </div>
    );
}

export default ReservatorioIrrigacao;
