import React, { useState } from "react";
import QRCode from "react-qr-code";

const QrCodeGenerator = () => {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");
  const handleGenerateQRCode = () => {
    setQrCode(input);
    setInput(" ");
  };
  return (
    <div>
      <h1>QR code Generator</h1>
      <div>
        <input
          type="text"
          name="qr-code"
          placeholder="enter your value"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          disabled={input && input.trim() !== "" ? false : true}
          onClick={handleGenerateQRCode}
        >
          Generator
        </button>
      </div>
      <div>
        <QRCode id="qr-code-value" value={qrCode} size={400} color="#fff" />
      </div>
    </div>
  );
};

export default QrCodeGenerator;
