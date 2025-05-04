import ServicesPage from "@/components/services/ServicesPage";
import { Metadata } from "next";

const ukMetadata: Metadata = {
    title: "Fumitrade | Послуги",
    description: "Послуги з фумігації та дезінсекції від Fumitrade. Захист агропродукції, боротьба зі шкідниками, аерозольна дезінсекція, фумігація елеваторів, складів, вагонів та контейнерів.",
    keywords: "Послуги, Послуги з дезінсекції, Послуги з фумігації",
    robots: { index: true, follow: true },
    icons: { icon: "/static/general/ico.webp" },
    openGraph: {
        type: "website",
        url: "https://fumitrade.com.ua/services",
        siteName: "Fumitrade",
        title: "Fumitrade | Послуги",
        description: "Послуги з фумігації та дезінсекції від Fumitrade. Захист агропродукції, боротьба зі шкідниками, аерозольна дезінсекція, фумігація елеваторів, складів, вагонів та контейнерів.",
        images: ["https://fumitrade.com.ua/static/general/ico.webp"],
    },
};

const enMetadata: Metadata = {
    title: "Fumitrade | Services",
    description: "Fumigation and disinfestation services from Fumitrade. Protection of agricultural products, pest control, aerosol disinfestation, fumigation of elevators, warehouses, wagons and containers.",
    keywords: "Services, Disinfestation Services, Fumigation Services",
    robots: { index: true, follow: true },
    icons: { icon: "/static/general/ico.webp" },
    openGraph: {
        type: "website",
        url: "https://fumitrade.com.ua/services",
        siteName: "Fumitrade",
        title: "Fumitrade | Services",
        description: "Fumigation and disinfestation services from Fumitrade. Protection of agricultural products, pest control, aerosol disinfestation, fumigation of elevators, warehouses, wagons and containers.",
        images: ["https://fumitrade.com.ua/static/general/ico.webp"],
    },
};

const ruMetadata: Metadata = {
    title: "Fumitrade | Услуги",
    description: "Услуги по фумигации и дезинсекции от Fumitrade. Защита агропродукции, борьба с вредителями, аэрозольная дезинсекция, фумигация элеваторов, складов, вагонов и контейнеров.",
    keywords: "Услуги по дезинсекции, Услуги по фумигации",
    robots: { index: true, follow: true },
    icons: { icon: "/static/general/ico.webp" },
    openGraph: {
        type: "website",
        url: "https://fumitrade.com.ua/services",
        siteName: "Fumitrade",
        title: "Fumitrade | Услуги",
        description: "Услуги по фумигации и дезинсекции от Fumitrade. Защита агропродукции, борьба с вредителями, аэрозольная дезинсекция, фумигация элеваторов, складов, вагонов и контейнеров.",
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
  return <ServicesPage />;
}