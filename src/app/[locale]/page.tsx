import MainPage from "@/components/main/MainPage";
import { Metadata } from "next";

export async function generateMetadata({}: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  return {
    title: "Fumitrade | Головна",
    description: "Професійна дезінсекція без компромісів! Fumitrade – понад 30 років досвіду у сфері дезінсекції, захисту агропродукції та фумігації зернових і олійних культур.",
    keywords: "Fumitrade, Фумітрейд, Фумитрейд, fumitrade.com.ua, fumitrade.ua, fumitrade.ua@gmail.com, дезінсекція, фумігація, знищення шкідників, дезинсекция, фумигация, уничтожение вредителей, disinsection, fumigation, pest control, Головна, Головна сторінка",
    robots: { index: true, follow: true },
    icons: { icon: "https://fumitrade.com.ua/favicon.ico" },
    openGraph: {
      type: "website",
      url: "https://fumitrade.com.ua",
      siteName: "Fumitrade",
      title: "Fumitrade | Головна",
      description: "Професійна дезінсекція без компромісів! Fumitrade – понад 30 років досвіду у сфері дезінсекції, захисту агропродукції та фумігації зернових і олійних культур.",
      images: ["https://fumitrade.com.ua/static/general/ico.webp"],
    },
  };
}

export default function Page() {
  return <MainPage />;
}