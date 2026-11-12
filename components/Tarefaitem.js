export default function TarefaItem({ tarefa, aoConcluir }) {
  return (
    <li className={tarefa.concluida ? "tarefa concluida" : "tarefa"}>
      <input type="checkbox" checked={tarefa.concluida}
        onChange={() => aoConcluir(tarefa.id)}
      />
      <span>{tarefa.descricao}</span>
    </li>
  );
}