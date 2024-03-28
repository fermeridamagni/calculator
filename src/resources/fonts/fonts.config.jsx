import { Anton } from "next/font/google";
import LocalFont from "next/font/local";

export const fontText = LocalFont({
  src: "./tiltneon_regular.ttf",
  style: "normal",
  variable: "--font-text",
  weight: "400",
});

export const fontTitle = Anton({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-title",
});
