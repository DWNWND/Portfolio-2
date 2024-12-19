import { IoIosArrowDown } from "react-icons/io";
import { servicesArr } from "../../assets/services/servicesArr";
import { CgIfDesign } from "react-icons/cg";
import { FaRegCopyright } from "react-icons/fa6";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { GoDotFill } from "react-icons/go";
import { BiGroup } from "react-icons/bi";

interface Service {
  id: number;
  name: string;
  cta: string;
  totalPrice: string;
  includes: { id: number; name: string; info: string; price?: string }[];
  info: string;
}

interface ServicesAccordionProps {
  toggleAccordion: (id: number) => void;
  openAccordion: number | null;
}

export default function ServicesAccordion({ toggleAccordion, openAccordion }: ServicesAccordionProps): JSX.Element {
  const isOpen = openAccordion === 40;
  const accordionBoxStyle = `${isOpen ? "bg-background" : "bg-beige"} font-nunito-sans text-black py-6 px-6 rounded-lg h-full border shadow-md`;

  return (
    <div className="px-4 md:px-0">
      <div className="flex flex-col gap-4 max-w-[64rem] m-auto mb-16">
        <div className="px-4 xl:max-w-screen-xl m-auto md:w-[64rem] max-w-[64rem]">
          <h2 className="font-nunito-sans text-xl uppercase font-bold mb-4 md:mb-6 text-center">my services:</h2>
        </div>
        {servicesArr.map((service) => {
          return <ServiceAccordionBox service={service} isOpen={openAccordion === service.id} toggle={() => toggleAccordion(service.id)} key={service.id} />;
        })}
        <div className={accordionBoxStyle}>
          <div className="flex items-center gap-2 justify-between cursor-pointer" onClick={() => toggleAccordion(40)}>
            <div className="flex items-center gap-8">
              <BiGroup className="text-6xl md:text-2xl"/>
              <h2 className="text-lg md:text-2xl" id="40">
                Front-End Development for Startups & Bigger Projects
              </h2>
            </div>
            <div className="p-1 w-auto flex items-center justify-center cursor-pointer transition duration-300 ease-in-out">
              <span className={`text-2xl ml-2 transition-transform duration-300 ease-in-out ${isOpen ? "rotate-180" : "rotate-0"}`}>
                <IoIosArrowDown />
              </span>
            </div>
          </div>
          <div className={`md:px-[2.5rem] flex flex-col gap-8 transition-max-height duration-500 ease-in-out overflow-hidden ${isOpen ? "max-h-[2500px] opacity-100 mt-4 mb-4 pt-12" : "max-h-0 opacity-0"}`}>
            <h2 className="md:text-center text-xl font-bold">Need a Front-End Developer for Your App, Startup, or Growing Team?</h2>
            <p className=" md:text-center text-lg">I help startups and businesses bring their ideas to life with modern, responsive, and user-friendly front-end solutions. Whether you’re building a new product, scaling an existing app, or looking for a front-end developer to join your team, I’m ready to jump in and collaborate.</p>
            <p className="text-2xl leading-relaxed text-center font-libre-baskerville">Send me a message, and let’s discuss your needs, timeline, and vision.</p>
            <div className="w-[15rem] mx-auto md:mt-8 mb-5">
              <div className="relative group">
                <a href="#contact" className={`bg-cta-primaryBright text-center block hover:scale-105  bg-opacity-100 z-[20] relative font-nunito-sans rounded-full text-lg md:text-2xl text-white px-12 py-5 transition-all ease-in-out duration-300 group-hover:shadow-lg group-hover:bg-gradient-to-r from-blue-500 to-purple-600`}>
                  <p className="tracking-wider font-bold">let's talk</p>
                </a>
                <div className="rounded-full w-full h-full top-2 left-2 absolute bg-black z-[10] transition-all duration-300 ease-in-out group-hover:top-0 group-hover:left-0 group-hover:opacity-50"></div>
              </div>
            </div>
            <div className="p-6 md:p-8 rounded-lg bg-white">
              <h2 className="text-xl font-bold">What I Bring to the Table</h2>
              <ul className="flex flex-col gap-6 mt-6 md:gap-4 text-lg">
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
            <div className="p-8 rounded-lg bg-white mb-4">
              <h2 className="text-xl font-bold">How We Can Work Together</h2>
              <p>I offer flexible collaboration options:</p>
              <ul className="flex flex-col gap-4 mt-6 text-lg">
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
        </div>
      </div>
    </div>
  );
}

function ServiceAccordionBox({ service, isOpen, toggle }: { service: Service; isOpen: boolean; toggle: () => void }) {
  const accordionBoxStyle = `${isOpen ? "bg-lightVibrantPurple" : "bg-lightPurple"} font-nunito-sans text-black py-6 px-8 rounded-lg h-full border shadow-md`;

  return (
    <div className={accordionBoxStyle}>
      <div className="flex items-center gap-2 justify-between cursor-pointer" onClick={toggle}>
        <div className="flex items-center gap-8 text-2xl">
          {service.name.toLowerCase().includes("development") && <CgIfDesign />}
          {service.name.toLowerCase().includes("design") && <FaRegCopyright />}
          {service.name.toLowerCase().includes("launch") && <HiOutlineRocketLaunch />}
          <h2 className="text-lg md:text-2xl" id={JSON.stringify(service.id)}>
            {service.name}
          </h2>
        </div>
        <div className="p-1 w-auto flex items-center justify-center cursor-pointer transition duration-300 ease-in-out">
          <span className={`text-2xl ml-2 transition-transform duration-300 ease-in-out ${isOpen ? "rotate-180" : "rotate-0"}`}>
            <IoIosArrowDown />
          </span>
        </div>
      </div>
      <div className={` transition-max-height duration-500 ease-in-out overflow-hidden ${isOpen ? "max-h-[1000px] opacity-100 mt-4 mb-4" : "max-h-0 opacity-0"}`}>
        <p className="text-sm md:px-[3.5rem]">All mentioned prices are subject to 25% VAT</p>
        <div className="rounded-lg text-lg md:px-[3.5rem] py-12">
          {service.cta && <p className="font-nunito-sans mb-8">{service.cta}</p>}
          <ul className="text-lg flex flex-col gap-4 font-nunito-sans">
            {service.includes.map((including) => {
              return (
                <li className="flex flex-col  md:flex-row justify-between gap-4 border-b pb-6 md:pb-4" key={including.id}>
                  <div className="flex flex-col">
                    <div className="flex gap-4 items-center">
                      <GoDotFill />
                      <h3 className="font-bold ">{including.name}</h3>
                    </div>
                    {including.info && <p className="italic ml-8">({including.info})</p>}
                  </div>
                  {including.price && <div className="font-bold text-black md:text-center rounded-lg ml-8">{including.price}</div>}
                </li>
              );
            })}
          </ul>

          {service.totalPrice && <p className="font-nunito-sans mt-8 font-bold">Total price: {service.totalPrice}</p>}
        </div>
        <div className="flex justify-center mb-4">
          <div className="relative group">
            <a href="#packages" className="tracking-wider block font-bold text-center hover:scale-105 bg-white border border-black bg-opacity-100 z-[20] relative font-nunito-sans rounded-full text-lg md:text-2xl text-black hover:text-opacity-90 px-12 py-5 transition-all ease-in-out duration-300 group-hover:shadow-lg group-hover:bg-gradient-to-r from-blue-500 to-purple-600">
              see my packages
            </a>
            <div className="rounded-full w-full h-full top-2 left-2 absolute bg-black z-[10] transition-all duration-300 ease-in-out group-hover:top-0 group-hover:left-0 group-hover:opacity-50"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
