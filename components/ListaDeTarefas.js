"use client";

import { useState } from "react";
import { tarefasIniciais } from "./dados";
import TarefaItem from "./Tarefaitem";
import Formtarefa from "./Formtarefa";

export default function ListaDeTarefas() {
    const [tarefas, setTarefas] = useState(tarefasIniciais);

    const concluir = (id) => {
        setTarefas(
            tarefas.map((tarefa) => tarefa.id === id ? {...tarefa, concluida: !tarefa.concluida}
        :
        tarefa),
        );
    };

    const excluir = (id) => {
      setTarefas(
        tarefas.filter((tarefa) => tarefa.id !== tarefa.id)
      );
    };

    const adicionar = (descricao) => {
        const nova = {id: Date.now(), descricao: descricao, concluida: false}
        setTarefas([...tarefas, nova]);
    }


  return (
    <section>
        <Formtarefa aoAdicionar={adicionar}/>
    <ul>
      {tarefas.map((tarefa) => (
        <TarefaItem 
        key={tarefa.id} 
        tarefa={tarefa}
        aoConcluir={concluir}/>
      ))}
    </ul>
    </section>
  );
}