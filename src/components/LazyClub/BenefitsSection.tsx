
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

type BenefitCardProps = {
  icon: string;
  title: string;
  description: string;
  content: string;
  bgColor: string;
};

const BenefitCard = ({ icon, title, description, content, bgColor }: BenefitCardProps) => (
  <Card className={`${bgColor} border-none shadow-md hover:shadow-lg transition-shadow`}>
    <CardHeader>
      <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mb-4">
        <Icon name={icon} className="text-[#9b87f5] h-8 w-8" />
      </div>
      <CardTitle className="text-xl md:text-2xl font-playfair">
        {title}
      </CardTitle>
      <CardDescription className="text-[#403E43]">
        {description}
      </CardDescription>
    </CardHeader>
    <CardContent>
      <p className="text-sm md:text-base">
        {content}
      </p>
    </CardContent>
  </Card>
);

const BenefitsSection = () => {
  const benefits: BenefitCardProps[] = [
    {
      icon: "Brain", 
      title: "Восстановление мозга",
      description: "Дайте мозгу отдохнуть и подзарядиться.",
      content: "Научные исследования доказывают, что периоды ничегонеделания необходимы для восстановления когнитивных функций.",
      bgColor: "bg-[#FDE1D3]"
    },
    {
      icon: "Heart", 
      title: "Снижение стресса",
      description: "Меньше дел — меньше стресса.",
      content: "Правильная лень помогает снизить уровень гормонов стресса и улучшить самочувствие.",
      bgColor: "bg-[#E5DEFF]"
    },
    {
      icon: "Lightbulb", 
      title: "Креативность",
      description: "Самые гениальные идеи приходят в моменты безделья.",
      content: "Во время ленивого созерцания ваш мозг находит неожиданные решения и генерирует творческие идеи.",
      bgColor: "bg-[#F2FCE2]"
    }
  ];

  return (
    <section className="py-16 bg-[#F6F6F7]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-playfair text-[#1A1F2C]">
          Почему лениться — это хорошо?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
