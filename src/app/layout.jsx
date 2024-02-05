import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import Providers from "./providers";

import { fontText, fontTitle } from "@/resources/fonts/fonts.config";
import "@/resources/styles/globals.css";

export const metadata = {
  title: "Caluladora by @fermeridamagni",
  description: "",
  keywords: "calculator, calculadora, fermeridamagni",
  auhor: "@fermeridamagni | https://github.com/fermeridamagni",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </head>
      <body className={`${fontText.variable} ${fontTitle.variable} font-text`}>
        <Providers>
          <NavBar />

          {children}

          <Footer />
        </Providers>
      </body>
    </html>
  );
}
