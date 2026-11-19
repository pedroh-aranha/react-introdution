import Cabecalho from "@/components/Cabecalho/Cabecalho";
import Quadro from "@/components/Quadro/Quadro";

export default function Home() {
  return (
    <main>
      <Cabecalho titulo="Quadro de Tarefas" />
      <Quadro />
    </main>
  );
}