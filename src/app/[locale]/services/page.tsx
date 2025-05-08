import ServicesPage from "@/components/services/ServicesPage";
import { Metadata } from "next";

export async function generateMetadata({}: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    return {
        title: "Fumitrade | Послуги",
        description: "Послуги з фумігації та дезінсекції від Fumitrade. Захист агропродукції, боротьба зі шкідниками, аерозольна дезінсекція, фумігація елеваторів, складів, вагонів та контейнерів.",
        keywords: "Послуги, Послуги з дезінсекції, Послуги з фумігації",
        robots: { index: true, follow: true },
        icons: { icon: "https://fumitrade.com.ua/favicon.ico" },
        openGraph: {
            type: "website",
            url: "https://fumitrade.com.ua/services",
            siteName: "Fumitrade",
            title: "Fumitrade | Послуги",
            description: "Послуги з фумігації та дезінсекції від Fumitrade. Захист агропродукції, боротьба зі шкідниками, аерозольна дезінсекція, фумігація елеваторів, складів, вагонів та контейнерів.",
            images: ["https://fumitrade.com.ua/static/general/ico.webp"],
        },
    };
}

export default function Page() {
  return <ServicesPage />;
}