import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin,  Rss,  Crop, Pencil, Computer, Book, Rocket, Speech, Github, Mail } from "lucide-react";
import { SlSocialBehance } from "react-icons/sl";
import { IoLogoJavascript, IoLogoHtml5, IoLogoCss3, IoLogoSass, IoLogoReact } from "react-icons/io5";
import { SiTypescript, SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { FaBootstrap, FaNodeJs, FaNpm, FaGitAlt, FaGithub, FaAngular} from "react-icons/fa";
import { DiMysql } from "react-icons/di";

export const socialNetworks = [
    {
        id: 1,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "https://www.linkedin.com/in/diany-martinez/",
    },
    {
        id: 2,
        logo: <Github size={30} strokeWidth={1} />,
        src: "https://github.com/Diany0121",
    },

    {
        id: 3,
        logo: <SlSocialBehance size={30} strokeWidth={1} />,
        src: "https://www.behance.net/dianyluna31",
    },
    
];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Target",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    },
    // {
    //     id: 4,
    //     title: "Contact",
    //     icon: <Mail size={25} color="#fff" strokeWidth={1} />,
    //     link: "/contact", 
    // },

];

export const dataAboutPage = [
    {
        id: 1,
        title: "Junior Frontend Developer",
        subtitle: "TresBits Ingenieros de Software SL",
        description: "Desempeño el rol de junior frontend con Angular y diseñadora UX/UI. Desarrollo interfaces de usuario responsivas y optimizadas, asegurando una experiencia intuitiva y centrada en el usuario. Colaboro con equipos multidisciplinarios para implementar soluciones tecnológicas que cumplen con los objetivos de negocio y las necesidades de los clientes.",
        date: "Jun 2024 / Act",
    },
    {
        id: 2,
        title: "Junior Full Stack Developer",
        subtitle: "AdoptaUnJunior",
        description: "Participé en el desarrollo de un blog para #Adoptaunjunior, enfocándonos en SEO y accesibilidad para atraer clientes y talento junior. Utilizamos tecnologías como NextJS, TypeScript, NodeJS y TailwindCSS, garantizando coherencia visual con la web principal. Implementé funcionalidades clave como roles de usuario, editor de contenido avanzado y sistemas de comentarios seguros. Este proyecto fortaleció mis habilidades en desarrollo frontend y trabajo en equipo, contribuyendo a una estrategia de contenido efectiva y atractiva.",
        date: "Abr 2024 / Jun 2024",
    },
    {
        id: 3,
        title: "Bootcamp Programación Web",
        subtitle: "Adalab",
        description: "Durante mi formación en bootcamp, me especialicé en maquetación con HTML5, CSS3, Flexbox, CSS Grid, SASS y Bootstrap, y desarrollé aplicaciones frontend utilizando JavaScript (ES6) y React. Adquirí conocimientos en consumo de APIs de terceros y fundamentos de backend con Node.js, Express y SQL. Manejo herramientas como Git, GitHub, VSCode, Slack, Gulp y Zeplin, y aplico control de versiones y metodologías de trabajo en equipo. Estas competencias me permiten crear interfaces intuitivas y funcionales, listas para enfrentar desafíos en el desarrollo web frontend.",
        date: "Nov 2023 / Mar 2024",
    },
    {
        id: 4,
        title: "Creador de contenidos y editor web",
        subtitle: "GFT Technologies",
        description: "Gestión de contendios web y procesos de migración web desde un lenguaje de programamción llamado Tridion a Adobe Manager Experience. Gestión de CMS internos de la empresa y lanzamientos de nuevos productos y su publicación      ",
        date: "Abr 2022 / Nov 2022",
    },
    {
        id: 5,
        title: "Diseñadora & Community Manager",
        subtitle: "Tacubaya Consulting",
        description: "Diseñadora gráfica con experiencia en agencia de publicidad y Community Manager, he desarrollado habilidades en el diseño gráfico, la creación de contenido, la gestión de redes sociales y la atención al cliente.       ",
        date: "May 2021 / Oct 2023 ",
    },
]

export const dataCounter = [
    {
        id: 0,
        endCounter: 10,
        text: "Años de experiencia",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 80,
        text: "Clientes satisfechos",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: 220,
        text: "Proyectos finalizados",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 3,
        endCounter: 30,
        text: "Premios ganadores",
        lineRight: false,
        lineRightMobile: false,
    },
];

export const serviceData = [
    {
        logo: <IoLogoHtml5 size={50} strokeWidth={1} />,
        title: "HTML5",
    },
    {
        logo: <IoLogoCss3 size={50} strokeWidth={1} />,
        title: "CSS3",
    },
    {
        logo: <IoLogoSass size={50} strokeWidth={1} />,
        title: "Sass",
    },
    {
        logo: <IoLogoJavascript size={50} strokeWidth={1} />,
        title: "Javascript",
    },
    {
        logo: <SiTypescript size={48} strokeWidth={1} />,
        title: "Typescript",
    },
    {
        logo: <IoLogoReact size={50} strokeWidth={1} />,
        title: "React",
    },
    {
        logo: <FaAngular size={50} strokeWidth={1} />,
        title: "Angular",
    },
    {
        logo: <TbBrandNextjs size={50} strokeWidth={1} />,
        title: "Next.js",
    },
    {
        logo: <SiTailwindcss size={50} strokeWidth={1} />,
        title: "TailwindCSS",
    },
    {
        logo: <FaBootstrap size={50} strokeWidth={1} />,
        title: "Bootstrap",
    },
    {
        logo: <FaNodeJs size={50} strokeWidth={1} />,
        title: "Node.js",
    },
    {
        logo: <FaNpm size={50} strokeWidth={1} />,
        title: "NPM",
    },
    {
        logo: <DiMysql size={50} strokeWidth={1} />,
        title: "SQL",
    },
    {
        logo: <FaGitAlt size={50} strokeWidth={1} />,
        title: "Git",
    },
    {
        logo: <FaGithub size={50} strokeWidth={1} />,
        title: "Github",
    },

];

export const dataPortfolio = [
    {
        id: 1,
        title: "Tarjetas de proyectos",
        image: "/portada_projectTwo.jpg",
        urlGithub: "https://github.com/Diany0121/project-promo-V-module-4-team-1",
        urlDemo: "https://project-promo-v-module-4-team-1.onrender.com/",
    },
    {
        id: 2,
        title: "Buscador de personajes",
        image: "/portada_projectThree.jpg",
        urlGithub: "https://github.com/Diany0121/modulo-3-evaluacion-final-Diany0121",
        urlDemo: "https://diany0121.github.io/modulo-3-evaluacion-final-Diany0121/",
    },
    {
        id: 3,
        title: "Tarjetas de perfil",
        image: "/Avesome_profile-cards.jpg",
        urlGithub: "https://github.com/Diany0121/project-promo-V-module-2-team-1",
        urlDemo: "https://diany0121.github.io/project-promo-V-module-2-team-1/",
        
    },
    {
        id: 4,
        title: "Web grupal",
        image: "/portada_projectOne.jpg",
        urlGithub: "https://github.com/Diany0121/Group-project",
        urlDemo: "https://diany0121.github.io/Group-project/",
    },
    {
        id: 5,
        title: "Blog Adopata un Junior",
        image: "/AUJ.jpg",
        urlGithub: "https://github.com/lasantavispa/blog/tree/devSecondary",
        urlDemo: "https://adoptaunjunior.es/",
    },
    
];

export const dataTestimonials = [
    {
        id: 1,
        name: "George Snow",
        description:
            "¡Increíble plataforma! Los testimonios aquí son genuinos y me han ayudado a tomar decisiones informadas. ¡Altamente recomendado!",
        imageUrl: "/profile1.png",
    },
    {
        id: 2,
        name: "Juan Pérez",
        description:
            "Me encanta la variedad de testimonios disponibles en esta página. Es inspirador ver cómo otras personas han superado desafíos similares a los míos. ¡Gracias por esta invaluable fuente de motivación!",
        imageUrl: "/profile2.png",
    },
    {
        id: 3,
        name: "María García",
        description:
            "Excelente recurso para obtener opiniones auténticas sobre diferentes productos y servicios. Me ha ayudado mucho en mis compras en línea. ¡Bravo por este sitio!",
        imageUrl: "/profile3.png",
    },
    {
        id: 4,
        name: "Laura Snow",
        description:
            "¡Qué descubrimiento tan fantástico! Los testimonios aquí son honestos y detallados. Me siento más seguro al tomar decisiones después de leer las experiencias compartidas por otros usuarios.",
        imageUrl: "/profile4.png",
    },
    {
        id: 5,
        name: "Carlos Sánchez",
        description:
            "Una joya en la web. Los testimonios son fáciles de encontrar y están bien organizados. ¡Definitivamente mi destino número uno cuando necesito referencias confiables!",
        imageUrl: "/profile5.png",
    },
    {
        id: 6,
        name: "Antonio Martínez",
        description:
            "¡Fantástico recurso para aquellos que buscan validación antes de tomar decisiones importantes! Los testimonios aquí son veraces y realmente útiles. ¡Gracias por simplificar mi proceso de toma de decisiones!",
        imageUrl: "/profile6.png",
    },
];