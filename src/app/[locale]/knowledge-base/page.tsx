import KnowledgeBasePage from "@/components/knowledge-base/KnowledgeBasePage";
import { Metadata } from "next";

const ukMetadata: Metadata = {
    title: "Fumitrade | База знань",
    description: "Корисна база знань про фумігацію, дезінсекцію та боротьбу зі шкідниками. Експертні поради, статті та корисна інформація від Fumitrade.",
    keywords: "База знань, данні, знання",
    robots: { index: true, follow: true },
    icons: { icon: "/static/general/ico.webp" },
    openGraph: {
        type: "website",
        url: "https://fumitrade.com.ua/knowledge-base",
        siteName: "Fumitrade",
        title: "Fumitrade | База знань",
        description: "Корисна база знань про фумігацію, дезінсекцію та боротьбу зі шкідниками. Експертні поради, статті та корисна інформація від Fumitrade.",
        images: ["https://fumitrade.com.ua/static/general/ico.webp"],
    },
};

const enMetadata: Metadata = {
    title: "Fumitrade | Knowledge base",
    description: "A useful knowledge base about fumigation, disinfestation and pest control. Expert advice, articles and useful information from Fumitrade.",
    keywords: "Knowledge base, data, knowledge",
    robots: { index: true, follow: true },
    icons: { icon: "/static/general/ico.webp" },
    openGraph: {
        type: "website",
        url: "https://fumitrade.com.ua/knowledge-base",
        siteName: "Fumitrade",
        title: "Fumitrade | Knowledge base",
        description: "A useful knowledge base about fumigation, disinfestation and pest control. Expert advice, articles and useful information from Fumitrade.",
        images: ["https://fumitrade.com.ua/static/general/ico.webp"],
    },
};

const ruMetadata: Metadata = {
    title: "Fumitrade | База знаний",
    description: "Полезная база знаний о фумигации, дезинсекции и борьбе с вредителями. Экспертные советы, статьи и информация от Fumitrade.",
    keywords: "База знаний, данных, знаний",
    robots: { index: true, follow: true },
    icons: { icon: "/static/general/ico.webp" },
    openGraph: {
        type: "website",
        url: "https://fumitrade.com.ua/knowledge-base",
        siteName: "Fumitrade",
        title: "Fumitrade | База знаний",
        description: "Полезная база знаний о фумигации, дезинсекции и борьбе с вредителями. Экспертные советы, статьи и информация от Fumitrade.",
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
  return <KnowledgeBasePage />;
}