import styles from "./Coluna.module.css";

export default function Coluna({ titulo, quantidade, children, status }) {  
    return (
        <section className={`${styles.coluna} ${styles[status]}`}>
            <header className={styles.topo}>
                <h2 className={styles.titulo}>{titulo}</h2>
                <spam className={styles.contador}>{quantidade}</spam>
            </header>
            {quantidade === 0 ? (
                <p className={styles.vazia}>nenhuma tarefa aqui</p>
            ) : (
                <ul className={styles.lista}>{children}</ul>
            )}
        </section>
    )
}