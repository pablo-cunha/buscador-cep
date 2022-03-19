import { useState } from 'react'
import './App.css'
import api from './services/api'
import { FiSearch } from 'react-icons/fi'
import Main from './components/Main'
import Button from './components/Button'
import Input from './components/Input'

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
      <Input type="text" placeholder="Digite o CEP..." value={input} 
      onChange={(event) => setInput(event.target.value)}
      onClick={handleClick}/>
      {Object.keys(responseCep).length > 1 && (
        <Main response={responseCep}/>
      )}
    </div>
  );
}
 
export default App;
