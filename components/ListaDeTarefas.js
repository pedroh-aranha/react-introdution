import { tarefasIniciais } from "./dados";
import TarefaItem from "./Tarefaitem";

export default function ListaDeTarefas() {
  return (
    <ul>
      {tarefasIniciais.map((tarefa) => (
        <TarefaItem key={tarefa.id} tarefa={tarefa} />
      ))}
    </ul>
  );
}