import { FaCheckCircle } from "react-icons/fa";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { CgWebsite } from "react-icons/cg";
import { LuCross } from "react-icons/lu";

interface Packages {
  id: number;
  name: string;
  cta: string;
  price: string;
  discount: string;
  description: string;
  includes?: { id: number; linkedServiceId: number; name: string; info: string }[];
}

interface PackagesCardProps {
  packages: Packages;
  toggleAccordion: (id: number) => void;
}

export default function PackagesCard({ packages, toggleAccordion }: PackagesCardProps): JSX.Element {
  return (
    <div className={`${packages.id === 21 ? "md:scale-110 " : ""}  bg-realWhite border rounded-lg shadow-md pb-8 px-8 flex flex-col justify-between gap-6`}>
      <div>
        <div className="py-8 flex flex-col items-center justify-center gap-8">
          {packages.id === 21 && <HiOutlineRocketLaunch className="text-cta-primary2 text-5xl" />}
          {packages.id === 20 && <LuCross className="text-cta-primary22 text-5xl" />}
          {packages.id === 22 && <CgWebsite className="text-cta-primary22 text-5xl" />}
          <h2 className={`${packages.id === 21 ? "text-2xl md:text-3xl " : "text-xl md:text-3xl"} font-bold font-libre-baskerville  text-black text-center `}>{packages.name}</h2>
        </div>
        <div className="flex flex-col gap-8">
          <h3 className={`${packages.id === 21 ? "text-cta-primary2" : "text-cta-primary22"} font-bold text-lg text-center`}>{packages.cta}</h3>
          <p className="">{packages.description}</p>

          {packages.includes && (
            <div className={`${packages.id === 21 ? "bg-lazz2" : "bg-lazz"} text-black p-6 rounded-lg font-nunito-sans`}>
              <h3 className="font-bold uppercase mb-2">Includes:</h3>
              <ul className="flex flex-col gap-2 p-2">
                {packages.includes.map((including) => {
                  return (
                    <li key={including.id}>
                      {including.linkedServiceId ? (
                        <a href={`#services`} onClick={() => toggleAccordion(including.linkedServiceId)} className="flex gap-2 items-center">
                          <p className={`${including.id <= 214 && including.id >= 211 ? "text-cta-primary2" : "text-cta-primary22"}`}>
                            <FaCheckCircle />
                          </p>
                          <p>{including.name}</p>
                        </a>
                      ) : (
                        <div className="flex gap-2 items-center">
                          <p className={`${including.id <= 214 && including.id >= 211 ? "text-cta-primary2" : "text-cta-primary22"}`}>
                            <FaCheckCircle />
                          </p>
                          <p>{including.name}</p>
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="relative group">
        <a href="#contact" className={`${packages.id === 21 ? "bg-cta-primary2" : "bg-cta-primary22"} text-center block hover:scale-105  bg-opacity-100 z-[20] relative font-nunito-sans rounded-full text-xl tracking-wider font-bold text-white px-12 py-5 transition-all ease-in-out duration-300 group-hover:shadow-lg group-hover:bg-gradient-to-r from-blue-500 to-purple-600`}>
          <p>{packages.price}</p>
        </a>
        <div className="rounded-full w-full h-full top-2 left-2 absolute bg-black z-[10] transition-all duration-300 ease-in-out group-hover:top-0 group-hover:left-0 group-hover:opacity-50"></div>
      </div>
      <p className="text-sm italic text-center">All mentioned prices are subject to 25% VAT</p>
    </div>
  );
}
