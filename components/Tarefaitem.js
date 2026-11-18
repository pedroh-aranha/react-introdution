"use client";

import { useState } from "react";

const ROTULOS_PRIORIDADE = {
  alta: "Alta",
  media: "Média",
  baixa: "Baixa",
};

export default function TarefaItem({ tarefa, aoConcluir, aoExcluir, aoEditar }) {
  const [editando, setEditando] = useState("");
  const [texto, setTexto] = useState(tarefa.descricao);

  const salvarEdicao = () => {
    const limpo = texto.trim();
    if(limpo !== ""){
      aoEditar(tarefa.id, limpo)
    } else {
      setTexto(tarefa.descricao);
    }
    setEditando(false);
  };

  const teclaEdicao = (event) => {
    if(event.key === "Enter") salvarEdicao();
    if(event.key === "Escape") {
      setTexto(tarefa.descricao);
      setEditando(false);
    }
  };

  return (
    <li className={tarefa.concluida ? "tarefa concluida" : "tarefa"}>
      {editando ? (
        <input className="editar"
        value={texto}
        onChange={(event) => setTexto(event.target.value)}
        onBlur={salvarEdicao} 
        onKeyDown={teclaEdicao}
        autoFocus
        aria-label="editar tarefa"/>
      ) : (
        <label onDoubleClick={() => setEditando(true)}>
          <input type="checkbox" checked={tarefa.concluida}
          onChange={() => aoConcluir(tarefa.id)}/>
          <span>{tarefa.descricao}</span>
        </label>
      )}

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