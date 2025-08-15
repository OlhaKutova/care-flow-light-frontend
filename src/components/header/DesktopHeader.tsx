import { Link } from "react-router-dom";
import NavItems from "./NavItems";

export default function DesktopHeader() {
  return (
    <div className="hidden md:flex items-center gap-6">
      <nav className="flex gap-6 items-center">
        <NavItems />
      </nav>
      <Link
        to="/login"
        className="bg-slate-900 text-white px-4 py-2 rounded hover:bg-slate-800 transition-colors"
      >
        Get Started
      </Link>
    </div>
  );
}
