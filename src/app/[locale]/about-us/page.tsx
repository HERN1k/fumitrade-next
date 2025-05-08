import AboutUsPage from "@/components/about-us/AboutUsPage";
import { Metadata } from "next";

export async function generateMetadata({}: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  return {
    title: "Fumitrade | Про нас",
    description: "Fumitrade – експерти у сфері фумігації та дезінсекції. Понад 30 років досвіду, безпечні та ефективні методи боротьби зі шкідниками в аграрному секторі.",
    keywords: "Про нас, ми",
    robots: { index: true, follow: true },
    icons: { icon: "https://fumitrade.com.ua/favicon.ico" },
    openGraph: {
      type: "website",
      url: "https://fumitrade.com.ua/about-us",
      siteName: "Fumitrade",
      title: "Fumitrade | Про нас",
      description: "Fumitrade – експерти у сфері фумігації та дезінсекції. Понад 30 років досвіду, безпечні та ефективні методи боротьби зі шкідниками в аграрному секторі.",
      images: ["https://fumitrade.com.ua/static/general/ico.webp"],
    },
  };
}

export default function Page() {
  return <AboutUsPage />;
}