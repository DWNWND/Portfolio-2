import { IoIosClose } from "react-icons/io";

interface ImageModalProps {
  image: string;
  alt: string;
  toggle: () => void;
}

export function ImageModal({ image, alt, toggle }: ImageModalProps): JSX.Element {
  return (
    <div className="fixed inset-0 z-[105] flex items-center justify-center">
      <div className="absolute inset-0 bg-black bg-opacity-75 transition-opacity" onClick={toggle} aria-hidden="true"></div>
      <div className="relative bg-realWhite rounded-lg shadow-lg max-w-6xl w-full mx-auto p-6 lg:p-8 z-[110] transform transition-transform">
        <button className="absolute top-0 right-0 p-1 text-gray-500 hover:text-red-500 text-3xl focus:outline-none" onClick={toggle}>
          <IoIosClose />
        </button>
        <div className="w-full flex justify-center">
          <img src={image} alt={alt} className="max-w-full max-h-[75vh] object-contain  border rounded-lg" />
        </div>
        {alt && <p className="font-nunito-sans text-black text-center mt-4">{alt}</p>}
      </div>
    </div>
  );
}
