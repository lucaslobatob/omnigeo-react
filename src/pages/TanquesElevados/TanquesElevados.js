import React from 'react';
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import { Fancybox } from '@fancyapps/ui';
import { useEffect } from 'react';
import Header from '../../components/header/header.js';
import Orcamento from '../../components/orcamentos/orcamento.js';
import Contato from '../../components/contato/contato.js';
import FaleConosco from '../../components/faleConosco/faleConosco.js';
import Footer from '../../components/footer/footer.js';
import './tanquesElevados.css';
import tanqueElevado from '../../assets/img/imgObras/tanqueelevado/7.png';

function TanquesElevados() {
    useEffect(() => {
        Fancybox.bind('[data-fancybox="gallery"]', {});
    }, []);

    return (
        <div>
            <Header />
            <main>
                <section className="conteudo-reservatorio">
                    <h1>Tanques Elevados</h1>
                    <p>
                        Os tanques elevados com geomembranas PEAD são ideais para armazenamento de água e outros líquidos de forma segura e eficiente. Executamos a instalação com foco na resistência, estanqueidade e na adaptação à estrutura metálica ou em alvenaria.
                    </p>
                    <section className="imagens-obras">
                        {[tanqueElevado].map((imgSrc, index) => (
                            <a href={imgSrc} data-fancybox="gallery" key={index}>
                                <img src={imgSrc} alt={`Tanques Elevados ${index + 1}`} className="imagem-reservatorio" />
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

export default TanquesElevados;
