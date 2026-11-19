import styles from './Etiqueta.module.css'

const ROTULOS_PRIORIDADE = {
    alta: "Alta",
    media: "Média",
    baixa: "Baixa",
  };

export default function Etiqueta() {
<span className={`${styles.Etiqueta} ${styles[prioridade]}`}>
          {ROTULOS_PRIORIDADE[prioridade]}
        </span>
}