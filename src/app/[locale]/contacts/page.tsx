import ContactsPage from "@/components/contacts/ContactsPage";
import { Metadata } from "next";

const ukMetadata: Metadata = {
  title: "Fumitrade | Контакти",
  description: "Зв’яжіться з Fumitrade! Ми допоможемо вам у питаннях фумігації та дезінсекції. Адреса, телефон, email – вся контактна інформація в одному місці.",
  keywords: "Контакти, контакти, розташування, номер, номер телефону, карта",
  robots: { index: true, follow: true },
  icons: { icon: "/static/general/ico.webp" },
  openGraph: {
    type: "website",
    url: "https://fumitrade.com.ua/contacts",
    siteName: "Fumitrade",
    title: "Fumitrade | Контакти",
    description: "Зв’яжіться з Fumitrade! Ми допоможемо вам у питаннях фумігації та дезінсекції. Адреса, телефон, email – вся контактна інформація в одному місці.",
    images: ["https://fumitrade.com.ua/static/general/ico.webp"],
  },
};

const enMetadata: Metadata = {
  title: "Fumitrade | Contacts",
  description: "Contact Fumitrade! We will help you with fumigation and disinfestation issues. Address, phone, email – all contact information in one place.",
  keywords: "Contacts, contacts, location, number, phone number, map",
  robots: { index: true, follow: true },
  icons: { icon: "/static/general/ico.webp" },
  openGraph: {
    type: "website",
    url: "https://fumitrade.com.ua/contacts",
    siteName: "Fumitrade",
    title: "Fumitrade | Contacts",
    description: "Contact Fumitrade! We will help you with fumigation and disinfestation issues. Address, phone, email – all contact information in one place.",
    images: ["https://fumitrade.com.ua/static/general/ico.webp"],
  },
};

const ruMetadata: Metadata = {
  title: "Fumitrade | Контакты",
  description: "Свяжитесь с Fumitrade! Мы поможем вам в вопросах фумигации и дезинсекции. Адрес, телефон, email – вся контактная информация в одном месте.",
  keywords: "Контакты, контакты, местоположение, номер, номер телефона, карта",
  robots: { index: true, follow: true },
  icons: { icon: "/static/general/ico.webp" },
  openGraph: {
    type: "website",
    url: "https://fumitrade.com.ua/contacts",
    siteName: "Fumitrade",
    title: "Fumitrade | Контакты",
    description: "Свяжитесь с Fumitrade! Мы поможем вам в вопросах фумигации и дезинсекции. Адрес, телефон, email – вся контактная информация в одном месте.",
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
  return <ContactsPage />;
}