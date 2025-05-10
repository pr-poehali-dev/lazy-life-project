
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const LAZY_QUOTES = [
  "Откладывание дел на завтра — форма искусства, в которой я мастер",
  "Лень — это философия экономии энергии",
  "Если ничего не делать, то ничего и не испортишь",
  "Работа никуда не денется, а вот диван может занять кто-то другой",
  "Не откладывай на завтра то, что можно отложить на послезавтра",
  "Ленивые люди успевают всё, потому что не берутся за ненужное",
  "В лени есть мудрость — она учит нас фильтровать важное от неважного",
  "Ленивый человек найдёт самый короткий путь к цели",
];

const QuoteSection = () => {
  const [quote, setQuote] = useState(() => 
    LAZY_QUOTES[Math.floor(Math.random() * LAZY_QUOTES.length)]
  );
  
  const handleRefreshQuote = () => {
    let newQuote;
    do {
      newQuote = LAZY_QUOTES[Math.floor(Math.random() * LAZY_QUOTES.length)];
    } while (newQuote === quote);
    setQuote(newQuote);
  };

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-6 text-[#403E43] font-playfair">
            Цитата дня:
          </h3>
          <blockquote className="text-xl md:text-3xl italic mb-6 text-[#9b87f5] px-3">
            "{quote}"
          </blockquote>
          <Button
            variant="ghost"
            className="text-[#7E69AB] hover:text-[#9b87f5]"
            onClick={handleRefreshQuote}
          >
            <Icon name="RefreshCw" className="mr-2 h-4 w-4" />
            Другая цитата
          </Button>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
