"use client";

import Main from "@/components/ui/main";

import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faHouse } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;

export default function NotFound() {
  const router = useRouter();

  return (
    <Main>
      <div className="w-full h-full flex flex-col justify-center items-center">
        <div className="sm:m-5 m-5 text-center flex flex-col justify-center items-center gap-4 bg-white_primary shadow-xl border-2 border-gray_primary rounded-lg p-5">
          <div>
            <h1 className="text-5xl font-bold font-title">
              <FontAwesomeIcon icon={faXmark} /> Página no encontrada
            </h1>
          </div>
          <div>
            <p className="text-xl">
              Estás en la <span className="font-bold">URL</span> correcta?
            </p>
          </div>
          <div>
            <Button
              color="default"
              size="lg"
              variant="ghost"
              onPress={() => {
                router.push("/");
              }}
            >
              Volver a inicio <FontAwesomeIcon icon={faHouse} />
            </Button>
          </div>
        </div>
      </div>
    </Main>
  );
}
