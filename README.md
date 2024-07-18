# QR Code Generator

A simple web application to generate QR codes with optional titles and logos. This project is built with Next.js and styled using Tailwind CSS. The QR codes can be generated, previewed, and downloaded in PNG format.

## Purpose

The purpose of this application is to provide a user-friendly interface for generating QR codes. Users can enter text to encode, optionally add a title, and upload a logo to embed in the QR code. The generated QR code can be downloaded for use in various applications such as marketing materials, event tickets, and more.

## Features

- Generate QR codes from user-provided text.
- Add an optional title above the QR code.
- Embed an optional logo in the center of the QR code.
- Preview the generated QR code.
- Download the QR code as a PNG image with a filename that includes the current date and time.

## Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/qr-generator-app.git
   cd qr-generator-app
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Run the development server:**
   ```sh
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Usage

1. **Enter the text:**
   - Type the text you want to encode into a QR code in the input field.

2. **Add a title (optional):**
   - Type a title to be displayed above the QR code in the optional title input field.

3. **Upload a logo (optional):**
   - Upload an image file to be embedded in the center of the QR code.

4. **Generate the QR code:**
   - Click the "Generate QR Code" button to generate the QR code with the provided text, title, and logo.

5. **Download the QR code:**
   - Click the "Download QR Code" button to download the generated QR code as a PNG file. The file will be named `QR_YYYY-MM-DD_HH-MM-SS.png`, where `YYYY-MM-DD_HH-MM-SS` is the current date and time.

## Deployment

The application can be easily deployed to Vercel, a platform for static sites and serverless functions.

1. **Install Vercel CLI:**
   ```sh
   npm install -g vercel
   ```

2. **Log in to Vercel:**
   ```sh
   vercel login
   ```

3. **Deploy the application:**
   ```sh
   vercel
   ```
   Follow the prompts to link or create a new Vercel project and deploy the application. Vercel will provide a URL where your app is live.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Next.js](https://nextjs.org/) - The React Framework.
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework.
- [QRCode](https://github.com/soldair/node-qrcode) - QR code generator library.