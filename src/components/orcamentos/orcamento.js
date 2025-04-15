import './orcamento.css';

function Orcamento() {
    return (
        <section className="orcamentos" id="orcamentos">
            <h2>Fale Conosco</h2>
            <div className="container-orc">
                <div className="orc-main">
                    <h3>Solicite um Orçamento</h3>
                    <p>Estamos prontos para atender às suas necessidades com eficiência e agilidade!</p>
                    <p>
                        Solicite um orçamento sem compromisso e permita-nos apresentar soluções geotécnicas
                        <br /> que impulsionam o sucesso do seu projeto.
                    </p>
                </div>
                <div className="orc-form">
                    <form action="https://formsubmit.co/tatiane.omnigeo@hotmail.com" target="_blank" method="POST">
                        <label htmlFor="name">Nome</label>
                        <input type="text" name="name" id="name" placeholder="Digite seu nome" required />

                        <label htmlFor="email">E-mail</label>
                        <input type="email" name="email" id="email" placeholder="Digite seu e-mail" required />

                        <label htmlFor="numero">Telefone</label>
                        <input type="text" name="numero" id="numero" placeholder="Digite seu número de telefone" />

                        <label htmlFor="mensagem">Mensagem</label>
                        <textarea cols="30" rows="10" name="mensagem" id="mensagem" placeholder="Digite sua mensagem"></textarea>

                        <button type="submit">Enviar</button>

                        <input type="hidden" name="_subject" value="Novo Orçamento" />
                        <input type="text" name="_honey" style={{ display: "none" }} />
                        <input type="hidden" name="_captcha" value="false" />
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Orcamento;
