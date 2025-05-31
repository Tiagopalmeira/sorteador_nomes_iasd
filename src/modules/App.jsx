import React, { useState } from "react";
import "../../public/css/App.css";

function App() {
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const [result, setResult] = useState(null);
  const [history, setHistory] = useState([]);
  const [namesHistory, setNamesHistory] = useState([]);

  // Lista de nomes pré-definidos
  const names = [
    "Ana Cleide",
    "Adenilton",
    "Arthur Jabez",
    "Carmelita",
    "Daiana",
    "Danilo",
    "Diana",
    "Edelzuita",
    "Elaine",
    "Emília",
    "Evile",
    "Ezequias",
    "Gabriel",
    "Genivaldo",
    "Gilvan",
    "Isabelly",
    "Jeová",
    "Joana Angélica",
    "Joselia",
    "Kelvin",
    "Luis Emanuel",
    "Maria Jose",
    "Maria Pêdra",
    "Maria da Silva",
    "Moabe",
    "Nerivaldo",
    "Patricia",
    "Quevesson ",
    "Rafael",
    "Rafaela",
    "Romilse",
    "Ronald",
    "Rosevando",
    "Sind Lauren",
    "Sonia",
    "Sueli",
    "Tereza",
    "Zilma",
"Adenilton",
  ];

  // Função para mudar o valor mínimo
  const handleMinChange = (e) => setMin(e.target.value);

  // Função para mudar o valor máximo
  const handleMaxChange = (e) => setMax(e.target.value);

  // Função para sortear número entre min e max
  /*
  const sortearNumero = () => {
    const minNum = parseInt(min, 10);
    const maxNum = parseInt(max, 10);

    if (minNum <= maxNum) {
      if (history.length >= maxNum - minNum + 1) {
        alert("Todos os números do intervalo já foram sorteados.");
        return;
      }

      let randomNum;
      do {
        randomNum = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
      } while (history.includes(randomNum));

      setHistory([...history, randomNum]);
      setResult(randomNum);
    } else {
      alert("O valor mínimo deve ser menor ou igual ao valor máximo.");
    }
  };
  */

  // Função para sortear nome a partir da lista de nomes
  const sortearNome = () => {
    if (names.length === 0) {
      alert("A lista de nomes está vazia.");
      return;
    }

    let randomName;
    do {
      randomName = names[Math.floor(Math.random() * names.length)];
    } while (namesHistory.includes(randomName)); // Verifica se já foi sorteado

    setNamesHistory([...namesHistory, randomName]);
    setResult(randomName);
  };

  // Função para resetar o histórico de números e nomes sorteados
  const resetAll = () => {
    setHistory([]);
    setNamesHistory([]);
    setResult(null);
    window.location.reload(); // Recarrega a página
  };

  return (
    <div className="App">
      <header className="app-header">
        <h1>Sorteador online da IASD de Araçás</h1>
        <p></p>
      </header>
      <main>
        {/* <div className="inputs-container">
          <label>
            <span>Sortear entre:</span>
            <input
              type="number"
              placeholder="Mín"
              value={min}
              onChange={handleMinChange}
              disabled
            />
            <input
              type="number"
              placeholder="Máx"
              value={max}
              onChange={handleMaxChange}
              disabled
            />
          </label>
        </div> */}

        {/* Exibe o resultado do sorteio */}
        {result !== null && (
          <div className="result-container">
            <br />
            <span className="result"> {result}</span>
          </div>
        )}

        {/* Botões de sorteio */}
        <div className="buttons-container">
          {/* <button className="sort-button" onClick={sortearNumero}>
            Sortear Número
          </button> */}
          <button className="sort-button" onClick={sortearNome}>
            Sortear Nome
          </button>
          <button className="reset-button" onClick={resetAll}>
            ⟳
          </button>
        </div>

        {/* Histórico dos sorteios de números */}
        {/* {history.length > 0 && (
          <div className="history-container">
            {history.map((num, index) => (
              <span key={index} className="history-item">
                {num}
              </span>
            ))}
          </div>
        )} */}

        {/* Histórico dos sorteios de nomes */}
        {namesHistory.length > 0 && (
          <div className="history-container">
            <br />
            <span />
            {namesHistory.map((name, index) => (
              <span key={index} className="history-item">
                {name}
              </span>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
