import './App.css';
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import Header from './components/header/header';
import VideoComponent from './components/videoComponent/video';
import Servicos from './components/servicos/servicos';
import Sobre from './components/sobre/sobre';
import Estatistica from './components/estatistica/estatistica';
import Orcamento from './components/orcamentos/orcamento';
import Contato from './components/contato/contato';
import FaleConosco from './components/faleConosco/faleConosco';
import Obras from './components/obras/obras';
import Footer from './components/footer/footer';

function App() {
  useEffect(() => {
    ScrollReveal().reveal(".reveal-obras, .reveal-servico", {
      origin: "bottom",
      distance: "50px",
      duration: 1000,
      delay: 150,
      easing: "ease-in-out",
      reset: true,
    });
  }, []);

  return (
    <div className="App">
      <div className="App">
        <Header />
        <VideoComponent />
        <div className="reveal-servico">
          <Servicos />
        </div>
        <div className="reveal-obras">
          <Obras />
        </div>
        <div>
          <Sobre />
        </div>
        <div>
          <Estatistica />
        </div>
        <div>
          <Orcamento />
        </div>
        <div>
          <Contato />
        </div>
        <Footer />
        <FaleConosco />
      </div>
    </div>
  );
}

export default App;
