import { Helmet, HelmetProvider } from "react-helmet-async";
import Header from "../../components/Header";
import { projectsArr } from "../../assets/projects/projectArr";
import ProjectCard from "../../components/ProjectCard";

export default function Home() {
  return (
    <HelmetProvider>
      <Helmet prioritizeSeoTags>
        <title>Thea | Front-End Developer & Web Designer Portfolio</title>
        <meta name="description" content="Hi, I’m Thea, a passionate front-end developer creating sleek, functional websites that stand out. Explore my portfolio to see how design and code come together seamlessly." /> //FILL INN
      </Helmet>
      <div className="bg-realWhite relative">
        <Header />
        <section className="px-4 py-40 xl:max-w-screen-xl m-auto">
          <h1 className="font-libre-baskerville text-6xl leading-relaxed text-center">
            I turn <em>complex functionality</em> into <b>user-friendly web applications</b> and impactful <em>digital experiences.</em>
          </h1>
        </section>
        <section className="pb-20 m-auto">
          <h2 className="font-libre-baskerville text-4xl uppercase text-center mb-10 border-b border-t p-4">my projects</h2>
          <div className="px-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {projectsArr.map((project) => (
              <ProjectCard project={project} key={project.id} />
            ))}
          </div>
        </section>
        <h1>Home</h1>
        <p>Welcome to the home page!</p>
      </div>
    </HelmetProvider>
  );
}
