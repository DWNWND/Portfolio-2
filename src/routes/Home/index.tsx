import { Helmet, HelmetProvider } from "react-helmet-async";
import Header from "../../components/Header";
import { projectsArr } from "../../assets/projects/projectArr";
import profileImage from "../../assets/images/IMG_6589.jpg";
import ProjectCard from "../../components/ProjectCard";
import ServicesAccordion from "../../components/ServicesAccordion";
import { useState } from "react";
import { ImageModal } from "../../components/ImageModal";
import ContactForm from "../../components/ContactForm";
import { packagesArr } from "../../assets/packages/packagesArr.tsx";
import PackageCards from "../../components/PackageCards";
import { GoDotFill } from "react-icons/go";

export default function Home() {
  const [filter, setFilter] = useState<string>("academic");
  const [imageModalOpen, setImageModalOpen] = useState<boolean>(false);
  const [currentImage, setCurrentImage] = useState<string>("");
  const [currentAlt, setCurrentAlt] = useState<string>("");
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

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
      <div className="bg-realWhite relative">
        {imageModalOpen && <ImageModal image={currentImage} alt={currentAlt} toggle={closeModal} />}
        <section id="home">
          <Header />
          <div className="px-4 pt-60 pb-32 xl:max-w-screen-xl m-auto">
            <h1 className="font-libre-baskerville text-2xl md:text-6xl leading-relaxed text-center">
              I turn <em>complex functionality</em> into
              <b>
                {" "}
                user-friendly <span className="text-cta-primary2">web applications</span>
              </b>{" "}
              and impactful <em>digital experiences.</em>
            </h1>
          </div>
        </section>

        <section id="services" className="min-h-[36rem] md:pt-[120px]">
          <div className="m-auto">
            <ServicesAccordion toggleAccordion={toggleAccordion} openAccordion={openAccordion} />
          </div>
        </section>
        <section id="packages" className="min-h-[36rem]">
          <div className="m-auto">
            <div className="border-b">
              <h2 className="text-center px-4 xl:max-w-screen-xl m-auto md:w-[64rem] max-w-[64rem] font-nunito-sans text-xl uppercase font-bold mb-6">my packages:</h2>
            </div>
            <div className="backgroundImage pt-40">
              <div className="xl:max-w-screen-xl m-auto md:grid md:grid-cols-3 gap-10 pb-10">
                {packagesArr.map((packages) => {
                  return <PackageCards packages={packages} key={packages.id} toggleAccordion={toggleAccordion} />;
                })}
              </div>
              <div className="backgroundOpt2 text-black py-40">
                <div className="bg-realWhite p-6 font-libre-baskerville">
                  <h1 className="text-2xl md:text-4xl leading-relaxed text-center mb-8">Not sure where to start?</h1>{" "}
                  <h1 className="text-2xl md:text-2xl leading-relaxed text-center">
                    <a href="#contact" className="underline hover:text-black">
                      Contact me here
                    </a>
                    , and I’ll help you build the perfect package for your needs!
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="bg-realWhite min-h-[40rem] border-y">
          <div className="flex flex-col md:flex-row justify-between items-center p-6 md:p-16 gap-16">
            <div className="">
              <img className="object-cover rounded-full h-[16rem] min-w-[16rem] md:h-[30rem] md:min-w-[30rem] border" src={profileImage} alt="I’m Thea—a passionate front-end developer and web designer dedicated to crafting user-friendly websites and impactful digital experiences."></img>
            </div>
            <div>
              <h2 className="font-meow-script-regular text-6xl xl:text-8xl mb-8">I’m Thea</h2>
              <div className="font-nunito-sans text-lg leading-relaxed">
                <p className="mb-4">I’ve always loved the challenge of turning ideas into something tangible, and making complex systems practical and easy to use.</p>
                <p className="mb-4"> As a front-end developer and web designer, I spend my days crafting websites and applications that are not only functional but also enjoyable to use. My work is all about creating a balance between brand designs and smooth functionality, I find joy in solving puzzles and making things look just right.</p>
                <p> When I’m not coding or tweaking layouts, you’ll probably find me sketching new home improvement ideas, experimenting with new technology, or sipping coffee while daydreaming about my next big project.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="border-b">
          <div className="px-4 py-24 xl:max-w-screen-lg m-auto font-nunito-sans flex flex-col gap-8 ">
            <h1 className="text-2xl md:text-4xl leading-relaxed text-center font-libre-baskerville">Front-End Development for Startups & Bigger Projects</h1>
            <h2 className="text-center font-bold">Need a Front-End Developer for Your App, Startup, or Growing Team?</h2>
            <p className="px-8 text-center">I help startups and businesses bring their ideas to life with modern, responsive, and user-friendly front-end solutions. Whether you’re building a new product, scaling an existing app, or looking for a front-end developer to join your team, I’m ready to jump in and collaborate.</p>
            <p className="text-2xl leading-relaxed text-center font-libre-baskerville">Send me a message, and let’s discuss your needs, timeline, and vision.</p>
            <div className="w-[15rem] mx-auto mt-8 mb-10">
              <div className="relative group">
                <a href="#contact" className={`bg-cta-primary2 text-center block hover:scale-105  bg-opacity-100 z-[20] relative font-nunito-sans rounded-full text-xl text-white px-12 py-5 transition-all ease-in-out duration-300 group-hover:shadow-lg group-hover:bg-gradient-to-r from-blue-500 to-purple-600`}>
                  <p>let's talk</p>
                </a>
                <div className="rounded-full w-full h-full top-2 left-2 absolute bg-black z-[10] transition-all duration-300 ease-in-out group-hover:top-0 group-hover:left-0 group-hover:opacity-50"></div>
              </div>
            </div>
            <div className="p-8 rounded-lg bg-lazz">
              <h2 className="text-xl font-bold">What I Bring to the Table</h2>
              <ul className="flex flex-col gap-4 mt-6">
                <li>
                  <div className="flex gap-2 items-center">
                    <GoDotFill />
                    <h3 className="font-bold">Modern Front-End Development:</h3>
                  </div>
                  <p>Expertise in React, Node.js, and other modern frameworks for fast, scalable, and maintainable code.</p>
                </li>
                <li>
                  <div className="flex gap-2 items-center">
                    <GoDotFill />
                    <h3 className="font-bold">Collaborative Mindset:</h3>
                  </div>
                  <p className="italic">Experience from teamwork. Ready to work seamlessly with your team, designers, or back-end developers.</p>
                </li>
                <li>
                  <div className="flex gap-2 items-center">
                    <GoDotFill />
                    <h3 className="font-bold">Custom Solutions:</h3>
                  </div>
                  <p className="italic">Tailored front-end development for apps, SaaS platforms, and web applications.</p>
                </li>
                <li>
                  <div className="flex gap-2 items-center">
                    <GoDotFill />
                    <h3 className="font-bold">Design-to-Code:</h3>
                  </div>
                  <p className="italic">I follow the project from design to code. I can take wireframes, prototypes, or designs (Figma, Adobe XD) and turn them into a functional product.</p>
                </li>
              </ul>
            </div>
            <div className="p-8 rounded-lg bg-lazz2">
              <h2 className="text-xl font-bold">How We Can Work Together</h2>
              <p>I offer flexible collaboration options:</p>
              <ul className="flex flex-col gap-4 mt-6">
                <li>
                  <div className="flex gap-2 items-center">
                    <GoDotFill />
                    <h3 className="font-bold">Project-Based Work:</h3>
                  </div>
                  <p className="italic">For specific app or product needs.</p>
                </li>
                <li>
                  <div className="flex gap-2 items-center">
                    <GoDotFill />
                    <h3 className="font-bold">Part-Time or Long-Term Collaboration:</h3>
                  </div>
                  <p className="italic">Join your team as a dedicated front-end developer.</p>
                </li>
                <li>
                  <div className="flex gap-2 items-center">
                    <GoDotFill />
                    <h3 className="font-bold">Startup Support:</h3>
                  </div>
                  <p className="italic"> From MVP development to scaling your product, I’ll help you at every stage.</p>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section id="contact" className="min-h-screen p-4 backgroundImage">
          <div className="m-auto max-w-[60rem] ">
            <ContactForm />
          </div>
        </section>
        <section id="projects" className=" min-h-[36rem] border-y">
          <div className="m-auto">
            <h2 className="font-nunito-sans text-4xl text-realWhite uppercase text-center border-b border-black p-4 bg-cta-primary2">my projects</h2>
            <div className="flex w-full border-b">
              <button onClick={() => setFilter("academic")} className={`${buttonClass} ${filter === "academic" ? "bg-opacity-100 text-realWhite " : "bg-opacity-0 hover:bg-lazz"}`}>
                academic projects
              </button>
              <div className="w-[4px] bg-black"></div>
              <button onClick={() => setFilter("professional")} className={`${buttonClass} ${filter === "professional" ? "bg-opacity-100 text-realWhite " : "bg-opacity-0 hover:bg-lazz"}`}>
                professional projects
              </button>
              <div className="w-[4px] bg-black"></div>
              <button onClick={() => setFilter("personal")} className={`${buttonClass} ${filter === "personal" ? "bg-opacity-100 text-realWhite" : "bg-opacity-0 hover:bg-lazz"}`}>
                personal projects
              </button>
            </div>
            <div className={`grid p-4 md:p-16 grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 bg-lazz`}>
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
