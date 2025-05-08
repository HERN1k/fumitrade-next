import KnowledgeBasePage from "@/components/knowledge-base/KnowledgeBasePage";
import { Metadata } from "next";

export async function generateMetadata({}: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    return {
        title: "Fumitrade | База знань",
        description: "Корисна база знань про фумігацію, дезінсекцію та боротьбу зі шкідниками. Експертні поради, статті та корисна інформація від Fumitrade.",
        keywords: "База знань, данні, знання",
        robots: { index: true, follow: true },
        icons: { icon: "https://fumitrade.com.ua/favicon.ico" },
        openGraph: {
            type: "website",
            url: "https://fumitrade.com.ua/knowledge-base",
            siteName: "Fumitrade",
            title: "Fumitrade | База знань",
            description: "Корисна база знань про фумігацію, дезінсекцію та боротьбу зі шкідниками. Експертні поради, статті та корисна інформація від Fumitrade.",
            images: ["https://fumitrade.com.ua/static/general/ico.webp"],
        }
    };
}

export default function Page() {
  return <KnowledgeBasePage />;
}