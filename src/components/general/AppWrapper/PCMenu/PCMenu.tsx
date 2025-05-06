"use client";

import { FC, useState } from "react";
import styles from "../styles.module.css";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { getKnowledgeItemsCollection } from "@/scripts/knowledgeBaseScripts";
import { IKnowledgeBaseItem } from "@/types";
import { onKnowledgeBaseItemClick, onServiceItemClick, trimWithDots } from "@/scripts/appWrapperScripts";
import { createHashLink } from "@/scripts/servicesScripts";
import { getServicesCollectionForHeader } from "@/scripts/collections";

const PCMenu: FC = () => {

    const locale = useLocale()
    const t = useTranslations();

    const [servicesItemsCollection] = useState<string[]>(() => {
        if (typeof window === "undefined") return [];

        return getServicesCollectionForHeader(t);
    });
    const [knowledgeItemsCollection] = useState<IKnowledgeBaseItem[]>(getKnowledgeItemsCollection(locale));
    
    return (
        <ul className={styles.menu}>
            <li className={styles.menuItem}>
                <Link href="/services">
                    <h2 className={styles.menuText}>{t("appWrapper.menu.services")}</h2>
                    <div className={styles.underline} />
                </Link>
  
                <div className={styles.menuItemDropDownContainer}>
                    <Link href={`/services${createHashLink(servicesItemsCollection[0])}`} onClick={onServiceItemClick}>
                        <div className={styles.menuItemDropDownItem}>{trimWithDots(t("appWrapper.menu.dropDown.complex_processing"), 28)}</div>
                    </Link>
                    <Link href={`/services${createHashLink(servicesItemsCollection[1])}`} onClick={onServiceItemClick}>
                        <div className={styles.menuItemDropDownItem}>{trimWithDots(t("appWrapper.menu.dropDown.aerosol_disinfestation"), 28)}</div>
                    </Link>
                    <Link href={`/services${createHashLink(servicesItemsCollection[2])}`} onClick={onServiceItemClick}>
                        <div className={styles.menuItemDropDownItem}>{trimWithDots(t("appWrapper.menu.dropDown.rodent_traps"), 28)}</div>
                    </Link>
                    <Link href={`/services${createHashLink(servicesItemsCollection[3])}`} onClick={onServiceItemClick}>
                        <div className={styles.menuItemDropDownItem}>{trimWithDots(t("appWrapper.menu.dropDown.disinfection_of_granaries"), 28)}</div>
                    </Link>
                    <Link href={`/services${createHashLink(servicesItemsCollection[4])}`} onClick={onServiceItemClick}>
                        <div className={styles.menuItemDropDownItem}>{trimWithDots(t("appWrapper.menu.dropDown.fumigation_of_silos"), 28)}</div>
                    </Link>
                    <Link href={`/services${createHashLink(servicesItemsCollection[5])}`} onClick={onServiceItemClick}>
                        <div className={styles.menuItemDropDownItem}>{trimWithDots(t("appWrapper.menu.dropDown.fumigation_of_organic_products"), 28)}</div>
                    </Link>
                </div> 
            </li>
            <li className={styles.menuItem}>
                <Link href="/about-us">
                    <h2 className={styles.menuText}>{t("appWrapper.menu.about_us")}</h2>
                    <div className={styles.underline} />
                </Link>
            </li>
            <li className={styles.menuItem}>
                <Link href="/knowledge-base">
                    <h2 className={styles.menuText}>{t("appWrapper.menu.knowledge_base")}</h2>
                    <div className={styles.underline} />
                </Link>

                <div className={styles.menuItemDropDownContainer}>
                    {knowledgeItemsCollection.map((item) => 
                        <Link href={`/knowledge-base#section${item.id}`} key={item.id} id={`KnowledgeItemHash=#section${item.id}`} onClick={onKnowledgeBaseItemClick}>
                            <div className={styles.menuItemDropDownItem}>{trimWithDots(item.title, 28)}</div>
                        </Link>)}
                </div>
            </li>
            <li className={styles.menuItem}>
                <Link href="/contacts">
                    <h2 className={styles.menuText}>{t("appWrapper.menu.contacts")}</h2>
                    <div className={styles.underline} />
                </Link>
            </li>
        </ul>
    );
};

export default PCMenu;