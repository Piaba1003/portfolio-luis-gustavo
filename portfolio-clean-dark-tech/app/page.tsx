import Careira from "./components/Careira";
import Contato from "./components/Contato";
import Inicio from "./components/Inicio";
import Sobre from "./components/Sobre";
import Projetos from "./components/Projetos";
import Navegacao from "./components/Navegacao";


export default function Home() {
  return (
    <main>
      <Navegacao />
      <Inicio />
      <Careira />
      <Sobre />
      <Projetos />
      <Contato />
    </main>
  );
}
