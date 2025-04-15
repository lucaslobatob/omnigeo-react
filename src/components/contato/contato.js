import './contato.css';
import logoaut from '../../assets/img/logoaut.png';
import instagram from '../../assets/icons/instagram-icon.png';
import facebook from '../../assets/icons/facebook-icon.png';
import telefone from '../../assets/icons/phone-icon.png';
import email from '../../assets/icons/mail-icon.png';
import localizacao from '../../assets/icons/localizacao-icon.png';
import clock from '../../assets/icons/clock-icon.png';

function Contato() {
    return (
        <section className="container-conts">
            <div className="conts-init">
                <img src={logoaut} alt="Logo Omnigeo" />
                <p>Estamos prontos para atender às suas necessidades com <br /> eficiência e agilidade.</p>
                <p>Solicite um orçamento sem compromisso e permita-nos <br /> apresentar soluções geotécnicas que impulsionam o sucesso <br /> do seu projeto.</p>
            </div>

            <div class="conts-redes">
                <h2>Siga nas redes sociais!</h2>
                <a href="https://www.instagram.com/omnigeo_/" target="_blank">
                    <img src={instagram} alt="Logo do Instagram" />
                    Instagram - Omnigeo | VDF Engenharia
                </a>
                <a href="https://www.facebook.com/OmnigeoImp" target="_blank">
                    <img src={facebook} alt="Logo do Facebook" />
                    Facebook - Omnigeo | VDF Engenharia
                </a>
            </div>

            <div className="conts-atendimento">
                <h2>Atendimento</h2>

                <div className="container-icon">
                    <img src={telefone} alt="Ícone telefone" />
                    <p>(14) 99622-8947 | (14) 99732-9179</p>
                </div>

                <div className="container-icon">
                    <img src={email} alt="Ícone Email" />
                    <p>
                        tatiane.omnigeo@hotmail.com <br />
                        daniele.omnigeo@hotmail.com
                    </p>
                </div>

                <div className="container-icon">
                    <img src={localizacao} alt="Ícone localização" />
                    <p>Centro empresarial das Américas <br /> Bauru-SP</p>
                </div>

                <div className="container-icon">
                    <img src={clock} alt="Ícone relógio" />
                    <p>Horário de funcionamento: de segunda à sexta <br /> das 09:00h às 18:00h</p>
                </div>
            </div>
        </section>
    );
}

export default Contato;
