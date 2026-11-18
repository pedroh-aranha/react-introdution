import Cabecalho from "@/components/Cabecalho/Cabecalho";
import ListaDeTarefas from "@/components/ListaDeTarefas";

export default function Home() {
  return (
    <>
      <Cabecalho titulo="To do List" subtitulo="Aula 23" />
      <main>
        <ListaDeTarefas />
      </main>
    </>
  );
}