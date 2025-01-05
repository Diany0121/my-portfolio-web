import ContainerPage from "@/app/components/container";
import CoverParticles from "@/app/components/cover-particles";
import PortfolioBox from "@/app/components/portfolio-box";
import TransitionPage from "@/app/components/transition-page";
import { dataPortfolio } from "@/data";

const PortfolioPage = () => {
    return (
        <ContainerPage>
            <CoverParticles />
            <TransitionPage />
            {/* <AvatarPortfolio /> */}

            <div className="flex flex-col justify-center h-full mb-28">
                <h1 className="text-2xl leading-tight text-center md:text-4xl mt-5 mb-5  text-gray-600">Mis proyectos {""}
                    <span className=" font-bold text-secondary">profesionales</span>
                </h1>

                <div className="relative z-10 grid max-m-5xl
                gap-6 mx-auto mt-4 sm:grid-cols-2 md:grid-cols-4">
                    {dataPortfolio.map((data) => (
                        <PortfolioBox key={data.id} data={data}/>
                    ))}
                    

                </div>
            </div>
        </ContainerPage>
    )
}

export default PortfolioPage;