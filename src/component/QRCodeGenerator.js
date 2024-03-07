import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import './QRCodeGenerator.css'; 

const QRCodeGenerator = () => {
  const [inputValue, setInputValue] = useState('');
  
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  
  return (
    <div className="qrcode-container">
      <h2 id='head'> QR Code Generator</h2>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter text or URL"
      />
      {inputValue && (
        <div className="qrcode-output">
          <QRCode value={inputValue} />
          <p>{inputValue}</p>
        </div>
      )}
    </div>
  );
};

export default QRCodeGenerator;

