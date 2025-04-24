import React from 'react';
import './notfound.css'
import Header from '../../components/header/header.js';
import Orcamento from '../../components/orcamentos/orcamento.js';
import Contato from '../../components/contato/contato.js';
import FaleConosco from '../../components/faleConosco/faleConosco.js';
import Footer from '../../components/footer/footer.js';

function NotFound() {
    return (
        <div>
            <Header />
            <main>
                <section className="conteudo-reservatorio">
                    <h1>Página não encontrada</h1>
                    <p>
                        Desculpe, essa página não foi encontrada.
                    </p>
                    <button className="btn-voltar">
                        <a href="/">Voltar para a página inicial</a>
                    </button>
                </section>
                <Orcamento />
                <Contato />
                <FaleConosco />
            </main>
            <Footer />
        </div>
    );
}

export default NotFound;
