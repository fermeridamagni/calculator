"use client";

import Main from "@/components/ui/main";

import { useEffect } from "react";
import { Button } from "@nextui-org/react";
import { config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleExclamation,
  faRotateRight,
} from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Main flexCenter flexCol>
      <div className="w-full min-h-screen flex flex-col justify-center items-center">
        <div className="sm:m-5 m-5 text-center flex flex-col justify-center items-center gap-4 bg-white-primary shadow-xl border-2 border-gray-primary rounded-lg p-5">
          <div>
            <h1 className="text-5xl font-bold font-title">
              {" "}
              <FontAwesomeIcon icon={faCircleExclamation} /> Error en la
              aplicación
            </h1>
          </div>
          <div>
            <p>Ocurrió un error en la aplicación, intentalo de nuevo.</p>
            <p>
              Si el error persiste, contacta a soporte:{" "}
              <span className="font-bold">soporte@magnideveloper.com</span>
            </p>
          </div>
          <div>
            <Button onClick={reset}>
              Recargar la página <FontAwesomeIcon icon={faRotateRight} />
            </Button>
          </div>
        </div>
      </div>
    </Main>
  );
}
