import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { servicesArr } from "../../assets/services/servicesArr.tsx";

interface Service {
  id: number;
  title: string;
  description: string;
  cta: string;
  products: { name: string; includes: string; price: string }[];
}

export default function ServicesAccordion(): JSX.Element {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const toggleAccordion = (id: number) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <div className="flex flex-col gap-2 max-w-[64rem] m-auto mb-16">
      {servicesArr.map((service) => {
        return <AccordionBox service={service} isOpen={openAccordion === service.id} toggle={() => toggleAccordion(service.id)} key={service.id} />;
      })}
    </div>
  );
}

function AccordionBox({ service, isOpen, toggle }: { service: Service; isOpen: boolean; toggle: () => void }) {
  const accordionBoxStyle = "font-nunito-sans bg-lazz text-black p-4 px-8 rounded-lg h-full border shadow-md";

  return (
    <div className={accordionBoxStyle}>
      <h2 className="flex items-center gap-2 justify-between cursor-pointer" onClick={toggle}>
        <span className="font-semibold text-xl p-1">{service.title}</span>
        <div className="p-1 w-auto flex items-center justify-center cursor-pointer transition duration-300 ease-in-out">
          <span className={`text-2xl ml-2 transition-transform duration-300 ease-in-out ${isOpen ? "rotate-180" : "rotate-0"}`}>
            <IoIosArrowDown />
          </span>
        </div>
      </h2>
      <div className={` transition-max-height duration-500 ease-in-out overflow-hidden ${isOpen ? "max-h-[1000px] opacity-100 mt-4 mb-4" : "max-h-0 opacity-0"}`}>
        <div className=" bg-realWhite  rounded-lg text-lg p-6 font-nunito-sans">
          <p className="mb-4">{service.description}</p>
          <p>{service.cta}</p>
        </div>
        <div className="text-lg my-10 flex flex-col gap-10 font-nunito-sans">
          {service.products.map((product) => {
            return (
              <div className="flex flex-col gap-2 items-center">
                <h3 className="font-bold">{product.name}</h3>
                <p>
                  Includes: <span className="italic">{product.includes}</span>
                </p>
                <div className="bg-black text-white rounded-lg px-4 text-center p-2">{product.price}</div>
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
