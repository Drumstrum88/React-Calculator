import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { evaluate } from 'mathjs';

function Calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleCalculate = () => {
    try {
      const calculatedResult = evaluate(input);
      setInput(calculatedResult.toString());
    } catch (error) {
      setInput('Error');
    }
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  return (
    <div className="container">
      <h2>Calculator</h2>
      <div className="calculator-container">
        <input type="text" id="input-field" value={input} readOnly className="form-control mb-3" />
        <div className="row">
          <div className="col-3">
            <button type="button" onClick={() => handleClick('7')} className="btn btn-primary btn-block mb-2">7</button>
          </div>
          <div className="col-3">
            <button type="button" onClick={() => handleClick('8')} className="btn btn-primary btn-block mb-2">8</button>
          </div>
          <div className="col-3">
            <button type="button" onClick={() => handleClick('9')} className="btn btn-primary btn-block mb-2">9</button>
          </div>
          <div className="col-3">
            <button type="button" onClick={() => handleClick('+')} className="btn btn-primary btn-block mb-2">+</button>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <button type="button" onClick={() => handleClick('4')} className="btn btn-primary btn-block mb-2">4</button>
          </div>
          <div className="col-3">
            <button type="button" onClick={() => handleClick('5')} className="btn btn-primary btn-block mb-2">5</button>
          </div>
          <div className="col-3">
            <button type="button" onClick={() => handleClick('6')} className="btn btn-primary btn-block mb-2">6</button>
          </div>
          <div className="col-3">
            <button type="button" onClick={() => handleClick('-')} className="btn btn-primary btn-block mb-2">-</button>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <button type="button" onClick={() => handleClick('1')} className="btn btn-primary btn-block mb-2">1</button>
          </div>
          <div className="col-3">
            <button type="button" onClick={() => handleClick('2')} className="btn btn-primary btn-block mb-2">2</button>
          </div>
          <div className="col-3">
            <button type="button" onClick={() => handleClick('3')} className="btn btn-primary btn-block mb-2">3</button>
          </div>
          <div className="col-3">
            <button type="button" onClick={() => handleClick('*')} className="btn btn-primary btn-block mb-2">*</button>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <button type="button" onClick={() => handleClick('0')} className="btn btn-primary btn-block mb-2">0</button>
          </div>
          <div className="col-3">
            <button type="button" onClick={() => handleClick('.')} className="btn btn-primary btn-block mb-2">.</button>
          </div>
          <div className="col-3">
            <button type="button" onClick={() => handleClick('/')} className="btn btn-primary btn-block mb-2">/</button>
          </div>
          <div className="col-3">
            <button type="button" onClick={handleCalculate} className="btn btn-primary btn-block mb-2" id="calculate">Calculate</button>
          </div>
        </div>
        {result && <input type="text" value={result} readOnly className="form-control mb-3" />}
        <div className="row">
          <div className="col-12">
            <button type="button" onClick={handleClear} className="btn btn-secondary btn-block" id="clear">Clear</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
