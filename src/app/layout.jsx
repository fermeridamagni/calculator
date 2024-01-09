import NavBar from "@/components/navbar";
import Footer from "@/components/footer";

import { fontText, fontTitle } from "@/resources/fonts/fonts.config";
import { Providers } from "./providers";
import "@/resources/styles/globals.css";

export const metadata = {
  title: "Caluladora by @fermeridamagni",
  description: "",
  keywords: "calculator, calculadora, fermeridamagni",
  auhor: "Fer Merida | https://github.com/fermeridamagni",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`${fontText.variable} ${fontTitle.variable} min-h-screen max-w-screen font-text`}
      >
        <Providers>
          <NavBar/>

          {children}

          <Footer/>
        </Providers>
      </body>
    </html>
  );
}
