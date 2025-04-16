import React from 'react';
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import { Fancybox } from '@fancyapps/ui';
import { useEffect } from 'react';
import Header from '../../components/header/header.js';
import Orcamento from '../../components/orcamentos/orcamento.js';
import Contato from '../../components/contato/contato.js';
import FaleConosco from '../../components/faleConosco/faleConosco.js';
import Footer from '../../components/footer/footer.js';
import './reservatorioIrrigacao.css';
import reservatorioIrrigacao1 from '../../assets/img/imgObras/reservatorioirrigacao/23.png';
import reservatorioIrrigacao2 from '../../assets/img/imgObras/reservatorioirrigacao/24.png';
import reservatorioIrrigacao3 from '../../assets/img/imgObras/reservatorioirrigacao/25.png';
import reservatorioIrrigacao4 from '../../assets/img/imgObras/reservatorioirrigacao/26.png';
import reservatorioIrrigacao5 from '../../assets/img/imgObras/reservatorioirrigacao/27.png';
import reservatorioIrrigacao6 from '../../assets/img/imgObras/reservatorioirrigacao/28.png';

function ReservatorioIrrigacao() {
    useEffect(() => {
        Fancybox.bind('[data-fancybox="gallery"]', {});
    }, []);

    return (
        <div>
            <Header />
            <main>
                <section className="conteudo-reservatorio">
                    <h1>Reservatório de Irrigação</h1>
                    <p>
                        A impermeabilização com geomembranas PEAD em reservatórios de irrigação permite o armazenamento eficiente da água, reduzindo perdas por infiltração. É uma solução prática e econômica para produtores rurais e projetos agrícolas de todos os portes.
                    </p>
                    <section className="imagens-obras">
                        {[reservatorioIrrigacao1, reservatorioIrrigacao2, reservatorioIrrigacao3, reservatorioIrrigacao4, reservatorioIrrigacao5, reservatorioIrrigacao6].map((imgSrc, index) => (
                            <a href={imgSrc} data-fancybox="gallery" key={index}>
                                <img src={imgSrc} alt={`Reservatório de Irrigação ${index + 1}`} className="imagem-reservatorio" />
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
