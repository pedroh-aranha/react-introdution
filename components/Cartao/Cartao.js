import Etiqueta from "@/components/Etiqueta/Etiqueta";
import styles from "./Cartao.module.css";

export default function Cartao({ tarefa, aoConcluir, aoExcluir }) {

  return (
    <li className={tarefa.concluida ? "tarefa concluida" : "tarefa"}>
     <p className={styles.descricao}>{tarefa.descricao}</p>
     <div>
        <Etiqueta prioridade={tarefa.prioridade}/>
     </div>
    </li>
  );
}