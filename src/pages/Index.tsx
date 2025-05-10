
import { 
  Header,
  HeroSection,
  QuoteSection,
  BenefitsSection,
  CtaSection,
  Footer
} from "@/components/LazyClub";

/**
 * Главная страница сайта "Ленивый клуб"
 * 
 * Страница разделена на несколько основных секций:
 * - Шапка сайта (Header)
 * - Герой-секция с основным посланием (HeroSection)
 * - Секция с цитатами о лени (QuoteSection)
 * - Блок о преимуществах лени (BenefitsSection)
 * - Призыв к действию (CtaSection)
 * - Подвал сайта (Footer)
 */
const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#F6F6F7]">
      <Header />
      <HeroSection />
      <QuoteSection />
      <BenefitsSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default HomePage;
