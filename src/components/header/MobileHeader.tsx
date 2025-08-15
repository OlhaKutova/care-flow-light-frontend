import { X } from "lucide-react";
import { Link } from "react-router-dom";
import NavItems from "./NavItems";
import ROUTES from "../../constants/routes";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function MobileHeader({ isOpen, onClose }: Props) {
  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-30 z-40 flex justify-end md:hidden transition-opacity duration-300 ${
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
      onClick={onClose}
    >
      <div
        className={`w-64 bg-[#F4F8FB] h-full shadow-lg p-6 flex flex-col space-y-6 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="self-end text-slate-900 mb-4"
          aria-label="Close menu"
        >
          <X size={24} />
        </button>

        <NavItems onItemClick={onClose} iconSize={20} />

        <Link
          to={ROUTES.login}
          className="bg-slate-900 text-white px-4 py-2 rounded hover:bg-slate-800 transition-colors"
          onClick={onClose}
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}
