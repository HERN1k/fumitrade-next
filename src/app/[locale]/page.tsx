import MainPage from "@/components/main/MainPage";
import { Metadata } from "next";

const ukMetadata: Metadata = {
  title: "Fumitrade | Головна",
  description: "Професійна дезінсекція без компромісів! Fumitrade – понад 30 років досвіду у сфері дезінсекції, захисту агропродукції та фумігації зернових і олійних культур.",
  keywords: "Fumitrade, Фумітрейд, Фумитрейд, fumitrade.com.ua, fumitrade.ua, fumitrade.ua@gmail.com, дезінсекція, фумігація, знищення шкідників, дезинсекция, фумигация, уничтожение вредителей, disinsection, fumigation, pest control, Головна, Головна сторінка",
  robots: { index: true, follow: true },
  icons: { icon: "/static/general/ico.webp" },
  openGraph: {
    type: "website",
    url: "https://fumitrade.com.ua",
    siteName: "Fumitrade",
    title: "Fumitrade | Головна",
    description: "Професійна дезінсекція без компромісів! Fumitrade – понад 30 років досвіду у сфері дезінсекції, захисту агропродукції та фумігації зернових і олійних культур.",
    images: ["https://fumitrade.com.ua/static/general/ico.webp"],
  },
};

const enMetadata: Metadata = {
  title: "Fumitrade | Home",
  description: "Professional disinfestation without compromise! Fumitrade – over 30 years of experience in the field of disinfestation, protection of agricultural products, and fumigation of grain and oilseed crops.",
  keywords: "Fumitrade, Фумітрейд, Фумитрейд, fumitrade.com.ua, fumitrade.ua, fumitrade.ua@gmail.com, дезінсекція, фумігація, знищення шкідників, дезинсекция, фумигация, уничтожение вредителей, disinsection, fumigation, pest control, Головна, Головна сторінка",
  robots: { index: true, follow: true },
  icons: { icon: "/static/general/ico.webp" },
  openGraph: {
    type: "website",
    url: "https://fumitrade.com.ua",
    siteName: "Fumitrade",
    title: "Fumitrade | Home",
    description: "Professional disinfestation without compromise! Fumitrade – over 30 years of experience in the field of disinfestation, protection of agricultural products, and fumigation of grain and oilseed crops.",
    images: ["https://fumitrade.com.ua/static/general/ico.webp"],
  },
};

const ruMetadata: Metadata = {
  title: "Fumitrade | Главная",
  description: "Профессиональная дезинсекция без компромиссов! Fumitrade – более 30 лет опыта в области дезинсекции, защиты агропродукции и фумигации зерновых и масличных культур.",
  keywords: "Fumitrade, Фумітрейд, Фумитрейд, fumitrade.com.ua, fumitrade.ua, fumitrade.ua@gmail.com, дезінсекція, фумігація, знищення шкідників, дезинсекция, фумигация, уничтожение вредителей, disinsection, fumigation, pest control, Головна, Головна сторінка",
  robots: { index: true, follow: true },
  icons: { icon: "/static/general/ico.webp" },
  openGraph: {
    type: "website",
    url: "https://fumitrade.com.ua",
    siteName: "Fumitrade",
    title: "Fumitrade | Главная",
    description: "Профессиональная дезинсекция без компромиссов! Fumitrade – более 30 лет опыта в области дезинсекции, защиты агропродукции и фумигации зерновых и масличных культур.",
    images: ["https://fumitrade.com.ua/static/general/ico.webp"],
  },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;

  if (locale === "uk") {
    return ukMetadata;
  } else if (locale === "en") {
    return enMetadata;
  } else {
    return ruMetadata;
  }
}

export default function Page() {
  return <MainPage />;
}