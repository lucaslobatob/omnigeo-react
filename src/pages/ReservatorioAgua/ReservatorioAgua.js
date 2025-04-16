import React from 'react';
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import { Fancybox } from '@fancyapps/ui';
import { useEffect } from 'react';
import Header from '../../components/header/header.js';
import Orcamento from '../../components/orcamentos/orcamento.js';
import Contato from '../../components/contato/contato.js';
import FaleConosco from '../../components/faleConosco/faleConosco.js';
import Footer from '../../components/footer/footer.js';
import './reservatorioAgua.css';
import reservatorioAgua1 from '../../assets/img/imgObras/reservatorioagua/14.png';
import reservatorioAgua2 from '../../assets/img/imgObras/reservatorioagua/15.png';
import reservatorioAgua3 from '../../assets/img/imgObras/reservatorioagua/16.png';
import reservatorioAgua4 from '../../assets/img/imgObras/reservatorioagua/17.png';
import reservatorioAgua5 from '../../assets/img/imgObras/reservatorioagua/18.png';
import reservatorioAgua6 from '../../assets/img/imgObras/reservatorioagua/19.png';
import reservatorioAgua7 from '../../assets/img/imgObras/reservatorioagua/20.png';
import reservatorioAgua8 from '../../assets/img/imgObras/reservatorioagua/21.png';

function ReservatorioAgua() {
    useEffect(() => {
        Fancybox.bind('[data-fancybox="gallery"]', {});
    }, []);

    return (
        <div>
            <Header />
            <main>
                <section className="conteudo-reservatorio">
                    <h1>Reservatório de Água</h1>
                    <p>
                        Para reservatórios de água, utilizamos geomembranas PEAD de alta resistência, garantindo estanqueidade e longa vida útil ao sistema. A aplicação é ideal tanto para abastecimento quanto para fins industriais e agrícolas.
                    </p>
                    <section className="imagens-obras">
                        {[reservatorioAgua4, reservatorioAgua3, reservatorioAgua5, reservatorioAgua6, reservatorioAgua1, reservatorioAgua7, reservatorioAgua2, reservatorioAgua8].map((imgSrc, index) => (
                            <a href={imgSrc} data-fancybox="gallery" key={index}>
                                <img src={imgSrc} alt={`Reservatório de Água ${index + 1}`} className="imagem-reservatorio" />
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

export default ReservatorioAgua;
