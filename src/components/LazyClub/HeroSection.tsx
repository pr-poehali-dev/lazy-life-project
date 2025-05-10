
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-[#E5DEFF] to-[#F6F6F7] py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-playfair text-[#1A1F2C]">
            Искусство ничегонеделания
          </h2>
          <p className="text-lg md:text-xl mb-8 text-[#403E43] px-3">
            Добро пожаловать в сообщество людей, которые поняли важность
            отдыха и искусство ленивости. Здесь вы научитесь правильно
            лениться, избавитесь от чувства вины и найдёте единомышленников.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white px-6 py-5 text-base md:px-8 md:py-6 md:text-lg whitespace-normal">
              Начать лениться правильно
            </Button>
            <Button
              variant="outline"
              className="border-[#9b87f5] text-[#9b87f5] hover:bg-[#E5DEFF] px-6 py-5 text-base md:px-8 md:py-6 md:text-lg whitespace-normal"
            >
              Посмотреть советы
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
