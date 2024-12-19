import { RiTailwindCssFill, RiReactjsLine, RiJavascriptFill, RiBootstrapFill, RiCss3Fill, RiHtml5Fill } from "react-icons/ri";
import { FaSass, FaCss3Alt } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";
import { TiStarFullOutline, TiStarOutline } from "react-icons/ti";

interface Project {
  title: string;
  description: string;
  image: string;
  url: string;
  logo: string;
  id: number;
  association: string;
  grading?: number;
  tailwind: boolean;
  react: boolean;
  js: boolean;
  typescript: boolean;
  bootstrap: boolean;
  sass: boolean;
  cssModules: boolean;
  html: boolean;
  css: boolean;
  repo?: string;
  finished: boolean;
}

function Grading({ grade }: { grade: number }): JSX.Element {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (i < grade) {
      stars.push(<TiStarFullOutline key={i} />);
    } else {
      stars.push(<TiStarOutline key={i} />);
    }
  }

  return <div className="flex gap-2">{stars}</div>;
}

interface ProjectCardProps {
  project: Project;
  openImageModal: () => void;
  setCurrentImage: (image: string) => void;
  setCurrentAlt: (alt: string) => void;
}

export default function ProjectCard({ project, openImageModal, setCurrentImage, setCurrentAlt }: ProjectCardProps): JSX.Element {
  return (
    <div>
      <div className={`bg-realWhite  border rounded-lg flex flex-col relative hover:shadow-lg transition duration-300 ease-in-out transform`}>
        {project.association === "academic" && project.grading ? (
          <div className={`flex justify-center p-6`}>
            {project.grading > 0 && project.grading < 6 && (
              <div className="m-auto flex items-center gap-2">
                <Grading grade={project.grading} />
                <p>(A)</p>
              </div>
            )}
            {project.grading === 10 && (
              <div className="m-auto flex items-center gap-2">
                <p>not graded yet</p>
              </div>
            )}
            {project.grading === 6 && (
              <div className="m-auto flex items-center gap-2">
                <p>passed</p>
              </div>
            )}
          </div>
        ) : null}
        <div className={`${project.association === "academic" && "border-t"} p-8 flex flex-col justify-between gap-4 min-h-48`}>
          <div className="flex gap-4 flex-col">
            <div className="flex justify-between">
              <h3 className="font-libre-baskerville text-2xl mb-2">{project.title}</h3>
              {!project.finished && <p className="text-sm text-cta-secondary">work in progress</p>}
            </div>
            <p className="font-nunito-sans">{project.description}</p>
          </div>
        </div>
        <div
          className="border-t cursor-pointer max-h-[13rem] overflow-hidden"
          onClick={() => {
            openImageModal();
            setCurrentImage(project.image);
            setCurrentAlt(project.description);
          }}>
          <img src={project.image} alt={project.description}></img>
        </div>
        <div className="border-t p-8 flex items-center justify-between">
          <div className="flex flex-col gap-2 items-start">
            <Link to={project.url} className="relative flex items-center gap-2 justify-end font-nunito-sans text-blue-500 text-center group">
              <div className="relative">
                <span className="">live demo</span>
                <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
              </div>
              <GoArrowRight className="transform group-hover:translate-x-2 group-hover:animate-bounceArrow transition-all duration-300" />
            </Link>
            {project.association === "academic" && project.repo && (
              <Link to={project.repo} className="relative flex items-center gap-2 justify-end font-nunito-sans text-blue-500 text-center group">
                <div className="relative">
                  <span className="">github repo</span>
                  <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
                </div>
                <GoArrowRight className="transform group-hover:translate-x-2 group-hover:animate-bounceArrow transition-all duration-300" />
              </Link>
            )}
          </div>
          <div className="flex justify-center gap-4 text-2xl">
            {project.tailwind && <RiTailwindCssFill />}
            {project.react && <RiReactjsLine />}
            {project.js && <RiJavascriptFill />}
            {project.bootstrap && <RiBootstrapFill />}
            {project.sass && <FaSass />}
            {project.typescript && <BiLogoTypescript />}
            {project.cssModules && <RiCss3Fill />}
            {project.html && <RiHtml5Fill />}
            {project.css && <FaCss3Alt />}
          </div>
        </div>
      </div>
    </div>
  );
}