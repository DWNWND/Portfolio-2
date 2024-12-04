import { Helmet, HelmetProvider } from "react-helmet-async";
import Header from "../../components/Header";
import { projectsArr } from "../../assets/projects/projectArr";
import ProjectCard from "../../components/ProjectCard";
import ProjectSection from "../../components/ProjectSection";
import { useState } from "react";

export default function Home() {
  const [filter, setFilter] = useState<string>("academic");

  const personalProjectsArr = projectsArr.filter((project) => project.assosiation === "personal");
  const professionalProjectsArr = projectsArr.filter((project) => project.assosiation === "professional");
  const academicProjectsArr = projectsArr.filter((project) => project.assosiation === "academic");

  // const buttonClass = "w-full hover:scale-105 hover:bg-cta-ctaPrimary bg-cta-ctaPrimary hover:bg-opacity-70 font-nunito-sans text-xl border rounded-full px-10 py-4 transition ease-in-out duration-300 hover:shadow-md";
  const buttonClass = "w-full bg-black font-nunito-sans text-xl py-5 transition ease-in-out duration-300";

  return (
    <HelmetProvider>
      <Helmet prioritizeSeoTags>
        <title>Thea | Front-End Developer & Web Designer Portfolio</title>
        <meta name="description" content="Hi, I’m Thea, a passionate front-end developer creating sleek, functional websites that stand out. Explore my portfolio to see how design and code come together seamlessly." /> //FILL INN
      </Helmet>
      <div className="bg-realWhite relative">
        <Header />
        <section className="px-4 py-60 xl:max-w-screen-xl m-auto">
          <h1 className="font-libre-baskerville text-6xl leading-relaxed text-center">
            I turn <em>complex functionality</em> into{" "}
            <b>
              user-friendly <span className="text-cta-ctaPrimary2">web applications</span>
            </b>{" "}
            and impactful <em>digital experiences.</em>
          </h1>
        </section>
        <section className=" m-auto">
          <h2 className="font-libre-baskerville text-4xl uppercase text-center border-b border-t p-4 bg-cta-ctaPrimary2 bg-opacity-50">my projects</h2>
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
          <div className={`grid p-16 grid-cols-1 md:grid-cols-3 gap-8 bg-lazz`}>
            {filter === "academic" && academicProjectsArr.slice(0, 6).map((project) => <ProjectCard project={project} key={project.id} />)}
            {filter === "professional" && professionalProjectsArr.map((project) => <ProjectCard project={project} key={project.id} />)}
            {filter === "personal" && personalProjectsArr.map((project) => <ProjectCard project={project} key={project.id} />)}
          </div>
        </section>
        <div className="flex flex-col">
          {projectsArr.map((project) => (
            <ProjectSection project={project} key={project.id} />
          ))}
        </div>
        <h1>Home</h1>
        <p>Welcome to the home page!</p>
      </div>
    </HelmetProvider>
  );
}
