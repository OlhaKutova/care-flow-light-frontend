import { Link } from "react-router-dom";
import type { LucideIcon } from "lucide-react";
import { Home as HomeIcon, BookOpen, FlaskConical, Newspaper } from "lucide-react";
import ROUTES from "../../constants/routes";

type NavItem = {
  label: string;
  to: string;
  Icon: LucideIcon;
};

const NAV_ITEMS: ReadonlyArray<NavItem> = [
  { label: "Home", to: ROUTES.home, Icon: HomeIcon },
  { label: "Mission", to: ROUTES.mission, Icon: BookOpen },
  { label: "Research", to: ROUTES.research, Icon: FlaskConical },
  { label: "Blog", to: ROUTES.blog, Icon: Newspaper },
] as const;

type Props = {
  onItemClick?: () => void;
  iconSize?: number;
};

export default function NavItems({ onItemClick, iconSize = 18 }: Props) {
  return (
    <>
      {NAV_ITEMS.map(({ label, to, Icon }) => (
        <Link
          key={to}
          to={to}
          className="flex items-center gap-1 text-slate-700 hover:text-slate-900"
          onClick={onItemClick}
        >
          <Icon size={iconSize} aria-hidden />
          {label}
        </Link>
      ))}
    </>
  );
}
