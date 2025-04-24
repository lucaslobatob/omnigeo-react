import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReservatorioAgua from '../src/pages/ReservatorioAgua/ReservatorioAgua.js';
import ReservatorioIrrigacao from '../src/pages/ReservatorioIrrigacao/ReservatorioIrrigacao.js';
import TanquesElevados from '../src/pages/TanquesElevados/TanquesElevados.js';
import ETE from '../src/pages/ETE/ETE.js';
import AterrosSanitarios from '../src/pages/AterrosSanitarios/AterrosSanitarios.js';
import Piscicultura from '../src/pages/Piscicultura/Piscicultura.js';
import Paisagisticos from '../src/pages/Paisagisticos/Paisagisticos.js';
import Biodigestor from '../src/pages/Biodigestor/Biodigestor.js';
import NotFound from '../src/pages/NotFound/NotFound.js';
import App from './App.js';

function Routers() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/reservatorio-agua" element={<ReservatorioAgua />} />
                <Route path="/reservatorio-irrigacao" element={<ReservatorioIrrigacao />} />
                <Route path="/tanques-elevados" element={<TanquesElevados />} />
                <Route path="/ete" element={<ETE />} />
                <Route path="/aterros-sanitarios" element={<AterrosSanitarios />} />
                <Route path="/piscicultura" element={<Piscicultura />} />
                <Route path="/paisagisticos" element={<Paisagisticos />} />
                <Route path="/biodigestor" element={<Biodigestor />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default Routers;