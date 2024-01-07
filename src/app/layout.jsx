import "@/resources/styles/globals.css";

import { fontText, fontTitle } from "@/resources/fonts/fonts.config";
import { Providers } from "./providers";

export const metadata = {
  title: "Caluladora",
  description: "",
  keywords: "calculator, calculadora, fermeridamagni",
  auhor: "Fer Merida | https://github.com/fermeridamagni",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`${fontText.variable} ${fontTitle.variable} w-screen h-screen`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
