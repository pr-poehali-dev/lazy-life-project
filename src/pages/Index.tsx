
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const HomePage = () => {
  const lazyQuotes = [
    "Откладывание дел на завтра — форма искусства, в которой я мастер",
    "Лень — это философия экономии энергии",
    "Если ничего не делать, то ничего и не испортишь",
    "Работа никуда не денется, а вот диван может занять кто-то другой",
    "Не откладывай на завтра то, что можно отложить на послезавтра"
  ];

  const randomQuote = lazyQuotes[Math.floor(Math.random() * lazyQuotes.length)];

  return (
    <div className="min-h-screen bg-[#F6F6F7]">
      {/* Шапка сайта */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto py-4 px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Coffee" className="text-[#9b87f5] h-8 w-8" />
            <h1 className="text-3xl font-bold text-[#403E43] font-playfair">Ленивый клуб</h1>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link to="/" className="text-[#403E43] hover:text-[#9b87f5] transition-colors">Главная</Link>
            <Link to="/tips" className="text-[#403E43] hover:text-[#9b87f5] transition-colors">Советы по лени</Link>
            <Link to="/gallery" className="text-[#403E43] hover:text-[#9b87f5] transition-colors">Ленивая галерея</Link>
            <Link to="/shop" className="text-[#403E43] hover:text-[#9b87f5] transition-colors">Ленивый магазин</Link>
          </nav>
          <Button className="bg-[#9b87f5] hover:bg-[#7E69AB]">
            <Icon name="LogIn" className="mr-2 h-4 w-4" />
            Войти
          </Button>
        </div>
      </header>

      {/* Герой-секция */}
      <section className="bg-gradient-to-b from-[#E5DEFF] to-[#F6F6F7] py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-6 font-playfair text-[#1A1F2C]">Искусство ничегонеделания</h2>
            <p className="text-xl mb-8 text-[#403E43]">
              Добро пожаловать в сообщество людей, которые поняли важность отдыха и искусство ленивости. 
              Здесь вы научитесь правильно лениться, избавитесь от чувства вины и найдёте единомышленников.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white px-8 py-6 text-lg">
                Начать ленится правильно
              </Button>
              <Button variant="outline" className="border-[#9b87f5] text-[#9b87f5] hover:bg-[#E5DEFF] px-8 py-6 text-lg">
                Посмотреть советы
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Цитата дня */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-semibold mb-6 text-[#403E43] font-playfair">Цитата дня:</h3>
            <blockquote className="text-3xl italic mb-6 text-[#9b87f5]">"{randomQuote}"</blockquote>
            <Button variant="ghost" className="text-[#7E69AB] hover:text-[#9b87f5]">
              <Icon name="RefreshCw" className="mr-2 h-4 w-4" />
              Другая цитата
            </Button>
          </div>
        </div>
      </section>

      {/* Секция преимуществ */}
      <section className="py-16 bg-[#F6F6F7]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center font-playfair text-[#1A1F2C]">Почему лениться — это хорошо?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-[#FDE1D3] border-none shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Icon name="Brain" className="text-[#9b87f5] h-8 w-8" />
                </div>
                <CardTitle className="text-2xl font-playfair">Восстановление мозга</CardTitle>
                <CardDescription className="text-[#403E43]">Дайте мозгу отдохнуть и подзарядиться.</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Научные исследования доказывают, что периоды ничегонеделания необходимы для восстановления когнитивных функций.</p>
              </CardContent>
            </Card>

            <Card className="bg-[#E5DEFF] border-none shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Icon name="Heart" className="text-[#9b87f5] h-8 w-8" />
                </div>
                <CardTitle className="text-2xl font-playfair">Снижение стресса</CardTitle>
                <CardDescription className="text-[#403E43]">Меньше дел — меньше стресса.</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Правильная лень помогает снизить уровень гормонов стресса и улучшить самочувствие.</p>
              </CardContent>
            </Card>

            <Card className="bg-[#F2FCE2] border-none shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Icon name="Lightbulb" className="text-[#9b87f5] h-8 w-8" />
                </div>
                <CardTitle className="text-2xl font-playfair">Креативность</CardTitle>
                <CardDescription className="text-[#403E43]">Самые гениальные идеи приходят в моменты безделья.</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Во время ленивого созерцания ваш мозг находит неожиданные решения и генерирует творческие идеи.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Призыв к действию */}
      <section className="py-16 bg-[#1A1F2C] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 font-playfair">Присоединяйся к клубу ленивцев</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Получи доступ к эксклюзивным советам по правильной лени, общайся с единомышленниками и участвуй в самых ленивых мероприятиях.
          </p>
          <Button className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white px-8 py-6 text-lg">
            <Icon name="UserPlus" className="mr-2 h-5 w-5" />
            Стать ленивцем
          </Button>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Coffee" className="text-[#9b87f5] h-6 w-6" />
                <h3 className="text-xl font-bold text-[#403E43] font-playfair">Ленивый клуб</h3>
              </div>
              <p className="text-[#8A898C] mb-4">Сообщество тех, кто не боится лениться.</p>
              <div className="flex gap-4">
                <a href="#" className="text-[#9b87f5] hover:text-[#7E69AB] transition-colors">
                  <Icon name="Instagram" className="h-5 w-5" />
                </a>
                <a href="#" className="text-[#9b87f5] hover:text-[#7E69AB] transition-colors">
                  <Icon name="Facebook" className="h-5 w-5" />
                </a>
                <a href="#" className="text-[#9b87f5] hover:text-[#7E69AB] transition-colors">
                  <Icon name="Twitter" className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-[#403E43]">Разделы</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="text-[#8A898C] hover:text-[#9b87f5] transition-colors">Главная</Link></li>
                <li><Link to="/tips" className="text-[#8A898C] hover:text-[#9b87f5] transition-colors">Советы по лени</Link></li>
                <li><Link to="/gallery" className="text-[#8A898C] hover:text-[#9b87f5] transition-colors">Ленивая галерея</Link></li>
                <li><Link to="/shop" className="text-[#8A898C] hover:text-[#9b87f5] transition-colors">Ленивый магазин</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-[#403E43]">Информация</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-[#8A898C] hover:text-[#9b87f5] transition-colors">О нас</a></li>
                <li><a href="#" className="text-[#8A898C] hover:text-[#9b87f5] transition-colors">Политика конфиденциальности</a></li>
                <li><a href="#" className="text-[#8A898C] hover:text-[#9b87f5] transition-colors">Условия использования</a></li>
                <li><a href="#" className="text-[#8A898C] hover:text-[#9b87f5] transition-colors">Контакты</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-[#403E43]">Подпишись на рассылку</h4>
              <p className="text-[#8A898C] mb-4">Получай советы по правильной лени и новости клуба</p>
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
            <p>© 2025 Ленивый клуб. Все права защищены, но нам слишком лень их защищать.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
