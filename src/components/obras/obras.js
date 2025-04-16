import './obras.css';
import reservatorioAgua from '../../assets/img/imgObras/reservatorioagua/14.png';
import reservatorioIrrigacao from '../../assets/img/imgObras/reservatorioirrigacao/28.png';
import tanqueElevado from '../../assets/img/imgObras/tanqueelevado/7.png';
import ete from '../../assets/img/imgObras/ete/40.png';
import aterro from '../../assets/img/imgObras/aterrosanitario/31.png';
import psicultura from '../../assets/img/imgObras/piscicultura/11.png';
import paisagismo from '../../assets/img/imgObras/paisagistico/38.png';
import biogestor from '../../assets/img/imgObras/biodigestor/2.png';

const obrasData = [
    {
        id: 1,
        nome: "Reservatórios de Água",
        imagem: reservatorioAgua,
        link: "/reservatorio-agua"
    },
    {
        id: 2,
        nome: "Reservatórios de Irrigação",
        imagem: reservatorioIrrigacao,
        link: "/reservatorio-irrigacao"
    },
    {
        id: 3,
        nome: "Tanques Elevados",
        imagem: tanqueElevado,
        link: "/tanques-elevados"
    },
    {
        id: 4,
        nome: "Estação de Tratamento de Esgoto",
        imagem: ete,
        link: "/ete"
    },
    {
        id: 5,
        nome: "Aterros Sanitários",
        imagem: aterro,
        link: "/aterros-sanitarios"
    },
    {
        id: 6,
        nome: "Piscicultura",
        imagem: psicultura,
        link: "/piscicultura"
    },
    {
        id: 7,
        nome: "Paisagísticos",
        imagem: paisagismo,
        link: "/paisagisticos"
    },
    {
        id: 8,
        nome: "Biodigestor",
        imagem: biogestor,
        link: "/biodigestor"
    }
];

function Obras() {
    return (
        <section className="obras" id="obras">
            <h2 className="obras-titulo">Obras</h2>
            <div className="obras-container">
                {obrasData.map((obra) => (
                    <a
                        key={obra.id}
                        href={obra.link}
                        className="obra-card"
                    >
                        <div
                            className="obra-imagem"
                            style={{ backgroundImage: `url(${obra.imagem})` }}
                        ></div>
                        <div className="obra-nome">{obra.nome}</div>
                    </a>
                ))}
            </div>
        </section>
    );
}

export default Obras;