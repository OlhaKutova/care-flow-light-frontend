import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#F4F8FB] border-b border-slate-200 relative z-50">
      <div className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between">
        <Link to="/" className="text-slate-900 font-bold text-2xl">
          CareFlow Lite
        </Link>

        <DesktopHeader />

        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden text-slate-900"
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
      </div>

      <MobileHeader isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </header>
  );
}
