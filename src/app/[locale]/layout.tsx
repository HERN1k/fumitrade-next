import { Montserrat, Roboto_Condensed } from "next/font/google";
import Constants from "@/constants";
import { NextIntlClientProvider } from "next-intl";
import Script from "next/script";
import { notFound } from "next/navigation";
import AppWrapper from "@/components/general/AppWrapper/AppWrapper";
import { GoogleAnalytics } from "@next/third-parties/google";
import "../globals.css";
import { Metadata } from "next";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const roboto = Roboto_Condensed({
    variable: "--font-roboto",
    subsets: ["latin"],
});

async function getMessages(locale: string) {
    if (Constants.LOCALES.some((l) => l === locale)) {
        return (await import(`../../messages/${locale}.json`)).default;
    }
}
  
export async function generateStaticParams() {
    return Constants.LOCALES.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
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

export default async function RootLayout({
    children,
    params
}: Readonly<{
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}>) {
    const { locale } = await params;

    const messages = await getMessages(locale);

    if (!messages) {
        notFound();
    }
    
    return (
        <html lang={locale}>
            <head>
                <Script id="JSON-LD" type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "Професійна дезінсекція без компромісів!",
                        "url": "https://fumitrade.com.ua/",
                        "logo": "https://fumitrade.com.ua/favicon.ico",
                        "description": "Професійна дезінсекція без компромісів! Fumitrade – понад 30 років досвіду у сфері дезінсекції, захисту агропродукції та фумігації зернових і олійних культур.",
                        "contactPoint": { 
                            "@type": "ContactPoint",
                            "telephone": "+380506062615",
                            "contactType": "customer service",
                            "areaServed": Constants.COUNTRY_CODE,
                            "availableLanguage": ["Ukrainian", "Russian", "English"]
                        },
                        "sameAs": [ Constants.COMPANY_FACEBOOK_URL ]
                        }),
                    }}
                />
            </head>
            <GoogleAnalytics gaId={Constants.GA_TAG} />
            <body className={`${montserrat.variable} ${roboto.variable}`}>
                <NextIntlClientProvider locale={locale} messages={messages}>
                    <AppWrapper>
                        {children}
                    </AppWrapper>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}