import React from 'react';
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import { Fancybox } from '@fancyapps/ui';
import { useEffect } from 'react';
import Header from '../../components/header/header.js';
import Orcamento from '../../components/orcamentos/orcamento.js';
import Contato from '../../components/contato/contato.js';
import FaleConosco from '../../components/faleConosco/faleConosco.js';
import Footer from '../../components/footer/footer.js';
import './ete.css';
import ete from '../../assets/img/imgObras/ete/40.png';

function ETE() {
    useEffect(() => {
        Fancybox.bind('[data-fancybox="gallery"]', {});
    }, []);

    return (
        <div>
            <Header />
            <main>
                <section className="conteudo-reservatorio">
                    <h1>ETE - Estação de Tratamento de Esgoto</h1>
                    <p>
                        As geomembranas PEAD têm papel fundamental na impermeabilização de lagoas e tanques em ETEs, evitando infiltrações e garantindo o funcionamento eficiente do sistema de tratamento. Nossas instalações são realizadas com foco na qualidade, respeitando todas as exigências técnicas e priorizando a segurança ambiental.
                    </p>
                    <section className="imagens-obras">
                        {[ete].map((imgSrc, index) => (
                            <a href={imgSrc} data-fancybox="gallery" key={index}>
                                <img src={imgSrc} alt={`Estação de Tratamento de Esgoto ${index + 1}`} className="imagem-reservatorio" />
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

export default ETE;
