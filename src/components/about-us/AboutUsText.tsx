"use client";

import { FC } from "react";
import Constants from "@/constants";
import Window from "@/components/general/Window/Window";
import styles from "./styles.module.css";
import { getStaticFile } from "@/scripts/appWrapperScripts";
import AppearanceAnimation from "@/components/general/AppearanceAnimation/AppearanceAnimation";
import { useTranslations } from "next-intl";
import { TranslateOnAxis } from "@/scripts/translateOnAxis";

const AboutUsText: FC = () => {

    const t = useTranslations();

    return (
        <Window id={Constants.ABOUT_US_PAGE_MAIN_ID} className={styles.window}>
            <div 
                className={styles.mainBG} 
                style={{backgroundImage: `url(${getStaticFile(Constants.ABOUT_US_PAGE_BG_IMAGE)})`}} />

            <div className={styles.mainContainer}>
                <div className={styles.textContainer}>
                    <AppearanceAnimation
                        initialPosition={Constants.BASE_APPEARANCE_ANIMATION.clone()}
                        delay={500}>
                            <h2 className={styles.title} dangerouslySetInnerHTML={{ __html: t("about-us.title")}} />
                    </AppearanceAnimation>

                    <AppearanceAnimation
                        initialPosition={new TranslateOnAxis(-3, "rem", "X")}
                        duration={0.5}
                        delay={750}>
                        <p className={styles.text} dangerouslySetInnerHTML={{ __html: t("about-us.text")}} />
                    </AppearanceAnimation>
                </div>

                <div className={styles.certificatesContainer}>
                    <AppearanceAnimation
                        initialPosition={new TranslateOnAxis(-3, "rem", "Y")}
                        duration={0.5}
                        delay={1000}>
                        <img 
                            src={getStaticFile(Constants.ABOUT_US_PAGE_HACCP_IMAGE)} 
                            alt="HACCP"
                            className={styles.certificate} />

                        <img 
                            src={getStaticFile(Constants.ABOUT_US_PAGE_ISO_IMAGE)} 
                            alt="ISO"
                            className={styles.certificate} />

                        <img 
                            src={getStaticFile(Constants.ABOUT_US_PAGE_DSTU_IMAGE)} 
                            alt="DSTU"
                            className={styles.certificate} />
                    </AppearanceAnimation>
                </div>
            </div>
        </Window>
    );
}

export default AboutUsText; 