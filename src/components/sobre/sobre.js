import './sobre.css'
import mapaBrasil from '../../assets/img/brasil.png'

function Sobre() {
    return (
        <section className="quem-somos" id="quem-somos">
            <div className="qs-info">
                <h1 className="qs-title">Nossa História</h1>
                <p className="qs-p">A VDF Engenharia, mais conhecida como Omnigeo, há mais
                    de 26 anos oferece recursos abrangentes e um profundo
                    conhecimento na impermeabilização do solo,
                    sendo referência em soluções de instalação de geomembranas PEAD com excelência e comprometimento!
                    Possuimos uma equipe altamente treinada, com larga experiência no segmento!
                </p>
                <p>Trabalhamos com as normas da NBR 16199 barreiras geossinteticas.
                    instalação de geomembranas poliméricas.
                </p>
            </div>
            <div className="img-brasil">
                <img src={mapaBrasil} alt="Mapa do Brasil" />
                <p>Atuamos em todo território nacional!</p>
            </div>
        </section>
    );
}

export default Sobre;