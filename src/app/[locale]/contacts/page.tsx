import ContactsPage from "@/components/contacts/ContactsPage";
import { Metadata } from "next";

export async function generateMetadata({}: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  return {
    title: "Fumitrade | Контакти",
    description: "Зв’яжіться з Fumitrade! Ми допоможемо вам у питаннях фумігації та дезінсекції. Адреса, телефон, email – вся контактна інформація в одному місці.",
    keywords: "Контакти, контакти, розташування, номер, номер телефону, карта",
    robots: { index: true, follow: true },
    icons: { icon: "https://fumitrade.com.ua/favicon.ico" },
    openGraph: {
      type: "website",
      url: "https://fumitrade.com.ua/contacts",
      siteName: "Fumitrade",
      title: "Fumitrade | Контакти",
      description: "Зв’яжіться з Fumitrade! Ми допоможемо вам у питаннях фумігації та дезінсекції. Адреса, телефон, email – вся контактна інформація в одному місці.",
      images: ["https://fumitrade.com.ua/static/general/ico.webp"],
    },
  };
}

export default function Page() {
  return <ContactsPage />;
}