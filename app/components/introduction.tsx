"use client";
import Link from "next/link";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const Introduction = () => {
  return (
    <div className="z-20 w-full ">
      <div className="z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2">
        <Image
          src="/efecto_1x1.jpeg"
          priority
          width="200"
          height="200"
          alt="Profile pic"
          className="rounded-full w-5/12 h-5/12 ml-80"
        /> 

        <div className="flex flex-col justify-center max-w-md">
          <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-3xl md:mb-10 text-gray-600">
            Hola, soy Diany Martínez,
            <TypeAnimation
              sequence={[
                " Junior Front-End Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="block font-bold text-secondary"
            />
          </h1>

          <p className="mx-auto mb-2  text-gray-600 md:mx-0 md:mb-12  md:text-base text-sm">
          Provengo del entorno del diseño UX / UI y gráfico.
          Aportando una comprensión de la estética, la usabilidad y la creación de experiencias visualmente impactantes para el usuario.
          </p>

          <div className="flex items-center justify-center gap-3 md:justify-start md:gap-10 text-gray-600">
            <Link
              href="/portfolio"
              className="px-3 py-2 transition-all cursor-pointer text-md w-fit rounded-xl border-2 border-secondary hover:shadow-xl hover:bg-secondary hover:text-white hover: shadow-gray-400 text-gray-600"
            >
              Ver proyectos
            </Link>

            <Link
              href="mailto:dianymartinez31@gmail.com"
              className="px-3 py-2 transition-all cursor-pointer text-md w-fit rounded-xl border-2 border-secondary hover:shadow-xl hover:bg-secondary hover:text-white hover: shadow-gray-400 text-gray-600"
            >
              Contacta conmigo
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
