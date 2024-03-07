import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import './QRCodeGenerator.css'; 

function QRCodeGenerator() {
  const [text, setText] = useState('');
  const [qrCodeValue, setQRCodeValue] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const generateQRCode = () => {
    setQRCodeValue(text);
  };

  return (
    <div className="container"> 
      <h2>QR Code Generator</h2>
      <input
        type="text"
        placeholder="Enter text for QR code"
        value={text}
        onChange={handleChange}
        className="input-field" 
      />
      <br />
      <button onClick={generateQRCode} className="button">Generate QR Code</button> 
      <br />
      {qrCodeValue && (
        <div className="qr-code-container"> 
          <QRCode value={qrCodeValue} size={200} />
          <p style={{ marginTop: '10px' }}>QR Code for: {text}</p>
        </div>
      )}
    </div>
  );
}

export default QRCodeGenerator;
