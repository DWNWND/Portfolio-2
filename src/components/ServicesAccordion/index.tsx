import { IoIosArrowDown } from "react-icons/io";
import { servicesArr } from "../../assets/services/servicesArr.tsx";
import { CgIfDesign } from "react-icons/cg";
import { FaRegCopyright } from "react-icons/fa6";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { GoDotFill } from "react-icons/go";

// import { packagesArr } from "../../assets/packages/packagesArr.tsx";

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
  // const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  // const toggleAccordion = (id: number) => {
  //   setOpenAccordion(openAccordion === id ? null : id);
  // };

  return (
    <div className="px-4 md:px-0">
      <div className="flex flex-col gap-4 max-w-[64rem] m-auto mb-16">
        <div className="px-4 xl:max-w-screen-xl m-auto md:w-[64rem] max-w-[64rem]">
          <h2 className="font-nunito-sans text-xl uppercase font-bold mb-3 text-center">my services:</h2>
        </div>
        {servicesArr.map((service) => {
          return <ServiceAccordionBox service={service} isOpen={openAccordion === service.id} toggle={() => toggleAccordion(service.id)} key={service.id} />;
        })}
      </div>
    </div>
  );
}

function ServiceAccordionBox({ service, isOpen, toggle }: { service: Service; isOpen: boolean; toggle: () => void }) {
  const accordionBoxStyle = `${isOpen ? "bg-lazz2" : "bg-lazz"} font-nunito-sans text-black py-6 px-8 rounded-lg h-full border shadow-md`;

  return (
    <div className={accordionBoxStyle}>
      <div className="flex items-center gap-2 justify-between cursor-pointer" onClick={toggle}>
        <div className="flex items-center gap-8 text-2xl">
          {service.name.toLowerCase().includes("development") && <CgIfDesign />}
          {service.name.toLowerCase().includes("design") && <FaRegCopyright />}
          {service.name.toLowerCase().includes("launch") && <HiOutlineRocketLaunch />}
          <h2 className="text-2xl" id={JSON.stringify(service.id)}>
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
        <p className="text-sm px-[3.5rem]">All mentioned prices are subject to 25% VAT</p>
        <div className="rounded-lg text-lg px-[3.5rem] py-12">
          {service.cta && <p className="font-nunito-sans mb-8">{service.cta}</p>}
          <ul className="text-lg flex flex-col gap-4 font-nunito-sans">
            {service.includes.map((including) => {
              return (
                <li className="flex justify-between border-b pb-4" key={including.id}>
                  <div className="flex gap-4 items-center">
                    <GoDotFill />
                    <h3 className="font-bold">{including.name}</h3>
                    {including.info && <p className="italic">({including.info})</p>}
                  </div>
                  {including.price && <div className="font-bold text-black text-center rounded-lg">{including.price}</div>}
                </li>
              );
            })}
          </ul>

          {service.totalPrice && <p className="font-nunito-sans mt-8 font-bold">Total price: {service.totalPrice}</p>}
        </div>
        <div className="flex justify-center mb-4">
          {/* <a href="#packages" className="underline text-black hover:text-opacity-90 ">
            check my packages
          </a> */}
          <div className="relative group">
            <a href="#packages" className="tracking-wider block font-bold text-center hover:scale-105 bg-realWhite border border-black bg-opacity-100 z-[20] relative font-nunito-sans rounded-full text-2xl text-black hover:text-opacity-90 px-12 py-5 transition-all ease-in-out duration-300 group-hover:shadow-lg group-hover:bg-gradient-to-r from-blue-500 to-purple-600">
              see my packages
            </a>
            <div className="rounded-full w-full h-full top-2 left-2 absolute bg-black z-[10] transition-all duration-300 ease-in-out group-hover:top-0 group-hover:left-0 group-hover:opacity-50"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

// function PackagesAccordionBox({ packages, isOpen, toggle }: { packages: Packages; isOpen: boolean; toggle: () => void }) {
//   const accordionBoxStyle = "font-nunito-sans  bg-cta-primary2 text-black p-4 px-8 rounded-lg h-full border shadow-md";

//   return (
//     <div className={accordionBoxStyle}>
//       <div className="flex items-center gap-2 justify-between cursor-pointer" onClick={toggle}>
//         <div className="flex items-center gap-4">
//           <h2 className="font-semibold text-realWhite text-xl p-1 uppercase">{packages.title}</h2>
//         </div>
//         <div className="p-1 w-auto flex items-center justify-center cursor-pointer transition duration-300 ease-in-out">
//           <span className={`text-2xl ml-2 transition-transform duration-300 ease-in-out ${isOpen ? "rotate-180" : "rotate-0"}`}>
//             <IoIosArrowDown />
//           </span>
//         </div>
//       </div>
//       <div className={` transition-max-height duration-500 ease-in-out overflow-hidden ${isOpen ? "max-h-[1000px] opacity-100 mt-4 mb-4" : "max-h-0 opacity-0"}`}>
//         <div className=" bg-realWhite rounded-lg text-lg p-6 font-nunito-sans">
//           <p className="mb-4">{packages.description}</p>
//           <p>{packages.cta}</p>
//         </div>
//         <div className="text-lg my-10 flex flex-col gap-10 font-nunito-sans">
//           <div className="bg-black  py-4 self-center text-white text-2xl rounded-lg px-4 text-center p-2 w-[25rem]">
//             Total: <b className="">{packages.total}</b> ({packages.discount})
//           </div>
//           <h3 className="font-nunito-sans font-bold">Included in the price:</h3>
//           {packages.includes.map((included) => {
//             return (
//               <div className="mx-3 grid grid-cols-[7rem_auto_7rem] gap-8 space-between" key={included.id}>
//                 <h4 className="font-bold uppercase">{included.name}</h4>
//                 <p className="italic">{included.includes}</p>
//                 <div>
//                   <div className="bg-realWhite text-black text-center w-[7rem] rounded-lg px-4 p-2">{included.price}</div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         <div className="flex justify-center mb-10 pt-5">
//           <div className="relative group">
//             <button className="hover:scale-105 bg-cta-ctaPrimary2 bg-opacity-100 z-[20] relative font-nunito-sans rounded-full text-2xl text-white px-12 py-5 transition-all ease-in-out duration-300 group-hover:shadow-lg group-hover:bg-gradient-to-r from-blue-500 to-purple-600">lets get started</button>
//             <div className="rounded-full w-full h-full top-2 left-2 absolute bg-black z-[10] transition-all duration-300 ease-in-out group-hover:top-0 group-hover:left-0 group-hover:opacity-50"></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
