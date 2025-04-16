import React from 'react';
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import { Fancybox } from '@fancyapps/ui';
import { useEffect } from 'react';
import Header from '../../components/header/header.js';
import Orcamento from '../../components/orcamentos/orcamento.js';
import Contato from '../../components/contato/contato.js';
import FaleConosco from '../../components/faleConosco/faleConosco.js';
import Footer from '../../components/footer/footer.js';
import './biodigestor.css';
import biodigestor1 from '../../assets/img/imgObras/biodigestor/2.png';
import biodigestor2 from '../../assets/img/imgObras/biodigestor/3.png';
import biodigestor3 from '../../assets/img/imgObras/biodigestor/4.png';
import biodigestor4 from '../../assets/img/imgObras/biodigestor/5.png';

function ReservatorioIrrigacao() {
    useEffect(() => {
        Fancybox.bind('[data-fancybox="gallery"]', {});
    }, []);

    return (
        <div>
            <Header />
            <main>
                <section className="conteudo-reservatorio">
                    <h1>Biodigestor</h1>
                    <p>
                        A instalação de geomembranas PEAD em biodigestores permite o armazenamento seguro de resíduos orgânicos e a captação eficiente do biogás. Nossas instalações são duráveis, seguras e ideais para projetos de energia renovável e sustentabilidade.
                    </p>
                    <section className="imagens-obras">
                        {[biodigestor1, biodigestor2, biodigestor3, biodigestor4].map((imgSrc, index) => (
                            <a href={imgSrc} data-fancybox="gallery" key={index}>
                                <img src={imgSrc} alt={`Biodigestor ${index + 1}`} className="imagem-reservatorio" />
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
