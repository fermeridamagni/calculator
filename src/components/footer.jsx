"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@nextui-org/react";
import { config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faDiscord,
  faInstagram,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;

export default function Footer() {
  const router = useRouter();

  return (
    <footer className="w-full h-auto bg-black flex flex-col justify-center items-center text-white relative z-20">
      <div className="w-10/12 relative -top-8 bg-sky-700 py-10 rounded-lg shadow-black shadow-xl flex flex-row justify-between items-center px-5 flex-wrap gap-10">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
          <div className="w-36 h-36 bg-black rounded-full flex justify-center items-center">
            <Image
              alt="Magni Developer"
              src="/images/logo_white.png"
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
              className="bg-black py-2 px-8 rounded-lg shadow-xl text-white shadow-sky-700"
              onClick={() => {
                router.push("https://magnideveloper.com/iniciar");
              }}
              endContent={<FontAwesomeIcon icon={faArrowRight} />}
            >
              Iniciar
            </Button>
          </div>
          <div>
            <Button
              className="bg-black py-2 px-8 rounded-lg shadow-xl text-white shadow-sky-700"
              onClick={() => {
                router.push("https://magnideveloper.com/contacto");
              }}
              endContent={<FontAwesomeIcon icon={faArrowRight} />}
            >
              Contacto
            </Button>
          </div>
          <div>
            <Button
              className="bg-black py-2 px-8 rounded-lg shadow-xl text-white shadow-sky-700"
              onClick={() => {
                router.push("https://magnideveloper.com/login");
              }}
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
                  className="hover:bg-sky-700 rounded-lg px-2"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="https://magnideveloper.com/productos"
                  target="_blank"
                  className="hover:bg-sky-700 rounded-lg px-2"
                >
                  Productos
                </Link>
              </li>
              <li>
                <Link
                  href="https://magnideveloper.com/blog"
                  target="_blank"
                  className="hover:bg-sky-700 rounded-lg px-2"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="https://magnideveloper.com/contacto"
                  target="_blank"
                  className="hover:bg-sky-700 rounded-lg px-2"
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
                  className="hover:bg-sky-700 rounded-lg px-2"
                >
                  Reloj Checador
                </Link>
              </li>
              <li>
                <Link
                  href="https://magnideveloper.com/productos/whatsappBot"
                  target="_blank"
                  className="hover:bg-sky-700 rounded-lg px-2"
                >
                  WhatsApp Bot
                </Link>
              </li>
              <li>
                <Link
                  href="https://magnideveloper.com/productos/customProject"
                  target="_blank"
                  className="hover:bg-sky-700 rounded-lg px-2"
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
                  className="hover:bg-sky-700 rounded-lg px-2"
                >
                  ¿Quiénes Somos?
                </Link>
              </li>
              <li>
                <Link
                  href="https://magnideveloper.com/nosotros/experiencia"
                  target="_blank"
                  className="hover:bg-sky-700 rounded-lg px-2"
                >
                  Experiencia
                </Link>
              </li>
              <li>
                <Link
                  href="https://magnideveloper.com/nosotros/habilidades"
                  target="_blank"
                  className="hover:bg-sky-700 rounded-lg px-2"
                >
                  Habilidades
                </Link>
              </li>
              <li>
                <Link
                  href="https://magnideveloper.com/nosotros/portafolio"
                  target="_blank"
                  className="hover:bg-sky-700 rounded-lg px-2"
                >
                  Portafolio de Trabajo
                </Link>
              </li>
              <li>
                <Link
                  href="https://magnideveloper.com/nosotros/politica_de_privacidad"
                  target="_blank"
                  className="hover:bg-sky-700 rounded-lg px-2"
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
                  className="hover:bg-sky-700 rounded-lg px-2"
                >
                  Atención a Clientes
                </Link>
              </li>
              <li>
                <Link
                  href="https://magnideveloper.com/login"
                  target="_blank"
                  className="hover:bg-sky-700 rounded-lg px-2"
                >
                  Iniciar Sesión
                </Link>
              </li>
              <li>
                <Link
                  href="https://magnideveloper.com/user/dashboard"
                  target="_blank"
                  className="hover:bg-sky-700 rounded-lg px-2"
                >
                  Panel de Control
                </Link>
              </li>
              <li>
                <Link
                  href="https://magnideveloper.com/user/account"
                  target="_blank"
                  className="hover:bg-sky-700 rounded-lg px-2"
                >
                  Administrar Cuenta
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-11/12 border-t border-white-primary py-8 flex flex-col md:flex-row justify-between items-center gap-10 md:gap-0 text-center">
        <div className="order-2 md:order-1 flex flex-col md:flex-row gap-2">
          <div>
            <p className="text-2xl md:text-base">
              @ Magni <span className="font-bold">Developer</span>.
            </p>
            <p className="hidden">
              Desarrollado por:{" "}
              <span className="font-bold">@fermeridamagni</span>
              https://github.com/fermeridamagni
            </p>
          </div>
          <div>
            <p>Todos los derechos reservados.</p>
          </div>
        </div>
        <div className="flex flex-row gap-7 md:gap-2 order-1 md:order-2">
          <div>
            <a
              target="_blank"
              href="https://github.com/fermeridamagni"
              className="hover:bg-sky-700 rounded-lg p-2"
            >
              <FontAwesomeIcon icon={faGithub} size="xl" />
            </a>
          </div>
          <div>
            <a
              target="_blank"
              href="https://discord.gg/9wxByqDPvr"
              className="hover:bg-sky-700 rounded-lg p-2"
            >
              <FontAwesomeIcon icon={faDiscord} size="xl" />
            </a>
          </div>
          <div>
            <a
              target="_blank"
              href="https://www.instagram.com/fermeridamagni"
              className="hover:bg-sky-700 rounded-lg p-2"
            >
              <FontAwesomeIcon icon={faInstagram} size="xl" />
            </a>
          </div>
          <div>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/fer-merida-magni-0a629426a/"
              className="hover:bg-sky-700 rounded-lg p-2"
            >
              <FontAwesomeIcon icon={faLinkedin} size="xl" />
            </a>
          </div>
          <div>
            <a
              target="_blank"
              href="https://twitter.com/fermeridamagni"
              className="hover:bg-sky-700 rounded-lg p-2"
            >
              <FontAwesomeIcon icon={faXTwitter} size="xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
