import { FiSearch } from 'react-icons/fi'
import { useState } from 'react'
import './App.css'
import api from './services/api'

function App() {

  const [input, setInput] = useState('')
  const [responseCep, setCep] = useState({})
  
  async function handleClick() {

    if (input === '') {
      alert("Valor do CEP inválido!")
      return
    }

    try {
      const response = await api.get(`${input}/json`)
      setCep(response.data)
      setInput("")
    } catch (error) {
      alert("Ops! Houve um erro ao buscar CEP.")
      setInput("")
    }
  }

  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>

      <div className="input-container">
        <input
        type="text"
        placeholder="Digite o CEP..."
        value={input}
        onChange={(event) => setInput(event.target.value)}
        />
      <button className="search-button" onClick={handleClick}>
        <FiSearch size={25} color="#0f0f0f"/>
      </button>
      </div>

      {Object.keys(responseCep).length > 1 && (
      <main className="main-box">
        <h2>CEP: {responseCep.cep}</h2>

        <span>{responseCep.logradouro}</span>
        <span>{responseCep.complemento}</span>
        <span>{responseCep.bairro}</span>
        <span>{responseCep.localidade} - {responseCep.uf}</span>
      </main>
      )}
    </div>
  );
}
 
export default App;
