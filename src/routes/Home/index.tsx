import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useState } from "react";
import { projectsArr } from "../../assets/projects/projectArr";
import { packagesArr } from "../../assets/packages/packagesArr";
import profileImage from "../../assets/images/IMG_6589.jpg";
import { ProjectCard, ServicesAccordion, ImageModal, ContactForm, PackageCards } from "../../components";
import { BsLinkedin, BsInstagram } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { useScreenSizeCheckHook } from "../../hooks/useScreenSizeCheckHook";

export default function Home() {
  const [filter, setFilter] = useState<string>("academic");
  const [imageModalOpen, setImageModalOpen] = useState<boolean>(false);
  const [currentImage, setCurrentImage] = useState<string>("");
  const [currentAlt, setCurrentAlt] = useState<string>("");
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);
  const isMobile = useScreenSizeCheckHook();

  const toggleAccordion = (id: number) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  const openImageModal = () => {
    setImageModalOpen(true);
  };

  const closeModal = () => {
    setImageModalOpen(false);
    setCurrentImage("");
    setCurrentAlt("");
  };

  const personalProjectsArr = projectsArr.filter((project) => project.association === "personal");
  const professionalProjectsArr = projectsArr.filter((project) => project.association === "professional");
  const academicProjectsArr = projectsArr.filter((project) => project.association === "academic");

  const buttonClass = "w-full bg-black font-nunito-sans text-xl py-5 transition ease-in-out duration-300";

  return (
    <HelmetProvider>
      <Helmet prioritizeSeoTags>
        <title>Thea | Front-End Developer & Web Designer Portfolio</title>
        <meta name="description" content="Hi, I’m Thea, a passionate front-end developer creating sleek, functional websites that stand out. Explore my portfolio to see how design and code come together seamlessly." /> //FILL INN
      </Helmet>
      <div className="bg-white relative">
        {imageModalOpen && <ImageModal image={currentImage} alt={currentAlt} toggle={closeModal} />}
        <section id="home">
          <header className="relative w-full h-screen backgroundImage border-b">
            <div className="absolute inset-0 flex flex-col justify-center items-center">
              {isMobile && <h1 className="font-meow-script-regular text-center text-6xl mb-10 ">I'm Thea</h1>}
              <div className="text-center flex flex-col justify-center items-center gap-5 md:mb-10 linearWhiteBackground p-20">
                <h2 className=" font-libre-baskerville text-4xl ">I make professional websites and web-applications for a living</h2>
              </div>
              <div className="relative group">
                <a href="#packages" className="tracking-wider block font-bold text-center hover:scale-105 bg-white border border-black bg-opacity-100 z-[20] relative font-nunito-sans rounded-full text-2xl text-black hover:text-opacity-90 px-12 py-5 transition-all ease-in-out duration-300 group-hover:shadow-lg group-hover:bg-gradient-to-r from-blue-500 to-purple-600">
                  check pricing packages
                </a>
                <div className="rounded-full w-full h-full top-2 left-2 absolute bg-black z-[10] transition-all duration-300 ease-in-out group-hover:top-0 group-hover:left-0 group-hover:opacity-50"></div>
              </div>
            </div>
          </header>
          <div className="px-4 pt-60 pb-32 xl:max-w-screen-xl m-auto">
            <h1 className="font-libre-baskerville text-2xl md:text-6xl leading-relaxed text-center">
              I turn <em>complex functionality</em> into
              <b>
                {" "}
                user-friendly <span className="text-cta-primaryBright">web applications</span>
              </b>{" "}
              and impactful <em>digital experiences.</em>
            </h1>
          </div>
        </section>

        <section id="services" className="min-h-[36rem] md:py-[120px] ">
          <div className="m-auto">
            <ServicesAccordion toggleAccordion={toggleAccordion} openAccordion={openAccordion} />
          </div>
        </section>
        <section id="packages" className="min-h-[36rem] border-b">
          <div className="m-auto">
            <div className="border-b">
              <h2 className="text-center px-4 xl:max-w-screen-xl m-auto md:w-[64rem] max-w-[64rem] font-nunito-sans text-xl uppercase font-bold mb-6">my packages:</h2>
            </div>
            <div className="backgroundImage pt-40">
              <div className="xl:max-w-screen-xl m-auto md:grid md:grid-cols-3 gap-10">
                {packagesArr.map((packages) => {
                  return <PackageCards packages={packages} key={packages.id} toggleAccordion={toggleAccordion} />;
                })}
              </div>
              <div className="linearBlackBackground text-black py-40">
                <div className="bg-white border-y shadow-md p-12 ">
                  <h1 className="text-2xl md:text-4xl leading-relaxed text-center mb-8  font-libre-baskerville font-bold">Not sure where to start?</h1>{" "}
                  <h1 className="text-2xl md:text-2xl font-nunito-sans leading-relaxed text-center">
                    <a href="#contact" className="relative inline gap-2 font-nunito-sans text-blue-500 text-center group">
                      <span className="text-cta-primaryBright hover:text-black">Contact me</span>
                      <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
                    </a>
                    , and I’ll help you build the perfect package for your needs!
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="bg-white min-h-[40rem] xl:max-w-screen-xl m-auto">
          <div className="flex flex-col md:flex-row justify-between items-center py-6 md:py-32 gap-16">
            <div className="relative mb-[65px]">
              <img className="object-cover rounded-full h-[16rem] min-w-[16rem] md:h-[30rem] md:min-w-[30rem] border" src={profileImage} alt="I’m Thea—a passionate front-end developer and web designer dedicated to crafting user-friendly websites and impactful digital experiences."></img>
              <h2 className="font-meow-script-regular text-6xl xl:text-9xl absolute bottom-[-65px] linearWhiteBackground  inset-x-0 text-center">I’m Thea</h2>
            </div>

            <div>
              <div className="text-lg leading-relaxed">
                <p className="mb-4 font-nunito-sans">I’ve always loved turning ideas into something real while combining design and practicality.</p>
                <p className="mb-4 font-nunito-sans">From building dollhouses in my father’s workshop as a child to solving complex challenges as an adult, my passion for design and problem-solving has been a constant. Two years ago I decided to the pursue my love for design and technology. While sailing on a boat in the Mediterranean with my husband I re-educated myself as a front-end developer, graduating with top grades.</p>
                <p className="mb-4 font-nunito-sans"> As a front-end developer and web designer, I spend my days crafting websites and applications that are not only functional but also enjoyable to use. My work is all about creating a balance between brand designs and smooth functionality, I find joy in solving puzzles and making things look just right.</p>
                <p className="font-nunito-sans "> When I’m not coding or tweaking layouts, you’ll probably find me sketching new home improvement ideas, experimenting with new tech, or sipping coffee while dreaming up my next big idea.</p>
              </div>
              <div className="flex gap-8 text-4xl mt-2 mr-2 justify-end">
                <Link to="https://www.linkedin.com/in/thea-oland-b38175139/">
                  <BsLinkedin className="hover:scale-110 transition-all duration-300 ease-in-out" />
                </Link>
                <Link to="https://www.instagram.com/thea.oland/">
                  <BsInstagram className="hover:scale-110 transition-all duration-300 ease-in-out" />
                </Link>
                <Link to="https://github.com/DWNWND">
                  <FaGithub className="hover:scale-110 transition-all duration-300 ease-in-out" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="min-h-screen border-t backgroundImage">
          <div className="m-auto max-w-[48rem] p-4">
            <ContactForm />
          </div>
        </section>
        <section id="portfolio" className=" min-h-[36rem] border-t">
          <h2 className="text-center px-4 m-auto w-full font-nunito-sans text-xl uppercase font-bold pb-6 sr-only">portfolio:</h2>

          <div className="m-auto">
            <div className="flex w-full border-b">
              <button onClick={() => setFilter("academic")} className={`${buttonClass} ${filter === "academic" ? "bg-opacity-100 text-white " : "bg-opacity-0 hover:bg-black hover:text-white"} pl-16`}>
                academic projects
              </button>
              <div className="w-[4px] bg-black"></div>
              <button onClick={() => setFilter("professional")} className={`${buttonClass} ${filter === "professional" ? "bg-opacity-100 text-white " : "bg-opacity-0 hover:bg-black hover:text-white"}`}>
                professional projects
              </button>
              <div className="w-[4px] bg-black"></div>
              <button onClick={() => setFilter("personal")} className={`${buttonClass} ${filter === "personal" ? "bg-opacity-100 text-white" : "bg-opacity-0 hover:bg-black hover:text-white"} pr-16`}>
                personal projects
              </button>
            </div>
            <div className={`grid p-4 md:p-16 grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 bg-lightPurple`}>
              {filter === "academic" && academicProjectsArr.slice(0, 6).map((project) => <ProjectCard project={project} key={project.id} openImageModal={openImageModal} setCurrentImage={setCurrentImage} setCurrentAlt={setCurrentAlt} />)}
              {filter === "professional" && professionalProjectsArr.map((project) => <ProjectCard project={project} key={project.id} openImageModal={openImageModal} setCurrentImage={setCurrentImage} setCurrentAlt={setCurrentAlt} />)}
              {filter === "personal" && personalProjectsArr.map((project) => <ProjectCard project={project} key={project.id} openImageModal={openImageModal} setCurrentImage={setCurrentImage} setCurrentAlt={setCurrentAlt} />)}
            </div>
          </div>
        </section>
      </div>
    </HelmetProvider>
  );
}
