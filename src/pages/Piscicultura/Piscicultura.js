import React from 'react';
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import { Fancybox } from '@fancyapps/ui';
import { useEffect } from 'react';
import Header from '../../components/header/header.js';
import Orcamento from '../../components/orcamentos/orcamento.js';
import Contato from '../../components/contato/contato.js';
import FaleConosco from '../../components/faleConosco/faleConosco.js';
import Footer from '../../components/footer/footer.js';
import './piscicultura.css';
import piscicultura1 from '../../assets/img/imgObras/piscicultura/9.png';
import piscicultura2 from '../../assets/img/imgObras/piscicultura/10.png';
import piscicultura3 from '../../assets/img/imgObras/piscicultura/11.png';
import piscicultura4 from '../../assets/img/imgObras/piscicultura/12.png';

function Piscicultura() {
    useEffect(() => {
        Fancybox.bind('[data-fancybox="gallery"]', {});
    }, []);

    return (
        <div>
            <Header />
            <main>
                <section className="conteudo-reservatorio">
                    <h1>Piscicultura</h1>
                    <p>
                        Na piscicultura, o uso de geomembranas PEAD proporciona um ambiente controlado, livre de vazamentos e ideal para o desenvolvimento saudável dos peixes. Realizamos instalações com ótimo padrão técnico, garantindo durabilidade e ótimo desempenho dos tanques escavados.
                    </p>
                    <section className="imagens-obras">
                        {[piscicultura1, piscicultura2, piscicultura3, piscicultura4].map((imgSrc, index) => (
                            <a href={imgSrc} data-fancybox="gallery" key={index}>
                                <img src={imgSrc} alt={`Piscicultura ${index + 1}`} className="imagem-reservatorio" />
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

export default Piscicultura;
