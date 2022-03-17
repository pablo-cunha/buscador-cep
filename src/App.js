import { FiSearch } from 'react-icons/fi'
import { useState } from 'react'
import './App.css'

function App() {

  const [input, setInput] = useState('')
  
  function handleClick() {
    alert("Clicou hein")
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

      <main className="main-box">
        <h2>CEP: 22750000</h2>

        <span>Rua Teste</span>
        <span>Complemento: Nenhum</span>
        <span>Bairro Teste</span>
        <span>Rio de Janeiro - RJ</span>
      </main>
    </div>
  );
}
 
export default App;
