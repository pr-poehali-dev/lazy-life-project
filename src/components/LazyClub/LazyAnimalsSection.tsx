
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import Icon from "@/components/ui/icon";

const animals = [
  {
    id: 1,
    name: "Ленивец",
    description: "Мастер медленной жизни. Спит до 20 часов в сутки и перемещается со скоростью до 0,27 км/ч.",
    funFact: "Ленивцы настолько медлительны, что на их шерсти вырастают водоросли, которые служат камуфляжем.",
    image: "https://images.unsplash.com/photo-1576502733340-a490644c0961?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    color: "bg-[#F2FCE2]"
  },
  {
    id: 2,
    name: "Коала",
    description: "Спит до 22 часов в сутки и тратит остальное время на еду и переваривание эвкалипта.",
    funFact: "Мозг коалы усох в процессе эволюции, чтобы экономить энергию. Настоящий ленивец в мире энергосбережения!",
    image: "https://images.unsplash.com/photo-1551957402-e7fcfb6c3951?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    color: "bg-[#E5DEFF]"
  },
  {
    id: 3,
    name: "Панда",
    description: "Ест бамбук до 12 часов в день, а остальное время либо спит, либо просто отдыхает.",
    funFact: "Панды тратят так мало энергии, что могут позволить себе питаться только бамбуком — пищей с низкой питательной ценностью.",
    image: "https://images.unsplash.com/photo-1527118732049-c88155f2107c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    color: "bg-[#FDE1D3]"
  }
];

const EvolutionaryText = () => (
  <div className="max-w-3xl mx-auto mb-12 text-center">
    <h3 className="text-2xl md:text-3xl font-bold mb-6 font-playfair text-[#1A1F2C]">
      Лень — наше эволюционное наследие
    </h3>
    <p className="text-lg md:text-xl text-[#403E43] px-3">
      Лень запрограммирована в нас природой — это механизм сохранения энергии, 
      который позволял нашим предкам выживать в периоды нехватки ресурсов. 
      Мы не одиноки: в животном мире многие виды оптимизируют энергию, 
      делая только необходимый минимум.
    </p>
  </div>
);

const AnimalCard = ({ animal, onClick }: { animal: typeof animals[0], onClick: () => void }) => (
  <Card 
    className={`${animal.color} border-none shadow-md hover:shadow-lg transition-shadow cursor-pointer`}
    onClick={onClick}
  >
    <CardContent className="pt-6">
      <div className="aspect-[4/3] w-full rounded-md overflow-hidden mb-4">
        <img 
          src={animal.image} 
          alt={animal.name} 
          className="w-full h-full object-cover"
        />
      </div>
      <h4 className="text-xl font-bold mb-2 font-playfair text-[#1A1F2C]">{animal.name}</h4>
      <p className="text-sm text-[#403E43]">{animal.description}</p>
    </CardContent>
  </Card>
);

const AnimalFactModal = ({ 
  animal, 
  isOpen, 
  onClose 
}: { 
  animal: typeof animals[0] | null, 
  isOpen: boolean, 
  onClose: () => void 
}) => {
  if (!animal || !isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className={`${animal.color} max-w-md rounded-lg p-6 relative`}>
        <button 
          onClick={onClose}
          className="absolute top-2 right-2 text-[#403E43] hover:text-[#9b87f5]"
        >
          <Icon name="X" className="h-6 w-6" />
        </button>
        <h4 className="text-xl font-bold mb-4 font-playfair text-[#1A1F2C]">{animal.name}: Интересный факт</h4>
        <p className="text-[#403E43] mb-4">{animal.funFact}</p>
        <div className="aspect-[16/9] w-full rounded-md overflow-hidden">
          <img 
            src={animal.image} 
            alt={animal.name} 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

const LazyAnimalsSection = () => {
  const [selectedAnimal, setSelectedAnimal] = useState<typeof animals[0] | null>(null);
  
  const handleAnimalClick = (animal: typeof animals[0]) => {
    setSelectedAnimal(animal);
  };
  
  const handleCloseModal = () => {
    setSelectedAnimal(null);
  };
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <EvolutionaryText />
        
        <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center font-playfair text-[#1A1F2C]">
          Мастера лени в природе
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {animals.map((animal) => (
            <AnimalCard 
              key={animal.id} 
              animal={animal} 
              onClick={() => handleAnimalClick(animal)}
            />
          ))}
        </div>
        
        <AnimalFactModal 
          animal={selectedAnimal} 
          isOpen={!!selectedAnimal} 
          onClose={handleCloseModal}
        />
      </div>
    </section>
  );
};

export default LazyAnimalsSection;
