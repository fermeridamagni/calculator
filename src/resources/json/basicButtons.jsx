import { config } from "@fortawesome/fontawesome-svg-core";
import {
  faDivide,
  faMinus,
  faPlus,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;

export const basicButtons = [
  {
    id: 3,
    text: "x",
    value: "*",
    icon: faXmark,
    tooltip: "Multiplicar",
    bgColor: "bg-black",
    textColor: "text-white",
  },
  {
    id: 4,
    text: "/",
    value: "/",
    icon: faDivide,
    tooltip: "Dividir",
    bgColor: "bg-black",
    textColor: "text-white",
  },
  {
    id: 5,
    text: "+",
    value: "+",
    icon: faPlus,
    tooltip: "Sumar",
    bgColor: "bg-black",
    textColor: "text-white",
  },
  {
    id: 6,
    text: "-",
    value: "-",
    icon: faMinus,
    tooltip: "Restar",
    bgColor: "bg-black",
    textColor: "text-white",
  },
];
