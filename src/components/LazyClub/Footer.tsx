
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Icon name="Coffee" className="text-[#9b87f5] h-6 w-6" />
              <h3 className="text-xl font-bold text-[#403E43] font-playfair">
                Ленивый клуб
              </h3>
            </div>
            <p className="text-[#8A898C] mb-4">
              Сообщество тех, кто не боится лениться.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-[#9b87f5] hover:text-[#7E69AB] transition-colors"
              >
                <Icon name="Instagram" className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-[#9b87f5] hover:text-[#7E69AB] transition-colors"
              >
                <Icon name="Facebook" className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-[#9b87f5] hover:text-[#7E69AB] transition-colors"
              >
                <Icon name="Twitter" className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-[#403E43]">Разделы</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-[#8A898C] hover:text-[#9b87f5] transition-colors"
                >
                  Главная
                </Link>
              </li>
              <li>
                <Link
                  to="/tips"
                  className="text-[#8A898C] hover:text-[#9b87f5] transition-colors"
                >
                  Советы по лени
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="text-[#8A898C] hover:text-[#9b87f5] transition-colors"
                >
                  Ленивая галерея
                </Link>
              </li>
              <li>
                <Link
                  to="/shop"
                  className="text-[#8A898C] hover:text-[#9b87f5] transition-colors"
                >
                  Ленивый магазин
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-[#403E43]">Информация</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-[#8A898C] hover:text-[#9b87f5] transition-colors"
                >
                  О нас
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#8A898C] hover:text-[#9b87f5] transition-colors"
                >
                  Политика конфиденциальности
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#8A898C] hover:text-[#9b87f5] transition-colors"
                >
                  Условия использования
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#8A898C] hover:text-[#9b87f5] transition-colors"
                >
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-[#403E43]">
              Подпишись на рассылку
            </h4>
            <p className="text-[#8A898C] mb-4">
              Получай советы по правильной лени и новости клуба
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Твой email"
                className="border border-[#C8C8C9] rounded px-4 py-2 flex-grow"
              />
              <Button className="bg-[#9b87f5] hover:bg-[#7E69AB]">
                <Icon name="Send" className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[#F1F1F1] text-center text-[#8A898C]">
          <p>
            © {new Date().getFullYear()} Ленивый клуб. Все права защищены, но нам слишком лень их
            защищать.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
