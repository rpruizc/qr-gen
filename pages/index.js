import { useState } from 'react';
import QRCode from 'qrcode';

export default function Home() {
  const [text, setText] = useState('');
  const [qrCode, setQrCode] = useState('');

  const generateQRCode = async () => {
    try {
      const url = await QRCode.toDataURL(text);
      setQrCode(url);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">QR Codes para Mi Amorcito</h1>
      <p className="mb-4 text-lg text-gray-700">Texto a codificar en QR:</p>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-80 p-2 border border-gray-300 rounded mb-4"
      />
      <button
        onClick={generateQRCode}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        Generar
      </button>
      {qrCode && (
        <div className="mt-4">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Tu QR 😘 :</h3>
          <img src={qrCode} alt="Generated QR Code" />
        </div>
      )}
    </div>
  );
}
