import { Helmet, HelmetProvider } from "react-helmet-async";

export default function Services() {
  return (
    <HelmetProvider>
      <Helmet prioritizeSeoTags>
        <title>Web Development Services | Thea – Responsive, Modern Websites</title>
        <meta name="description" content="Need a front-end developer who can bring your vision to life? I specialize in responsive design, JavaScript magic, and creating websites that look amazing on every screen. Let’s build something great." />
      </Helmet>
      <div>
        <h1>Services</h1>
        <p>Welcome to the services page!</p>
      </div>
    </HelmetProvider>
  );
}
