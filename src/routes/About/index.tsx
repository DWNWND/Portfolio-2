import { Helmet, HelmetProvider } from "react-helmet-async";

export default function About() {
  return (
    <HelmetProvider>
      <Helmet prioritizeSeoTags>
        <title>About Me | Thea – Front-End Developer & Problem Solver</title>
        <meta name="description" content="I’m Thea, a front-end developer who loves crafting clean, user-friendly websites. With a knack for design and a dedication to details, I turn ideas into functional digital experiences." />
      </Helmet>
      <div>
        <h1>About</h1>
        <p>Welcome to the about page!</p>
      </div>
    </HelmetProvider>
  );
}
