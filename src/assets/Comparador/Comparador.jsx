import React, { useState } from 'react';
import './Comparador.css';


const Comparador = () => {const [number1, setNumber1] = useState('');
    const [number2, setNumber2] = useState('');
    const [result, setResult] = useState('');
  
    const compareNumbers = () => {
      const num1 = parseFloat(number1);
      const num2 = parseFloat(number2);
  
      if (isNaN(num1) || isNaN(num2)) {
        setResult('Por favor ingresa números válidos');
        return;
      }
  
      if (num1 > num2) {
        setResult(`El número mayor es: ${num1}`);
      } else if (num1 < num2) {
        setResult(`El número mayor es: ${num2}`);
      } else {
        setResult('Ambos números son iguales');
      }
    };
  
    return (
      <div className="App">
        <h1>Comparador de Números</h1>
        <div>
          <input
            type="number"
            value={number1}
            onChange={(e) => setNumber1(e.target.value)}
            placeholder="Ingresa el primer número"
          />
          <input
            type="number"
            value={number2}
            onChange={(e) => setNumber2(e.target.value)}
            placeholder="Ingresa el segundo número"
          />
          <button onClick={compareNumbers}>Comparar</button>
        </div>
        {result && <h2>{result}</h2>}
      </div>
  )
}

export default Comparador
