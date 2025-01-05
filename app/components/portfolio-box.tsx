import  Link  from "next/link";
import Image from "next/image";

interface PortfolioBoxProps {
  data: {
    id: number;
    title: string;
    image: string;
    urlGithub: string;
    urlDemo: string;
  };
}

const PortfolioBox = (props: PortfolioBoxProps) => {
  const { data } = props;
  const { id, title, image, urlGithub, urlDemo } = data;

  return (
    <div className="p-4 border border-gray-400 rounded-xl transition-all duration-300 hover:border-secondary">
      <h3 className="mb-4 text-xl">{title}</h3>

      <Image
        src={image}
        alt="Imagen product"
        width={200}
        height={200}
        className="w-full md:w-[200px] rounded-xl h-auto md:h-[150px]"
      />

      <div className="flex gap-5 mt-5">
        <Link
          href={urlGithub}
          target="_blank"
          className="p-2 transition duration-150 rounded-lg bg-slate-500 hover:bg-slate-500/80 text-white"
        >
          Github
        </Link>

        <Link
          href={urlDemo}
          target="_blank"
          className="p-2 transition duration-150 rounded-lg bg-secondary hover:bg-secondary/80 text-white"
        >
          Demo
        </Link>
      </div>
    </div>
  );
};

export default PortfolioBox;
