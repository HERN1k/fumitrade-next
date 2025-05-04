"use client";

import { FC, useRef, useEffect } from "react";
import styles from "./styles.module.css";
import { getStaticFile, onScrollServicesHeader } from "@/scripts/servicesScripts";
import Constants from "@/constants";
import AppearanceAnimation from "@/components/general/AppearanceAnimation/AppearanceAnimation";
import { useTranslations } from "next-intl";

const ServicesHeader: FC = () => {

    const rootElementRef = useRef<HTMLElement | null>(null);

    const t = useTranslations();
    
    useEffect(() => {
        rootElementRef.current = document.getElementById(Constants.ROOT_CONTAINER_ID) as HTMLElement;

        (document.getElementById(Constants.ROOT_CONTAINER_ID))?.addEventListener("scroll", onScrollServicesHeader);

        return () => {
            (document.getElementById(Constants.ROOT_CONTAINER_ID))?.removeEventListener("scroll", onScrollServicesHeader);
        }; 
    }, []);

    return (
        <div className={styles.headerContainer} style={{ backgroundImage: `url(${getStaticFile(Constants.SERVICES_HEADER_IMAGE)})` }}>
            <AppearanceAnimation 
                initialPosition={Constants.BASE_APPEARANCE_ANIMATION.clone()}
                delay={100} 
                style={{ width: "100%", zIndex: "20" }}>
                <h1 className={styles.navigationTitle}>
                    {t("servicesWindow.reliable_solutions_for_your_business")}
                </h1>
                <p className={styles.navigationText}>
                    {t("servicesWindow.we_offer_comprehensive_pest_control_solutions")}
                </p>
            </AppearanceAnimation>
        </div>
    );
}

export default ServicesHeader;