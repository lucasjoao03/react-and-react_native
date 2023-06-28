import { useState } from 'react'


const Soma = ({ n1, n2 }) => {
  return (
    <h2>
      A soma de {n1} + {n2} é {n1 + n2}
    </h2>
  )
}

const Subtracao = ({ n1, n2 }) => {
  return (
    <h2>
      A subtração de {n1} - {n2} é {n1 - n2}
    </h2>
  )
}
const Multiplicacao = ({ n1, n2 }) => {
  return (
    <h2>
      A multiplicação de {n1} x {n2} é {n1 * n2}
    </h2>
  )
}
const Divisao = ({ n1, n2 }) => {
  return (
    <h2>
      A divisão de {n1} / {n2} é {n1 / n2}
    </h2>
  )
}




const App = ({ n1, n2 }) => {
  return (
    <>
      <h1>Operações: </h1>
      <Soma n1={n1} n2={n2} />
      <Subtracao n1={n1} n2={n2} />
      <Multiplicacao n1={n1} n2={n2} />
      <Divisao n1={n1} n2={n2} />
    </>
  )
}

export default App
