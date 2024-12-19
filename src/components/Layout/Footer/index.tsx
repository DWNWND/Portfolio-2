import { BsLinkedin, BsInstagram } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="p-4 gap-16 py-12 md:px-20 md:p-10 md:pb-16 grid md:grid-cols-3 border-t">
      <div className="flex flex-col font-nunito-sans items-center md:items-start justify-center">
        <h3 className="text-xl font-bold uppercase text-nowrap">Inquiries can be sent to:</h3>
        <p>thea@devthea.com</p>
      </div>
      <div className="flex gap-16 md:gap-2 flex-col items-center justify-center">
        <div className="font-meow-script-regular text-7xl md:text-[7rem]">devThea</div>
        <div className="text-center">
          <p>&copy; 2024 devThea</p>
          <p>org.nr.0000.000.0000</p>
        </div>
      </div>
      <div className="flex gap-8 text-4xl justify-center md:justify-end items-center">
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
    </footer>
  );
}
