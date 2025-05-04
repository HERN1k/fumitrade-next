"use client";

import { FC } from "react";
import Window from "@/components/general/Window/Window";
import Constants from "@/constants";
import styles from "./styles.module.css";
import AppearanceAnimation from "@/components/general/AppearanceAnimation/AppearanceAnimation";
import { getStaticFile } from "@/scripts/appWrapperScripts";
import { Quotes } from "@/components/general/Svgs/Svgs";
import { useTranslations } from "next-intl";
import { TranslateOnAxis } from "@/scripts/translateOnAxis";

const AboutUsBestEmployee: FC = () => {

    const t = useTranslations();

    return (
        <Window id={Constants.ABOUT_US_PAGE_BEST_EMPLOYEE_ID} className={styles.founderWindow}>
            <AppearanceAnimation
                initialPosition={Constants.BASE_APPEARANCE_ANIMATION.clone()}
                delay={500}>
                <div 
                    className={styles.founderPortrait} 
                    style={{backgroundImage: `url(${getStaticFile(Constants.ABOUT_US_PAGE_PORTRAIT_IMAGE)})`}} />
            </AppearanceAnimation>

            <AppearanceAnimation
                initialPosition={new TranslateOnAxis(-3, "rem", "X")}
                duration={0.5}
                delay={750}>
                <p className={styles.founderName}>
                    {t("about-us.founderName")}
                </p>
            </AppearanceAnimation>
            
            <AppearanceAnimation
                initialPosition={new TranslateOnAxis(-3, "rem", "X")}
                duration={0.5}
                delay={750}>
                <p className={styles.founderTitle}>
                    {t("about-us.founderTitle")}
                </p>
            </AppearanceAnimation>
            
            <AppearanceAnimation
                initialPosition={new TranslateOnAxis(3, "rem", "X")}
                duration={0.5}
                delay={1000}
                className={styles.quoteContainer}>
                <Quotes className={styles.quotes} />
                <p className={styles.quoteText}  dangerouslySetInnerHTML={{ __html: t("about-us.quote")}} />
            </AppearanceAnimation>
        </Window>
    );
}

export default AboutUsBestEmployee;