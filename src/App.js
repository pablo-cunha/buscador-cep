import './App.css'
import { useState } from 'react'
import api from './services/api'
import Main from './components/Main'
import Title from './components/Title'
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
      <Title/>
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
