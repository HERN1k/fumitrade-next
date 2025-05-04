import { FC } from "react";
import styles from "./styles.module.css";
import { Link } from "@/i18n/navigation";
import Constants from "@/constants";
import { getStaticFile } from "@/scripts/mainPageScripts";
import { Arrow } from "@/components/general/Svgs/Svgs";
import AppearanceAnimation from "@/components/general/AppearanceAnimation/AppearanceAnimation";
import Window from "../general/Window/Window";
import { useTranslations } from "next-intl";

const DescriptionWindow: FC = () => {

    const t = useTranslations();

    const style = {
        width: "100%", 
        height: "100%", 
        display: "block", 
        position: "relative",
    };

    return (
        <Window id={Constants.DESCRIPTION_WINDOW_MAIN_PAGE_ID}>
            <div 
                className={styles.mainPageImageDescription} 
                style={{backgroundImage: `url(${getStaticFile(Constants.MAIN_PAGE_DESCRIPTION_IMAGE)})`}} />
            
            <div className={styles.descriptionContainer}>
                <div className={styles.descriptionTextContainer}>
                    <AppearanceAnimation 
                        initialPosition={Constants.BASE_APPEARANCE_ANIMATION.clone()}
                        delay={500} 
                        style={style}>
                        <h1 className={styles.descriptionTitle}>{t("descriptionWindow.title")}</h1>
                    </AppearanceAnimation> 
 
                    <AppearanceAnimation 
                        initialPosition={Constants.BASE_APPEARANCE_ANIMATION.clone()}
                        delay={500} 
                        style={style}>
                        <p className={styles.descriptionText}>{t("descriptionWindow.text")}</p>
                    </AppearanceAnimation>
                </div>

                <AppearanceAnimation 
                    initialPosition={Constants.BASE_APPEARANCE_ANIMATION.clone()}
                    delay={500} 
                    style={style}> 
                    <Link href="/about-us">
                        <div className={styles.learnMoreContainer}>
                            <div className={styles.learnMoreButton}>
                                <Arrow className={styles.learnMoreButtonArrowSvg} />
                            </div>
                            <h2 className={styles.learnMoreText}>{t("descriptionWindow.button")}</h2>
                        </div>
                    </Link>
                </AppearanceAnimation>
            </div>
        </Window>
    );
}

export default DescriptionWindow;