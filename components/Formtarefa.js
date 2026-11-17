"use client";

import { useState } from "react";

export default function Formtarefa({ aoAdicionar }) {
    const [texto, setTexto] = useState("");
    const [erro, setErro] = useState("");
    const [prioridade, setPrioridade] = useState("media");

    const enviar = (event) => {
        event.preventDefault();
        
        if (texto.trim() === "") {
            setErro("digite uma tarefa!");
            return
        }
        aoAdicionar(texto.trim(), prioridade);
        setTexto("");
        setErro("");
    };

    return (
        <form className="formulario" onSubmit={enviar}>
            <input value={texto} onChange={(event) => setTexto(event.target.value)}/>
            <select
                value={prioridade}
                onChange={(event) => setPrioridade(event.target.value)}>
                <option value="alta">Alta</option>
                <option value="media">Média</option>
                <option value="baixa">Baixa</option>
            </select>

            {erro !== "" && <p className="erro">{erro}</p>}
            <button type="submit">Adicionar</button>
        </form>
    )
}