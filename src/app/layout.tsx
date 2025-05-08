import Constants from "@/constants";
import { Metadata } from "next";
import "./globals.css";

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
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <body suppressHydrationWarning>
        {children}
        <div className="loaderContainer loaderConteinerInView" id={Constants.GENERAL_LOADING_ID}>
          <div className="loader">
            <h1 className="title"></h1>
          </div>
        </div>
      </body> 
    </html>
  );
}