"use client";

import { useState } from "react";

export default function Formtarefa({ aoAdicionar }) {
    const [texto, setTexto] = useState("");
    const [erro, setErro] = useState("");

    const enviar = (event) => {
        event.preventdefault();
        if (texto.trim() === "") {
            setErro("digite uma tarefa!");
            return
        };
        aoAdicionar(texto.trim());
        setTexto("");
        setErro("");
    };

    return (
        <form className="formulario" onSubmit={enviar}>
            <input value={texto} onChange={(event) => setTexto(event.target.value)}/>
            {erro !== "" && <p className="erro">{erro}</p>}
            <button type="submit">Adicionar</button>
        </form>
    )
}