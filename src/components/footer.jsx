"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Button, Divider } from "@nextui-org/react";
import { config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faDesktop,
  faMoon,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faDiscord,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;

export default function Footer() {
  // Initializations
  const { setTheme } = useTheme();

  return (
    <footer className="w-full h-auto bg-black dark:bg-black_primary flex flex-col justify-center items-center text-white relative z-20 dark:border-t border-black_primary">
      <div className="w-10/12 relative -top-8 bg-blue_primary p-10 rounded-lg shadow-xl flex flex-row justify-between items-center flex-wrap gap-10">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
          <div className="bg-black rounded-3xl p-4 border-2 border-black_primary">
            <Image
              alt="Magni Developer"
              src="https://magnideveloper.com/icons/icon-white.webp"
              width={100}
              height={100}
            />
          </div>
          <div className="flex flex-col">
            <div>
              <h1 className="text-3xl font-title">
                ¿Te interesa nuestro trabajo?
              </h1>
            </div>
            <div>
              <p>Conoce las Posibilidades que Ofrecemos...</p>
            </div>
          </div>
        </div>
        <div className="flex flex-row flex-wrap gap-4">
          <div>
            <Button
              as={Link}
              href="https://magnideveloper.com/iniciar"
              className="bg-black text-white"
              endContent={<FontAwesomeIcon icon={faArrowRight} />}
            >
              Iniciar
            </Button>
          </div>
          <div>
            <Button
              as={Link}
              href="https://magnideveloper.com/contacto"
              className="bg-black text-white"
              endContent={<FontAwesomeIcon icon={faArrowRight} />}
            >
              Contacto
            </Button>
          </div>
          <div>
            <Button
              as={Link}
              href="https://magnideveloper.com/login"
              className="bg-black text-white"
              endContent={<FontAwesomeIcon icon={faArrowRight} />}
            >
              Inciar Sesión
            </Button>
          </div>
        </div>
      </div>
      <div className="py-14 px-8 w-11/12 flex flex-row justify-evenly flex-wrap gap-10">
        <div className="flex flex-col gap-1">
          <div>
            <h1 className="text-neutral-500">SECCIONES</h1>
          </div>
          <div className="flex flex-col">
            <ul className="list-disc">
              <li>
                <Link
                  href="https://magnideveloper.com"
                  target="_blank"
                  className="hover:bg-blue_primary rounded-lg px-2"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="https://magnideveloper.com/productos"
                  target="_blank"
                  className="hover:bg-blue_primary rounded-lg px-2"
                >
                  Productos
                </Link>
              </li>
              <li>
                <Link
                  href="https://api.magnideveloper.com"
                  target="_blank"
                  className="hover:bg-blue_primary rounded-lg px-2"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="https://magnideveloper.com/contacto"
                  target="_blank"
                  className="hover:bg-blue_primary rounded-lg px-2"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <div>
            <h1 className="text-neutral-500">PRODUCTOS</h1>
          </div>
          <div className="flex flex-col">
            <ul className="list-disc">
              <li>
                <Link
                  href="https://magnideveloper.com/productos/timeClockApp"
                  target="_blank"
                  className="hover:bg-blue_primary rounded-lg px-2"
                >
                  Reloj Checador
                </Link>
              </li>
              <li>
                <Link
                  href="https://magnideveloper.com/productos/whatsappBot"
                  target="_blank"
                  className="hover:bg-blue_primary rounded-lg px-2"
                >
                  WhatsApp Bot
                </Link>
              </li>
              <li>
                <Link
                  href="https://magnideveloper.com/productos/customProject"
                  target="_blank"
                  className="hover:bg-blue_primary rounded-lg px-2"
                >
                  Proyecto Personalizado
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <div>
            <h1 className="text-neutral-500">NOSOTROS</h1>
          </div>
          <div className="flex flex-col">
            <ul className="list-disc">
              <li>
                <Link
                  href="https://magnideveloper.com/nosotros"
                  target="_blank"
                  className="hover:bg-blue_primary rounded-lg px-2"
                >
                  ¿Quiénes Somos?
                </Link>
              </li>
              <li>
                <Link
                  href="https://magnideveloper.com/nosotros/experiencia"
                  target="_blank"
                  className="hover:bg-blue_primary rounded-lg px-2"
                >
                  Experiencia
                </Link>
              </li>
              <li>
                <Link
                  href="https://magnideveloper.com/nosotros/habilidades"
                  target="_blank"
                  className="hover:bg-blue_primary rounded-lg px-2"
                >
                  Habilidades
                </Link>
              </li>
              <li>
                <Link
                  href="https://magnideveloper.com/nosotros/portafolio"
                  target="_blank"
                  className="hover:bg-blue_primary rounded-lg px-2"
                >
                  Portafolio de Trabajo
                </Link>
              </li>
              <li>
                <Link
                  href="https://magnideveloper.com/nosotros/politica_de_privacidad"
                  target="_blank"
                  className="hover:bg-blue_primary rounded-lg px-2"
                >
                  Política de Privacidad
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <div>
            <h1 className="text-neutral-500">CLIENTE</h1>
          </div>
          <div className="flex flex-col">
            <ul className="list-disc">
              <li>
                <Link
                  href="https://magnideveloper.com/user/support"
                  target="_blank"
                  className="hover:bg-blue_primary rounded-lg px-2"
                >
                  Atención a Clientes
                </Link>
              </li>
              <li>
                <Link
                  href="https://magnideveloper.com/login"
                  target="_blank"
                  className="hover:bg-blue_primary rounded-lg px-2"
                >
                  Iniciar Sesión
                </Link>
              </li>
              <li>
                <Link
                  href="https://magnideveloper.com/user/dashboard"
                  target="_blank"
                  className="hover:bg-blue_primary rounded-lg px-2"
                >
                  Panel de Control
                </Link>
              </li>
              <li>
                <Link
                  href="https://magnideveloper.com/user/account"
                  target="_blank"
                  className="hover:bg-blue_primary rounded-lg px-2"
                >
                  Administrar Cuenta
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-11/12 border-t border-white_primary py-8 flex flex-col md:flex-row justify-between items-center gap-10 md:gap-0 text-center">
        <div className="order-2 md:order-1 flex flex-col md:flex-row gap-2">
          <div>
            <span className="text-2xl md:text-base">
              @ Magni <span className="font-bold">Developer</span>.
            </span>

            <span className="hidden">
              Desarrollado por:{" "}
              <span className="font-bold">@fermeridamagni</span>
              https://github.com/fermeridamagni
            </span>
          </div>
          <div>
            <p>Todos los derechos reservados.</p>
          </div>
        </div>
        <div className="flex flex-row gap-4 md:gap-2 order-1 md:order-2 items-center">
          <div className="flex flex-row gap-2 items-center">
            <div>
              <Link
                target="_blank"
                href="https://github.com/fermeridamagni"
                className="hover:bg-blue_primary rounded-lg p-2"
              >
                <FontAwesomeIcon icon={faGithub} size="xl" />
              </Link>
            </div>
            <div>
              <Link
                target="_blank"
                href="https://discord.gg/9wxByqDPvr"
                className="hover:bg-blue_primary rounded-lg p-2"
              >
                <FontAwesomeIcon icon={faDiscord} size="xl" />
              </Link>
            </div>
            <div>
              <Link
                target="_blank"
                href="https://www.instagram.com/fermeridamagni"
                className="hover:bg-blue_primary rounded-lg p-2"
              >
                <FontAwesomeIcon icon={faInstagram} size="xl" />
              </Link>
            </div>
          </div>

          <Divider orientation="vertical" className="h-8 bg-white" />

          <div className="flex flex-row gap-1 items-center">
            <Button variant="light" onClick={() => setTheme("dark")} isIconOnly>
              <FontAwesomeIcon icon={faMoon} size="xl" color="#ffffff" />
            </Button>

            <Button
              variant="light"
              onClick={() => setTheme("system")}
              isIconOnly
            >
              <FontAwesomeIcon icon={faDesktop} size="xl" color="#ffffff" />
            </Button>

            <Button
              variant="light"
              onClick={() => setTheme("light")}
              isIconOnly
            >
              <FontAwesomeIcon icon={faSun} size="xl" color="#ffffff" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
