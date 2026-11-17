const ROTULOS_PRIORIDADE = {
  alta: "Alta",
  media: "Média",
  baixa: "Baixa",
};

export default function TarefaItem({ tarefa, aoConcluir, aoExcluir }) {
  return (
    <li className={tarefa.concluida ? "tarefa concluida" : "tarefa"}>
      <input type="checkbox" checked={tarefa.concluida}
        onChange={() => aoConcluir(tarefa.id)}
      />
      <span>{tarefa.descricao}</span>
      
      {tarefa.prioridade && (
        <span className={`etiqueta ${tarefa.prioridade}`}>
          {ROTULOS_PRIORIDADE[tarefa.prioridade]}
        </span>
      )}

      <button type="button" className="botao-secundario" onClick={() => aoExcluir(tarefa.id)}>
        excluir
        </button>
    </li>
  );
}