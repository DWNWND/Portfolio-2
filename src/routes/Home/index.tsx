import { Helmet, HelmetProvider } from "react-helmet-async";
import Header from "../../components/Header";
import { projectsArr } from "../../assets/projects/projectArr";
import profileImage from "../../assets/images/IMG_6589.jpg";
import ProjectCard from "../../components/ProjectCard";
import { useState } from "react";
import { ImageModal } from "../../components/ImageModal";

export default function Home() {
  const [filter, setFilter] = useState<string>("academic");
  const [imageModalOpen, setImageModalOpen] = useState<boolean>(false);
  const [currentImage, setCurrentImage] = useState<string>("");
  const [currentAlt, setCurrentAlt] = useState<string>("");

  const openImageModal = () => {
    setImageModalOpen(true);
  };

  const closeModal = () => {
    setImageModalOpen(false);
    setCurrentImage("");
    setCurrentAlt("");
  };

  const personalProjectsArr = projectsArr.filter((project) => project.assosiation === "personal");
  const professionalProjectsArr = projectsArr.filter((project) => project.assosiation === "professional");
  const academicProjectsArr = projectsArr.filter((project) => project.assosiation === "academic");

  const buttonClass = "w-full bg-black font-nunito-sans text-xl py-5 transition ease-in-out duration-300";

  return (
    <HelmetProvider>
      <Helmet prioritizeSeoTags>
        <title>Thea | Front-End Developer & Web Designer Portfolio</title>
        <meta name="description" content="Hi, I’m Thea, a passionate front-end developer creating sleek, functional websites that stand out. Explore my portfolio to see how design and code come together seamlessly." /> //FILL INN
      </Helmet>
      <div className="bg-realWhite relative">
        {imageModalOpen && <ImageModal image={currentImage} alt={currentAlt} toggle={closeModal} />}
        <section id="home">
          <Header />
          <div className="px-4 py-60 xl:max-w-screen-xl m-auto">
            <h1 className="font-libre-baskerville text-2xl md:text-6xl leading-relaxed text-center">
              I turn <em>complex functionality</em> into
              <b>
                {" "}
                user-friendly <span className="text-cta-ctaPrimary2">web applications</span>
              </b>{" "}
              and impactful <em>digital experiences.</em>
            </h1>
          </div>
        </section>
        <section id="projects" className=" min-h-[36rem] border-y">
          <div className="m-auto">
            <h2 className="font-libre-baskerville text-4xl uppercase text-center border-b p-4 bg-cta-ctaPrimary2 bg-opacity-50">my projects</h2>
            <div className="flex w-full border-b">
              <button onClick={() => setFilter("academic")} className={`${buttonClass} ${filter === "academic" ? "bg-opacity-100 text-realWhite " : "bg-opacity-0 hover:bg-opacity-20"}`}>
                academic projects
              </button>
              <div className="w-[4px] bg-black"></div>
              <button onClick={() => setFilter("professional")} className={`${buttonClass} ${filter === "professional" ? "bg-opacity-100 text-realWhite " : "bg-opacity-0 hover:bg-opacity-20"}`}>
                professional projects
              </button>
              <div className="w-[4px] bg-black"></div>
              <button onClick={() => setFilter("personal")} className={`${buttonClass} ${filter === "personal" ? "bg-opacity-100 text-realWhite" : "bg-opacity-0 hover:bg-opacity-20"}`}>
                personal projects
              </button>
            </div>
            <div className={`grid p-4 md:p-16 grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 bg-lazz`}>
              {filter === "academic" && academicProjectsArr.slice(0, 6).map((project) => <ProjectCard project={project} key={project.id} openImageModal={openImageModal} setCurrentImage={setCurrentImage} setCurrentAlt={setCurrentAlt} />)}
              {filter === "professional" && professionalProjectsArr.map((project) => <ProjectCard project={project} key={project.id} openImageModal={openImageModal} setCurrentImage={setCurrentImage} setCurrentAlt={setCurrentAlt} />)}
              {filter === "personal" && personalProjectsArr.map((project) => <ProjectCard project={project} key={project.id} openImageModal={openImageModal} setCurrentImage={setCurrentImage} setCurrentAlt={setCurrentAlt} />)}
            </div>
          </div>
        </section>
        <section id="about" className="bg-realWhite min-h-[40rem]">
          <div className="flex flex-col md:flex-row justify-between items-center p-6 md:p-16 gap-16">
            <div className="">
              <img className="object-cover rounded-full h-[16rem] min-w-[16rem] md:h-[30rem] md:min-w-[30rem] border" src={profileImage} alt="I’m Thea—a passionate front-end developer and web designer dedicated to crafting user-friendly websites and impactful digital experiences."></img>
            </div>
            <div>
              <h2 className="font-meow-script-regular text-6xl xl:text-8xl mb-4">I’m Thea</h2>
              <div className="font-nunito-sans text-xl leading-relaxed">
                <p className="mb-3">I’ve always loved the challenge of turning ideas into something tangible.</p>
                <p className="mb-3"> As a front-end developer and web designer, I spend my days crafting websites and applications that are not only functional but also enjoyable to use. My work is all about creating a balance between brand designs and smooth functionality, and I find joy in solving puzzles and making things look just right.</p>
                <p> When I’m not coding or tweaking layouts, you’ll probably find me sketching new ideas, experimenting with design tools, or sipping coffee while daydreaming about the next project.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </HelmetProvider>
  );
}
