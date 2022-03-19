import React from "react";

export default function Main(props) {
    return (
        <main className="main-box">
        <h2>CEP: {props.response.cep}</h2>

        <span>{props.response.logradouro}</span>
        <span>{props.response.complemento}</span>
        <span>{props.response.bairro}</span>
        <span>{props.response.localidade} - {props.response.uf}</span>
      </main>
    )
}