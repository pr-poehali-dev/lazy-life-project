
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto py-4 px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Icon name="Coffee" className="text-[#9b87f5] h-8 w-8" />
          <h1 className="text-3xl font-bold text-[#403E43] font-playfair">
            Ленивый клуб
          </h1>
        </div>
        <nav className="hidden md:flex gap-6">
          <Link
            to="/"
            className="text-[#403E43] hover:text-[#9b87f5] transition-colors"
          >
            Главная
          </Link>
          <Link
            to="/tips"
            className="text-[#403E43] hover:text-[#9b87f5] transition-colors"
          >
            Советы по лени
          </Link>
          <Link
            to="/gallery"
            className="text-[#403E43] hover:text-[#9b87f5] transition-colors"
          >
            Ленивая галерея
          </Link>
          <Link
            to="/shop"
            className="text-[#403E43] hover:text-[#9b87f5] transition-colors"
          >
            Ленивый магазин
          </Link>
        </nav>
        <Button className="bg-[#9b87f5] hover:bg-[#7E69AB]">
          <Icon name="LogIn" className="mr-2 h-4 w-4" />
          Войти
        </Button>
      </div>
    </header>
  );
};

export default Header;
