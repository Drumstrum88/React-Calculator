import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { evaluate } from 'mathjs';
import InputField from '../components/InputField';
import Button from '../components/Button';

function Calculator() {
  const [input, setInput] = useState('');

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
  };

  return (
    <div className="container">
      <h2>Calculator</h2>
      <div className="calculator-container">
        <InputField value={input} />
        <div className="row">
          <Button label="7" onClick={() => handleClick('7')} />
          <Button label="8" onClick={() => handleClick('8')} />
          <Button label="9" onClick={() => handleClick('9')} />
          <Button label="+" onClick={() => handleClick('+')} />
        </div>
        <div className="row">
          <Button label="4" onClick={() => handleClick('4')} />
          <Button label="5" onClick={() => handleClick('5')} />
          <Button label="6" onClick={() => handleClick('6')} />
          <Button label="-" onClick={() => handleClick('-')} />
        </div>
        <div className="row">
          <Button label="1" onClick={() => handleClick('1')} />
          <Button label="2" onClick={() => handleClick('2')} />
          <Button label="3" onClick={() => handleClick('3')} />
          <Button label="*" onClick={() => handleClick('*')} />
        </div>
        <div className="row">
          <Button label="C" onClick={handleClear} />
          <Button label="0" onClick={() => handleClick('0')} />
          <Button label="=" onClick={handleCalculate} />
          <Button label="/" onClick={() => handleClick('/')} />
        </div>
      </div>
    </div>
  );
}

export default Calculator;
