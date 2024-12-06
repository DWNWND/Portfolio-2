import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { servicesArr } from "../../assets/services/servicesArr.tsx";
import { CgWebsite } from "react-icons/cg";
import { CgIfDesign } from "react-icons/cg";
import { FaRegCopyright } from "react-icons/fa6";
import { packagesArr } from "../../assets/packages/packagesArr.tsx";

interface Service {
  id: number;
  title: string;
  description: string;
  cta: string;
  products: { name: string; includes: string; price: string; id: number }[];
}

interface Packages {
  id: number;
  title: string;
  description: string;
  cta: string;
  total: string;
  discount: string;
  includes: { name: string; includes: string; price: string; id: number }[];
  notIncluded: { name: string; includes: string; id: number }[];
}

export default function ServicesAccordion(): JSX.Element {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const toggleAccordion = (id: number) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <div>
      <div className="flex flex-col gap-4 max-w-[64rem] m-auto mb-16">
        <div className="px-4 xl:max-w-screen-xl m-auto w-[64rem] max-w-[64rem]">
          <h2 className="font-nunito-sans text-xl uppercase font-bold mb-3">my services:</h2>
        </div>
        {servicesArr.map((service) => {
          return <ServiceAccordionBox service={service} isOpen={openAccordion === service.id} toggle={() => toggleAccordion(service.id)} key={service.id} />;
        })}
      </div>
      <div className="flex flex-col gap-4 max-w-[64rem] m-auto mb-16">
        <div className="px-4 xl:max-w-screen-xl m-auto w-[64rem] max-w-[64rem]">
          <h2 className="font-nunito-sans text-xl uppercase font-bold mb-3">packages:</h2>
        </div>
        {packagesArr.map((packages) => {
          return <PackagesAccordionBox packages={packages} isOpen={openAccordion === packages.id} toggle={() => toggleAccordion(packages.id)} key={packages.id} />;
        })}
      </div>
    </div>
  );
}

function ServiceAccordionBox({ service, isOpen, toggle }: { service: Service; isOpen: boolean; toggle: () => void }) {
  const accordionBoxStyle = "font-nunito-sans bg-lazz text-black p-4 px-8 rounded-lg h-full border shadow-md";

  return (
    <div className={accordionBoxStyle}>
      <div className="flex items-center gap-2 justify-between cursor-pointer" onClick={toggle}>
        <div className="flex items-center gap-4 text-2xl">
          {service.title === "websites" && <CgWebsite />}
          {service.title === "ui/ux design" && <CgIfDesign />}
          {service.title === "branding" && <FaRegCopyright />}
          <h2 className="font-semibold text-xl p-1">{service.title}</h2>
        </div>
        <div className="p-1 w-auto flex items-center justify-center cursor-pointer transition duration-300 ease-in-out">
          <span className={`text-2xl ml-2 transition-transform duration-300 ease-in-out ${isOpen ? "rotate-180" : "rotate-0"}`}>
            <IoIosArrowDown />
          </span>
        </div>
      </div>
      <div className={` transition-max-height duration-500 ease-in-out overflow-hidden ${isOpen ? "max-h-[1000px] opacity-100 mt-4 mb-4" : "max-h-0 opacity-0"}`}>
        <div className=" bg-realWhite  rounded-lg text-lg p-6 font-nunito-sans">
          <p className="mb-4">{service.description}</p>
          <p>{service.cta}</p>
        </div>
        <div className="text-lg mx-3 my-10 flex flex-col gap-10 font-nunito-sans">
          {service.products.map((product) => {
            return (
              <div className="mx-3 grid grid-cols-[9rem_auto_11rem] gap-8 space-between" key={product.id}>
                <h3 className="font-bold">{product.name}</h3>
                <p>
                  Includes: <span className="italic">{product.includes}</span>
                </p>
                <div>
                  <div className="text-center bg-black text-white rounded-lg px-4 p-2">{product.price}</div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center mb-5">
          <button className="m-auto border bg-realWhite bg-opacity-100 hover:bg-opacity-80 font-nunito-sans rounded-full w-full text-xl text-black px-8 py-4 transition ease-in-out duration-300 shadow-md">lets get started</button>
        </div>
      </div>
    </div>
  );
}

function PackagesAccordionBox({ packages, isOpen, toggle }: { packages: Packages; isOpen: boolean; toggle: () => void }) {
  const accordionBoxStyle = "font-nunito-sans  bg-bazaar text-black p-4 px-8 rounded-lg h-full border shadow-md";

  return (
    <div className={accordionBoxStyle}>
      <div className="flex items-center gap-2 justify-between cursor-pointer" onClick={toggle}>
        <div className="flex items-center gap-4">
          <h2 className="font-semibold text-xl p-1 uppercase">{packages.title}</h2>
        </div>
        <div className="p-1 w-auto flex items-center justify-center cursor-pointer transition duration-300 ease-in-out">
          <span className={`text-2xl ml-2 transition-transform duration-300 ease-in-out ${isOpen ? "rotate-180" : "rotate-0"}`}>
            <IoIosArrowDown />
          </span>
        </div>
      </div>
      <div className={` transition-max-height duration-500 ease-in-out overflow-hidden ${isOpen ? "max-h-[1000px] opacity-100 mt-4 mb-4" : "max-h-0 opacity-0"}`}>
        <div className=" bg-realWhite rounded-lg text-lg p-6 font-nunito-sans">
          <p className="mb-4">{packages.description}</p>
          <p>{packages.cta}</p>
        </div>
        <div className="text-lg my-10 flex flex-col gap-10 font-nunito-sans">
          <div className="bg-black  py-4 self-center text-white text-2xl rounded-lg px-4 text-center p-2 w-[25rem]">
            Total: <b className="">{packages.total}</b> ({packages.discount})
          </div>
          <h3 className="font-nunito-sans font-bold">Included in the price:</h3>
          {packages.includes.map((included) => {
            return (
              <div className="mx-3 grid grid-cols-[7rem_auto_7rem] gap-8 space-between" key={included.id}>
                <h4 className="font-bold uppercase">{included.name}</h4>
                <p className="italic">{included.includes}</p>
                <div>
                  <div className="bg-realWhite text-black text-center w-[7rem] rounded-lg px-4 p-2">{included.price}</div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center mb-10 pt-5">
          <div className="relative group">
            <button className="hover:scale-105 bg-cta-ctaPrimary2 bg-opacity-100 z-[20] relative font-nunito-sans rounded-full text-2xl text-white px-12 py-5 transition-all ease-in-out duration-300 group-hover:shadow-lg group-hover:bg-gradient-to-r from-blue-500 to-purple-600">lets get started</button>
            <div className="rounded-full w-full h-full top-2 left-2 absolute bg-black z-[10] transition-all duration-300 ease-in-out group-hover:top-0 group-hover:left-0 group-hover:opacity-50"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
