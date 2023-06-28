import React from "react"




const Contato = ({ nome, sobrenome, contato, email }) => {


    return (
        <div style={{marginTop: '15px', padding: '10px'}}>
            <h3>Nome: {nome} {sobrenome}</h3>
            <h3>Contato: {contato} - Email: {email}</h3>
        </div>
    )
}


export default Contato