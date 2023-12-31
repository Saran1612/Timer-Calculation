import React, { useState, useEffect, useRef } from 'react';
import './calculator.css';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (number) => {
    if (number === '=') {
      setResult(eval(input);
    } else if (number === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput((prev) => prev + number);
    }
  };
  return (
    <>
      <div className="input">
        <input type="text" value={input} readOnly />
      </div>

      <div className="result">
        <span>{result}</span>
      </div>

      <div>
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
      </div>

      <div>
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
      </div>

      <div>
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
      </div>

      <div>
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('*')}>*</button>
        <button onClick={() => handleClick('/')}>/</button>
      </div>

      <div>
        <button onClick={() => handleClick('-')}>-</button>
        <button onClick={() => handleClick('+')}>+</button>
        <button onClick={() => handleClick('=')}>=</button>
        <button onClick={() => handleClick('C')}>C</button>
      </div>
    </>
  );
};
export default Calculator;
