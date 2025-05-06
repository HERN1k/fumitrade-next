"use client";

import ScrollIndicator from "@/components/general/ScrollIndicator/ScrollIndicator";
import Constants from "@/constants";
import Header from "@/scripts/header";
import { IKnowledgeBaseItem } from "@/types";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import styles from "@/components/knowledge-base/styles.module.css";
import Window from "@/components/general/Window/Window";
import { getStaticFile } from "@/scripts/mainPageScripts";
import { trimWithDots } from "@/scripts/servicesScripts";
import AppearanceAnimation from "@/components/general/AppearanceAnimation/AppearanceAnimation";
import { getKnowledgeItemsCollection, handleHashChange } from "@/scripts/knowledgeBaseScripts";
import KnowledgeItem from "@/components/knowledge-base/KnowledgeItem";
import { TranslateOnAxis } from "@/scripts/translateOnAxis";

export default function KnowledgeBasePage() {
  
    const isPC = (): boolean => {
        if (typeof window === "undefined") return true;

        return window.innerWidth > 1024;
    }

    const locale = useLocale();
    const t = useTranslations();

    const [isMobile, setIsMobile] = useState<boolean>(() => !isPC());
    const [itemsCollection] = useState<IKnowledgeBaseItem[]>(getKnowledgeItemsCollection(locale));

    useEffect(() => { 
        var loader = document.getElementById(Constants.GENERAL_LOADING_ID);
        
        if (loader) {
            loader.style.opacity = "0";
        }

        Header.ensureVisible();
        
        setTimeout(() => {
            if (!loader) return;
    
            loader.style.display = "none";
        }, 300);

        handleHashChange();

        window.addEventListener("resize", onResize);
        window.addEventListener("hashchange", handleHashChange);
        
        return () => {
            window.removeEventListener("resize", onResize);
            window.removeEventListener("hashchange", handleHashChange);
        }
    }, []);

    const onLinkClick = (id: number): void => {
        if (typeof window === "undefined") return;

        window.location.hash = `#section${id}`;

        handleHashChange();
    }
    
    const onResize = (): void => setIsMobile(() => !isPC());

    return (
        <Window id={Constants.KNOWLEDGE_BASE_PAGE_ID} className={styles.window}>
            <ScrollIndicator />

            <div 
                className={styles.mainBG} 
                style={{backgroundImage: `url(${getStaticFile(Constants.KNOWLEDGE_BASE_PAGE_BG_IMAGE)})`}} />
            
            <AppearanceAnimation 
                initialPosition={Constants.BASE_APPEARANCE_ANIMATION.clone()}
                delay={500} 
                className={styles.title}>
                {t("knowledge_base_page.title")}
            </AppearanceAnimation>

            <div className={styles.mainContainer}>
                {!isMobile 
                    ? <AppearanceAnimation 
                        initialPosition={new TranslateOnAxis(-3, "rem", "X")}
                        delay={750} 
                        duration={0.5}
                        className={styles.navContainer}>
                        <ul className={styles.ul}>
                            {itemsCollection.map((item) => (
                                <li className={styles.li} key={item.id}>
                                    <p 
                                        onClick={() => onLinkClick(item.id)}
                                        className={styles.link}>
                                        {trimWithDots(item.title, 32)}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </AppearanceAnimation>
                    : null }
                
                <AppearanceAnimation 
                    initialPosition={new TranslateOnAxis(-2, "rem", "Y")}
                    delay={1000} 
                    duration={0.5}
                    threshold={0.01}
                    className={styles.contentContainer}>
                    {itemsCollection.map((item) => <KnowledgeItem args={item} key={item.id} />)}
                </AppearanceAnimation>
            </div>
        </Window>
    );
}