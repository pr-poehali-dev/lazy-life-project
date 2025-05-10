
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { SERIES_BY_GENRE } from "@/utils/constants";

/**
 * Компонент для отображения карточки сериала
 */
const SeriesCard = ({ 
  title, 
  description, 
  image, 
  rating, 
  year, 
  episodes 
}: { 
  title: string;
  description: string;
  image: string;
  rating: number;
  year: number;
  episodes: number;
}) => (
  <Card className="h-full flex flex-col hover:shadow-md transition-shadow">
    <div className="aspect-video w-full overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover"
      />
    </div>
    <CardHeader>
      <div className="flex justify-between items-center mb-2">
        <CardTitle className="text-xl font-playfair">{title}</CardTitle>
        <div className="flex items-center text-yellow-500">
          <Icon name="Star" className="h-4 w-4" />
          <span className="ml-1 text-sm font-medium">{rating}</span>
        </div>
      </div>
      <div className="flex gap-3 text-xs text-[#8A898C]">
        <span>{year}</span>
        <span>{episodes} серий</span>
      </div>
      <CardDescription className="line-clamp-3 mt-2">{description}</CardDescription>
    </CardHeader>
  </Card>
);

/**
 * Секция с рекомендациями сериалов для ленивого просмотра
 */
const SeriesRecommendationSection = () => {
  const [currentDate] = useState(new Date().toLocaleDateString('ru-RU', { 
    day: 'numeric', 
    month: 'long' 
  }));
  
  // Получаем все жанры из константы
  const genres = Object.keys(SERIES_BY_GENRE);
  
  return (
    <section className="py-16 bg-[#F6F6F7]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair text-[#1A1F2C]">
            Что посмотреть ленивцам сегодня?
          </h2>
          <p className="text-lg text-[#403E43]">
            Наши рекомендации сериалов на {currentDate} для идеального ленивого дня
          </p>
        </div>
        
        <Tabs defaultValue={genres[0]} className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-white/50">
              {genres.map((genre) => (
                <TabsTrigger 
                  key={genre} 
                  value={genre}
                  className="px-4 py-2 data-[state=active]:bg-[#9b87f5] data-[state=active]:text-white"
                >
                  {genre}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          
          {genres.map((genre) => (
            <TabsContent key={genre} value={genre} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {SERIES_BY_GENRE[genre].map((series, index) => (
                  <SeriesCard key={index} {...series} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
        
        <div className="flex justify-center mt-10">
          <Button className="bg-[#9b87f5] hover:bg-[#7E69AB]">
            <Icon name="List" className="mr-2 h-4 w-4" />
            Показать больше сериалов
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SeriesRecommendationSection;
