import { FC } from "react";
import Window from "@/components/general/Window/Window";
import Constants from "@/constants";
import styles from "./styles.module.css";
import { getStaticFile } from "@/scripts/mainPageScripts";
import AppearanceAnimation from "@/components/general/AppearanceAnimation/AppearanceAnimation";
import { useTranslations } from "next-intl";
import SwiperTrustUs from "@/components/main/SwiperTrustUs";

const TrustUsWindow: FC = () => {

    const t = useTranslations();

    const isPC = (): boolean => {
        if (typeof window === "undefined") return true;

        return window.innerWidth > 1024;
    }

    return (
        <Window id={Constants.TRUST_US_WINDOW_MAIN_PAGE_ID} className={styles.trustUsWindow}>
            <div 
                className={styles.trustUsBG}
                style={{backgroundImage: `url(${getStaticFile(Constants.MAIN_PAGE_TRUST_US_IMAGE)})`}} />

            <AppearanceAnimation 
                initialPosition={Constants.BASE_APPEARANCE_ANIMATION.clone()}
                delay={500} 
                style={{ 
                    height: "fit-content", 
                    marginTop: isPC() ? "5rem" : "2rem"
                }}>
                <h2 className={styles.trustUsTitle}>
                    {t("trustUsWindow.we_are_trusted_title_1")}
                    <span className={styles.trustUsSpan}>
                        {t("trustUsWindow.we_are_trusted_title_2")}
                    </span>
                    {t("trustUsWindow.we_are_trusted_title_3")}
                </h2>
            </AppearanceAnimation> 

            <AppearanceAnimation 
                initialPosition={Constants.BASE_APPEARANCE_ANIMATION.clone()}
                delay={500} 
                style={{ 
                    height: "fit-content",
                    marginBottom: "3rem"
                }}>
                <SwiperTrustUs />
            </AppearanceAnimation>
        </Window>
    );
}

export default TrustUsWindow;