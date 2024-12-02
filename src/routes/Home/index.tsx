import { Helmet, HelmetProvider } from "react-helmet-async";

export default function Home() {
  return (
    <HelmetProvider>
      <Helmet prioritizeSeoTags>
        <title>Thea | Front-End Developer & Web Designer Portfolio</title>
        <meta name="description" content="Hi, I’m Thea, a passionate front-end developer creating sleek, functional websites that stand out. Explore my portfolio to see how design and code come together seamlessly." /> //FILL INN
      </Helmet>
      <div>
        <h1>Home</h1>
        <p>Welcome to the home page!</p>
      </div>
    </HelmetProvider>
  );
}
