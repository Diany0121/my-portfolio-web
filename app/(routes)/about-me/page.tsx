import Avatar from "@/app/components/avatar";
import ContainerPage from "@/app/components/container";
import CoverParticles from "@/app/components/cover-particles";
import SliderTechnologies from "@/app/components/slider-technologies";
import TimeLine from "@/app/components/time-line";

import TransitionPage from "@/app/components/transition-page";
import Link from "next/link";

const PageAboutMe = () => {
  return (
    <>
      <ContainerPage>
        <CoverParticles />
        <Avatar />

        <TransitionPage />

        <div className=" grid items-center justify-center h-3/6 max-w-5xl gap-8 mx-auto md:grid-cols-2 md:px-5">
          <div className="max-m-[450px] mt-20 md:mt-0">
            <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-2 text-gray-600">
              Sobre {""}
              <span className="font-bold text-secondary">mi</span>
            </h1>

            <p className=" mb-5 text-base text-slate-400">
            Motivada por el deseo de transformar ideas creativas en web interactivas, decidí expandir mis habilidades hacia la programación web. Dominando tecnologías claves como HTML, CSS y JavaScript, y me he especializado en frameworks modernos como React y Next.js.
            </p>

            <p className=" mb-5 text-base text-slate-400">
            Esta combinación de diseño y desarrollo me permite construir interfaces intuitivas y responsive, asegurando que cada proyecto no solo luzca increíble, sino que también funcione de manera eficiente y fluida.
            </p>

            <Link
              href="https://drive.google.com/file/d/1a5lOzQf4Zg5uZM37Ef2dwrcaRgWB73Wg/view?usp=sharing"
              className="px-3 py-3 rounded-lg text-white bg-secondary hover:bg-white hover:text-secondary hover:border-secondary hover:border"
              target="_blank"
            >
              Curriculum
            </Link>
          </div>

          <div>
            <SliderTechnologies />
          </div>
        </div>

        <h1 className="text-2xl leading-tight text-center md:text-4xl mt-5 mb-5  md:mt-14 text-gray-600">
          Toda mi {""}
          <span className="font-bold text-secondary">
            trayectoria profesional
          </span>
        </h1>

        <TimeLine />
      </ContainerPage>
    </>
  );
};

export default PageAboutMe;
