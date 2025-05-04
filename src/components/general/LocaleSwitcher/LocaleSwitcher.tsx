"use client";

import Constants from "@/constants";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { redirect } from "next/navigation";
import styles from "./styles.module.css";

export default function LocaleSwitcher() {

    const t = useTranslations();
    const locale = useLocale();
    const pathname = usePathname();

    const onLocaleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newLocale = e.target.value;

        if (newLocale === locale) return;

        if (!Constants.LOCALES.includes(newLocale)) return;

        localStorage.setItem(Constants.USER_LOCALE_KEY, newLocale);
        
        redirect(`/${newLocale}/` + pathname.split("/").splice(2).join("/"));
    }

    return (
        <div className={styles.select}>
            <select
                defaultValue={locale}
                onChange={onLocaleChange}
                className={styles.selectElement}
            >
                {Constants.LOCALES.map((lang) => (
                    <option key={lang} value={lang} className={styles.option}>
                        {t(`appWrapper.locales.${lang}`)}
                    </option>
                ))}
            </select>
        </div>
    )
}