
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const CtaSection = () => {
  return (
    <section className="py-16 bg-[#1A1F2C] text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 font-playfair">
          Присоединяйся к клубу ленивцев
        </h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto px-3">
          Получи доступ к эксклюзивным советам по правильной лени, общайся с
          единомышленниками и участвуй в самых ленивых мероприятиях.
        </p>
        <Button className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white px-6 py-5 text-base md:px-8 md:py-6 md:text-lg whitespace-normal">
          <Icon name="UserPlus" className="mr-2 h-5 w-5" />
          Стать ленивцем
        </Button>
      </div>
    </section>
  );
};

export default CtaSection;
