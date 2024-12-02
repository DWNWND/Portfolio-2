import { Helmet, HelmetProvider } from "react-helmet-async";

export default function Contact() {
  return (
    <HelmetProvider>
      <Helmet prioritizeSeoTags>
        <title>Contact Thea | Let’s Build Your Next Project Together</title>
        <meta name="description" content="Let’s talk! Whether you’re planning your next project or just want to chat about web development, I’d love to hear from you. Reach out and let’s create something awesome together." />
      </Helmet>
      <div>
        <h1>Contact</h1>
        <p>Welcome to the contact page!</p>
      </div>
    </HelmetProvider>
  );
}
