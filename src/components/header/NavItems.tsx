import { Link } from "react-router-dom";
import { Home as HomeIcon, BookOpen, FlaskConical, Newspaper } from "lucide-react";
import ROUTES from "../../constants/routes";

type Props = {
  onItemClick?: () => void;
  iconSize?: number;
};

export default function NavItems({ onItemClick, iconSize = 18 }: Props) {
  return (
    <>
      <Link
        to={ROUTES.home}
        className="flex items-center gap-1 text-slate-700 hover:text-slate-900"
        onClick={onItemClick}
      >
        <HomeIcon size={iconSize} />
        Home
      </Link>
      <Link
        to={ROUTES.mission}
        className="flex items-center gap-1 text-slate-700 hover:text-slate-900"
        onClick={onItemClick}
      >
        <BookOpen size={iconSize} />
        Mission
      </Link>
      <Link
        to={ROUTES.research}
        className="flex items-center gap-1 text-slate-700 hover:text-slate-900"
        onClick={onItemClick}
      >
        <FlaskConical size={iconSize} />
        Research
      </Link>
      <Link
        to={ROUTES.blog}
        className="flex items-center gap-1 text-slate-700 hover:text-slate-900"
        onClick={onItemClick}
      >
        <Newspaper size={iconSize} />
        Blog
      </Link>
    </>
  );
}
