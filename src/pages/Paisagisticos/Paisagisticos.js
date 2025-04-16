import React from 'react';
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import { Fancybox } from '@fancyapps/ui';
import { useEffect } from 'react';
import Header from '../../components/header/header.js';
import Orcamento from '../../components/orcamentos/orcamento.js';
import Contato from '../../components/contato/contato.js';
import FaleConosco from '../../components/faleConosco/faleConosco.js';
import Footer from '../../components/footer/footer.js';
import './paisagistico.css';
import paisagísticos1 from '../../assets/img/imgObras/paisagistico/34.png';
import paisagísticos2 from '../../assets/img/imgObras/paisagistico/35.png';
import paisagísticos3 from '../../assets/img/imgObras/paisagistico/36.png';
import paisagísticos4 from '../../assets/img/imgObras/paisagistico/37.png';
import paisagísticos5 from '../../assets/img/imgObras/paisagistico/38.png';

function Paisagisticos() {
    useEffect(() => {
        Fancybox.bind('[data-fancybox="gallery"]', {});
    }, []);

    return (
        <div>
            <Header />
            <main>
                <section className="conteudo-reservatorio">
                    <h1>Obras Paisagísticas</h1>
                    <p>
                        Em projetos paisagísticos, a geomembrana PEAD é utilizada para criar lagos ornamentais, espelhos d’água e áreas úmidas com total controle de infiltração. Nosso trabalho garante durabilidade e ótimo acabamento, valorizando o projeto arquitetônico.
                    </p>
                    <section className="imagens-obras">
                        {[paisagísticos1, paisagísticos2, paisagísticos3, paisagísticos4, paisagísticos5].map((imgSrc, index) => (
                            <a href={imgSrc} data-fancybox="gallery" key={index}>
                                <img src={imgSrc} alt={`Paisagísticos ${index + 1}`} className="imagem-reservatorio" />
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

export default Paisagisticos;
