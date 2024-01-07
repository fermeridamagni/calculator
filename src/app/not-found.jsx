"use client";

import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faHouse } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;

export default function NotFound() {
  const router = useRouter();

  return (
    <>
      <main className="w-full h-screen bg-gradient-to-r from-white-primary to-gray-primary animate-fade-up">
        <div className="py-6 px-8 flex flex-row w-full gap-3 items-center">
          <div>
            <Image
              alt="icon"
              src="/images/logo_black.png"
              width={50}
              height={50}
            />
          </div>
          <div className="hidden sm:block">
            <h1 className="text-3xl text-black z-40">Magni Developer</h1>
          </div>
        </div>
        <div className="w-full h-full flex flex-col justify-center items-center">
          <div className="sm:m-5 m-5 text-center flex flex-col justify-center items-center gap-4 bg-white-primary shadow-xl border-2 border-gray-primary rounded-lg p-5">
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
      </main>
    </>
  );
}
