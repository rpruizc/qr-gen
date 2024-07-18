import { useState } from 'react';
import QRCode from 'qrcode';

export default function Home() {
  const [text, setText] = useState('');
  const [qrCode, setQrCode] = useState('');
  const [logo, setLogo] = useState(null);
  const [title, setTitle] = useState('');

  const generateQRCode = async () => {
    try {
      const qrCanvas = document.createElement('canvas');
      const qrContext = qrCanvas.getContext('2d');
      const qrImage = await QRCode.toDataURL(text, { errorCorrectionLevel: 'H' });
      const qrImageElement = new Image();
      qrImageElement.src = qrImage;

      qrImageElement.onload = () => {
        const size = 256;
        const titleHeight = title ? 30 : 0;
        qrCanvas.width = size;
        qrCanvas.height = size + titleHeight;

        if (title) {
          qrContext.font = '20px Arial';
          qrContext.textAlign = 'center';
          qrContext.fillText(title, size / 2, 25);
        }

        qrContext.drawImage(qrImageElement, 0, titleHeight, size, size);

        if (logo) {
          const logoImage = new Image();
          logoImage.src = logo;
          logoImage.onload = () => {
            const logoSize = size / 4;
            qrContext.drawImage(
              logoImage,
              (size - logoSize) / 2,
              titleHeight + (size - logoSize) / 2,
              logoSize,
              logoSize
            );
            setQrCode(qrCanvas.toDataURL());
          };
        } else {
          setQrCode(qrCanvas.toDataURL());
        }
      };
    } catch (err) {
      console.error(err);
    }
  };

  const handleLogoUpload = (event) => {
    const reader = new FileReader();
    reader.onload = (e) => setLogo(e.target.result);
    reader.readAsDataURL(event.target.files[0]);
  };

  const getFormattedDateTime = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    return `${year}-${month}-${day}_${hours}-${minutes}-${seconds}`;
  };

  const downloadQRCode = () => {
    const link = document.createElement('a');
    link.href = qrCode;
    link.download = `QR_${getFormattedDateTime()}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Generador de QRs para Mi Amorcito </h1>
      <p className="mb-4 text-lg text-gray-700">Texto a codificar:</p>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-80 p-2 border border-gray-300 rounded mb-4"
      />
      <p className="mb-4 text-lg text-gray-700">Título (opcional):</p>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-80 p-2 border border-gray-300 rounded mb-4"
      />
      <p className="mb-4 text-lg text-gray-700">Logo (opcional):</p>
      <input
        type="file"
        accept="image/*"
        onChange={handleLogoUpload}
        className="mb-4"
      />
      <button
        onClick={generateQRCode}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 mb-4"
      >
        Genera el QR
      </button>
      {qrCode && (
        <div className="mt-4 flex flex-col items-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Tu QR 😘🤓😘:</h3>
          <img src={qrCode} alt="Generated QR Code" className="mb-4" />
          <button
            onClick={downloadQRCode}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
          >
            Descarga el QR
          </button>
        </div>
      )}
    </div>
  );
}
