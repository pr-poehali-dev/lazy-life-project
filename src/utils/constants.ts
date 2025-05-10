/**
 * Основные цвета сайта
 */
export const COLORS = {
  PRIMARY: "#9b87f5",
  PRIMARY_DARK: "#7E69AB",
  DARK: "#1A1F2C",
  TEXT: "#403E43",
  TEXT_SECONDARY: "#8A898C",
  BG_LIGHT: "#F6F6F7",
  BG_WHITE: "#ffffff",
  PURPLE_LIGHT: "#E5DEFF",
  PEACH: "#FDE1D3",
  GREEN_LIGHT: "#F2FCE2",
  BORDER_LIGHT: "#F1F1F1",
};

/**
 * Основные маршруты сайта
 */
export const ROUTES = {
  HOME: "/",
  TIPS: "/tips",
  GALLERY: "/gallery",
  SHOP: "/shop",
};

/**
 * Цитаты для раздела "Цитата дня"
 */
export const LAZY_QUOTES = [
  "Откладывание дел на завтра — форма искусства, в которой я мастер",
  "Лень — это философия экономии энергии",
  "Если ничего не делать, то ничего и не испортишь",
  "Работа никуда не денется, а вот диван может занять кто-то другой",
  "Не откладывай на завтра то, что можно отложить на послезавтра",
  "Ленивые люди успевают всё, потому что не берутся за ненужное",
  "В лени есть мудрость — она учит нас фильтровать важное от неважного",
  "Ленивый человек найдёт самый короткий путь к цели",
  "Отдых — это не роскошь, а необходимость для ума и тела",
  "Иногда лучшая продуктивность — это полное бездействие",
];

/**
 * Информация о ленивых животных
 */
export const LAZY_ANIMALS = [
  {
    id: 1,
    name: "Ленивец",
    description:
      "Мастер медленной жизни. Спит до 20 часов в сутки и перемещается со скоростью до 0,27 км/ч.",
    funFact:
      "Ленивцы настолько медлительны, что на их шерсти вырастают водоросли, которые служат камуфляжем.",
    image:
      "https://images.unsplash.com/photo-1576502733340-a490644c0961?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    color: "bg-[#F2FCE2]",
  },
  {
    id: 2,
    name: "Коала",
    description:
      "Спит до 22 часов в сутки и тратит остальное время на еду и переваривание эвкалипта.",
    funFact:
      "Мозг коалы усох в процессе эволюции, чтобы экономить энергию. Настоящий ленивец в мире энергосбережения!",
    image:
      "https://images.unsplash.com/photo-1551957402-e7fcfb6c3951?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    color: "bg-[#E5DEFF]",
  },
  {
    id: 3,
    name: "Панда",
    description:
      "Ест бамбук до 12 часов в день, а остальное время либо спит, либо просто отдыхает.",
    funFact:
      "Панды тратят так мало энергии, что могут позволить себе питаться только бамбуком — пищей с низкой питательной ценностью.",
    image:
      "https://images.unsplash.com/photo-1527118732049-c88155f2107c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    color: "bg-[#FDE1D3]",
  },
];

/**
 * Рекомендации сериалов по жанрам
 */
export const SERIES_BY_GENRE: Record<
  string,
  Array<{
    title: string;
    description: string;
    image: string;
    rating: number;
    year: number;
    episodes: number;
  }>
> = {
  Комедии: [
    {
      title: "Тед Лассо",
      description:
        "Добрый и наивный американский тренер по футболу приезжает в Англию тренировать футбольный клуб, несмотря на полное отсутствие опыта.",
      image:
        "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      rating: 8.8,
      year: 2020,
      episodes: 34,
    },
    {
      title: "Хороший доктор",
      description:
        "Молодой хирург с расстройством аутистического спектра и синдромом саванта поступает на работу в престижную больницу.",
      image:
        "https://images.unsplash.com/photo-1585842378054-9b4951711cb7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      rating: 8.2,
      year: 2017,
      episodes: 94,
    },
    {
      title: "Сообщество",
      description:
        "Эксцентричная группа студентов разного возраста образует необычное сообщество в местном колледже.",
      image:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      rating: 8.5,
      year: 2009,
      episodes: 110,
    },
  ],
  Драмы: [
    {
      title: "Корона",
      description:
        "Сериал о правлении королевы Елизаветы II и политических событиях, повлиявших на вторую половину XX века.",
      image:
        "https://images.unsplash.com/photo-1564167849578-e136cd83afbc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      rating: 8.7,
      year: 2016,
      episodes: 60,
    },
    {
      title: "Утреннее шоу",
      description:
        "Закулисный взгляд на жизнь людей, которые помогают Америке просыпаться, и сложности, с которыми они сталкиваются.",
      image:
        "https://images.unsplash.com/photo-1578022761797-b8636ac1773c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      rating: 8.3,
      year: 2019,
      episodes: 30,
    },
    {
      title: "Подземная железная дорога",
      description:
        "Альтернативная история о подземной железной дороге, которая помогает рабам в Америке XIX века обрести свободу.",
      image:
        "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      rating: 7.8,
      year: 2021,
      episodes: 10,
    },
  ],
  Фантастика: [
    {
      title: "Очень странные дела",
      description:
        "В маленьком городке пропадает мальчик, и его друзья, семья и местный шериф погружаются в сверхъестественную тайну.",
      image:
        "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      rating: 8.7,
      year: 2016,
      episodes: 34,
    },
    {
      title: "Мандалорец",
      description:
        "Одинокий охотник за головами путешествует по дальним рубежам галактики, вдалеке от власти Новой Республики.",
      image:
        "https://images.unsplash.com/photo-1601814933824-fd0b574dd592?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      rating: 8.7,
      year: 2019,
      episodes: 24,
    },
    {
      title: "Основание",
      description:
        "Адаптация знаменитой научно-фантастической саги Айзека Азимова о падении и возрождении галактической империи.",
      image:
        "https://images.unsplash.com/photo-1581822261290-991b38693d1b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      rating: 7.5,
      year: 2021,
      episodes: 20,
    },
  ],
};
