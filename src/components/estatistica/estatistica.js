import './estatistica.css';
import logoOmnigeo from '../../assets/img/omnigeo-logo-fontblack.png';
import Counter from './counter';

function Estatistica() {
    return (
        <div className="countainer-estatisticas">
            <div className="estatistica1">
                <Counter value={7000} suffix="mil" />
                <h3>Clientes atendidos</h3>
            </div>
            <div className="estatistica2">
                <Counter value={70000000} suffix="m²" />
                <h3>Geomembranas Instaladas</h3>
            </div>
            <img src={logoOmnigeo} alt="Logo Omnigeo" />
        </div>
    );
}

export default Estatistica;
