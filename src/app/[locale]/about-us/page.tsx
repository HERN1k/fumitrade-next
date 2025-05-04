import AboutUsPage from "@/components/about-us/AboutUsPage";
import { Metadata } from "next";

const ukMetadata: Metadata = {
  title: "Fumitrade | Про нас",
  description: "Fumitrade – експерти у сфері фумігації та дезінсекції. Понад 30 років досвіду, безпечні та ефективні методи боротьби зі шкідниками в аграрному секторі.",
  keywords: "Про нас, ми",
  robots: { index: true, follow: true },
  icons: { icon: "/static/general/ico.webp" },
  openGraph: {
    type: "website",
    url: "https://fumitrade.com.ua/about-us",
    siteName: "Fumitrade",
    title: "Fumitrade | Про нас",
    description: "Fumitrade – експерти у сфері фумігації та дезінсекції. Понад 30 років досвіду, безпечні та ефективні методи боротьби зі шкідниками в аграрному секторі.",
    images: ["https://fumitrade.com.ua/static/general/ico.webp"],
  },
};

const enMetadata: Metadata = {
  title: "Fumitrade | About us",
  description: "Fumitrade – experts in fumigation and disinfestation. Over 30 years of experience, safe and effective methods of pest control in the agricultural sector.",
  keywords: "About us, we",
  robots: { index: true, follow: true },
  icons: { icon: "/static/general/ico.webp" },
  openGraph: {
    type: "website",
    url: "https://fumitrade.com.ua/about-us",
    siteName: "Fumitrade",
    title: "Fumitrade | About us",
    description: "Fumitrade – experts in fumigation and disinfestation. Over 30 years of experience, safe and effective methods of pest control in the agricultural sector.",
    images: ["https://fumitrade.com.ua/static/general/ico.webp"],
  },
};

const ruMetadata: Metadata = {
  title: "Fumitrade | О нас",
  description: "Fumitrade – эксперты в области фумигации и дезинсекции. Более 30 лет опыта, безопасные и эффективные методы борьбы с вредителями в аграрном секторе.",
  keywords: "О нас, мы",
  robots: { index: true, follow: true },
  icons: { icon: "/static/general/ico.webp" },
  openGraph: {
    type: "website",
    url: "https://fumitrade.com.ua/about-us",
    siteName: "Fumitrade",
    title: "Fumitrade | О нас",
    description: "Fumitrade – эксперты в области фумигации и дезинсекции. Более 30 лет опыта, безопасные и эффективные методы борьбы с вредителями в аграрном секторе.",
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
  return <AboutUsPage />;
}