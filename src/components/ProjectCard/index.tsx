import { RiTailwindCssFill, RiReactjsLine, RiJavascriptFill, RiBootstrapFill, RiCss3Fill } from "react-icons/ri";
import { FaSass } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";

interface Project {
  title: string;
  description: string;
  image: string;
  url: string;
  logo: string;
  id: number;
  bg: string;
  tailwind: boolean;
  react: boolean;
  js: boolean;
  typescript: boolean;
  bootstrap: boolean;
  sass: boolean;
  cssModules: boolean;
}

export default function ProjectCard({ project }: { project: Project }): JSX.Element {
  return (
    <div className={`${project.title === "Lazz" && "bg-lazz"} ${project.title === "Holidaze" && "bg-holidaze"} ${project.title === "Bazaar" && "bg-bazaar"} border rounded-lg flex flex-col relative hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105`}>
      <a href={project.url} target="_blank" rel="noreferrer" className=" border-b p-4 font-libre-baskerville hover:underline text-blue-500 text-center rounded-t-lg ">
        view live demo
      </a>
      <div className="h-64 min-h-64 max-h-64 bg-contrast-contrastPrimary overflow-hidden relative">
        <div className="h-64 min-h-64 max-h-64">
          <img src={project.image} alt={project.title} className=" h-64 min-h-64 max-h-64 w-full object-cover " />
        </div>
      </div>
      <div className="p-8 flex flex-col justify-between gap-4 h-full border-t">
        <div className="flex gap-4 flex-col">
          <div className="flex justify-between">
            <h3 className="font-nunito-sans font-bold text-2xl uppercase mb-2">{project.title}</h3>{" "}
            <div className="flex justify-center gap-4 text-2xl">
              {project.tailwind && <RiTailwindCssFill />}
              {project.react && <RiReactjsLine />}
              {project.js && <RiJavascriptFill />}
              {project.bootstrap && <RiBootstrapFill />}
              {project.sass && <FaSass />}
              {project.typescript && <BiLogoTypescript />}
              {project.cssModules && <RiCss3Fill />}
            </div>
          </div>
          <p className="font-nunito-sans text-lg">{project.description}</p>
        </div>
        <div className={`flex justify-center p-4`}>
          <img src={project.logo} alt={project.title} className="h-10" />
        </div>
      </div>
    </div>
  );
}
