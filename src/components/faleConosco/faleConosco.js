import './faleConosco.css'
import whatsapp from '../../assets/icons/whatsapp-icon.png'

function FaleConosco() {
    return (
        <div className="whatsapp">
            <a href="https://wa.me/5514996228947" target="_blank">
                <img src={whatsapp} alt="fale conosco pelo whatsapp" title="fale conosco pelo whatsapp" width="75" />
            </a>
        </div>
    );
}

export default FaleConosco;