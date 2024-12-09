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
  assosiation: string;
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
}

function Gradings({ grade }: { grade: number }): JSX.Element {
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
      <div className={`bg-realWhite  border rounded-lg flex flex-col relative hover:shadow-lg transition duration-300 ease-in-out transform md:hover:scale-105`}>
        {project.assosiation === "academic" ? (
          <div className={`flex justify-center p-6`}>
            {project.grading && project.grading > 0 ? (
              <div className="m-auto flex items-center gap-2">
                <Gradings grade={project.grading} />
                <p>(A)</p>
              </div>
            ) : (
              <p className="m-auto">not graded yet</p>
            )}
          </div>
        ) : null}
        {/* <img src={project.logo} alt={project.title} className="h-10 max-h-8" /> */}
        {/* </div> */}
        <div className={`${project.assosiation === "academic" && "border-t"} p-8 flex flex-col justify-between gap-4  min-h-60 md:h-60`}>
          <div className="flex gap-4 flex-col">
            <div className="flex justify-between">
              <h3 className="font-libre-baskerville text-2xl mb-2">{project.title}</h3>
            </div>
            <p className="font-nunito-sans text-lg">{project.description}</p>
          </div>
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
            <button
              onClick={() => {
                openImageModal();
                setCurrentImage(project.image);
                setCurrentAlt(project.description);
              }}
              className="relative flex items-center gap-2 justify-end font-nunito-sans text-blue-500 text-center group">
              <div className="relative">
                <span className="">screenshot</span>
                <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
              </div>
              <GoArrowRight className="transform group-hover:translate-x-2 group-hover:animate-bounceArrow transition-all duration-300" />
            </button>
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

// export default function ProjectCard({ project }: { project: Project }): JSX.Element {
//   return (
//     <div className={`${project.title === "Lazz" && "bg-lazz"} ${project.title === "Holidaze" && "bg-holidaze"} ${project.title === "Bazaar" && "bg-bazaar"} border rounded-lg flex flex-col relative hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105`}>
//       <a href={project.url} target="_blank" rel="noreferrer" className=" border-b p-4 font-libre-baskerville hover:underline text-blue-500 text-center rounded-t-lg ">
//         view live demo
//       </a>
//       <div className="h-64 min-h-64 max-h-64 bg-contrast-contrastPrimary overflow-hidden relative">
//         <div className="h-64 min-h-64 max-h-64">
//           <img src={project.image} alt={project.title} className=" h-64 min-h-64 max-h-64 w-full object-cover " />
//         </div>
//       </div>
//       <div className="p-8 flex flex-col justify-between gap-4 h-full border-t">
//         <div className="flex gap-4 flex-col">
//           <div className="flex justify-between">
//             <h3 className="font-nunito-sans font-bold text-2xl uppercase mb-2">{project.title}</h3>{" "}
//             <div className="flex justify-center gap-4 text-2xl">
//               {project.tailwind && <RiTailwindCssFill />}
//               {project.react && <RiReactjsLine />}
//               {project.js && <RiJavascriptFill />}
//               {project.bootstrap && <RiBootstrapFill />}
//               {project.sass && <FaSass />}
//               {project.typescript && <BiLogoTypescript />}
//               {project.cssModules && <RiCss3Fill />}
//             </div>
//           </div>
//           <p className="font-nunito-sans text-lg">{project.description}</p>
//         </div>
//         <div className={`flex justify-center p-4`}>
//           <img src={project.logo} alt={project.title} className="h-10" />
//         </div>
//       </div>
//     </div>
//   );
// }
