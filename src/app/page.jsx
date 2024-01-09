"use client";

import Main from "@/components/ui/main";

import * as math from "mathjs";
import copyToClipboard from "clipboard-copy";
import { useState, useMemo } from "react";
import { Toaster, toast } from "sonner";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Input,
  Tooltip,
} from "@nextui-org/react";
import { config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faEquals } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

// JSON
import { basicButtons } from "@/resources/json/basicButtons";
import { numbersButtons } from "@/resources/json/numbersButtons";
import { functionButtons } from "@/resources/json/functionsButtons";

config.autoAddCss = false;

export default function HomePage() {
  // Application States
  const [isLoading, setIsLoading] = useState(false);

  // Calculator States
  const [expression, setExpression] = useState("");

  // This function copies the current password to the clipboard
  const handleCopyToClipboard = () => {
    setIsLoading(true);

    if (result !== 0) {
      try {
        setIsLoading(false);

        copyToClipboard(result);

        toast.success("Valor resultante Copiado", {
          description: "El valor resultante ha sido copiado al portapapeles.",
        });
      } catch (error) {
        toast.error("Error", {
          description: "Error al copiar el valor resultante.",
        });

        setIsLoading(false);
      }
    } else {
      toast.info("Genera un valor resultante antes de intentar copiarlo.");

      setIsLoading(false);
    }
  };

  // This function uses mathjs to evaluate the expression and return the result
  const result = useMemo(() => {
    setIsLoading(true);

    try {
      setIsLoading(false);

      return math.evaluate(expression);
    } catch (error) {
      setIsLoading(false);

      console.log(error);
    }
  }, [expression]);

  // This function handles the click in the buttons and adds the value to the expression
  function handleButtonClick(value) {
    setExpression(expression + value);
  }

  // This function handles the click in the AC button and resets the calculator
  const handleAcClick = () => {
    setExpression("");
  };

  // This function handles the click in the DEL button and deletes the last character
  const handleDelClick = () => {
    setExpression(expression.slice(0, -1));
  };

  return (
    <Main flexCenter flexCol>
      <Card className="w-11/12 sm:w-[500px] bg-white-primary/90 backdrop-blur-sm border-1 border-gray-primary">
        <CardHeader className="flex flex-center justify-center">
          <h1 className="text-4xl font-title">Calculadora</h1>
        </CardHeader>

        <CardBody className="flex flex-col gap-6 py-10">
          <Input
            size="lg"
            disabled
            isReadOnly
            value={`=${!result ? 0 : result}`}
            label={expression}
            labelPlacement="inside"
            endContent={
              <Tooltip content="Copiar valor">
                <Button className="bg-black" onClick={handleCopyToClipboard}>
                  <FontAwesomeIcon icon={faCopy} color="white" size="xl" />
                </Button>
              </Tooltip>
            }
          />

          <div className="flex flex-row justify-between items-start gap-4">
            <div className="flex flex-row items-start gap-4">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {functionButtons.map((button) => (
                  <Button
                    key={`funcionButtons-${button.id}`}
                    isIconOnly
                    size="lg"
                    className={`${
                      !button.bgColor ? "bg-black" : button.bgColor
                    } ${!button.textColor ? "text-white" : button.textColor}`}
                  >
                    {button.icon ? (
                      <FontAwesomeIcon icon={button.icon} size="xl" />
                    ) : (
                      button.text
                    )}
                  </Button>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-2">
                {numbersButtons.map((button) => (
                  <Button
                    key={`numberButtons-${button.id}`}
                    size="lg"
                    isIconOnly
                    className={`${
                      !button.bgColor ? "bg-black" : button.bgColor
                    } ${!button.textColor ? "text-white" : button.textColor}`}
                    onClick={() => handleButtonClick(button.value)}
                  >
                    {button.icon ? (
                      <FontAwesomeIcon icon={button.icon} size="xl" />
                    ) : (
                      button.text
                    )}
                  </Button>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <Tooltip content="Eliminar último carácter">
                <Button
                  isIconOnly
                  size="lg"
                  color="danger"
                  onClick={handleDelClick}
                >
                  DEL
                </Button>
              </Tooltip>
              <Tooltip content="Eliminar operación">
                <Button
                  isIconOnly
                  size="lg"
                  color="danger"
                  onClick={handleAcClick}
                >
                  AC
                </Button>
              </Tooltip>
              {basicButtons.map((button) => (
                <Tooltip
                  key={`basicButtons-${button.id}`}
                  content={button.tooltip}
                >
                  <Button
                    key={`basicButtons-${button.id}`}
                    isIconOnly
                    size="lg"
                    className={`${
                      !button.bgColor ? "bg-black" : button.bgColor
                    } ${!button.textColor ? "text-white" : button.textColor}`}
                    onClick={() => handleButtonClick(button.value)}
                  >
                    {button.icon ? (
                      <FontAwesomeIcon icon={button.icon} size="xl" />
                    ) : (
                      button.text
                    )}
                  </Button>
                </Tooltip>
              ))}
              <Tooltip content="Realizar operación">
                <Button
                  isIconOnly
                  size="lg"
                  color="success"
                  isLoading={isLoading}
                >
                  <FontAwesomeIcon icon={faEquals} size="xl" />
                </Button>
              </Tooltip>
            </div>
          </div>
        </CardBody>

        <CardFooter className="flex justify-center items-center">
          <p className="text-sm text-neutral-500">
            Desarrollador por{" "}
            <a
              href="https://www.instagram.com/fermeridamagni"
              className="underline"
              target="_blank"
            >
              @fermeridamagni
            </a>
          </p>
        </CardFooter>
      </Card>

      <Toaster richColors closeButton />
    </Main>
  );
}
