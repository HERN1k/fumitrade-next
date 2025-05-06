import { FC } from "react";
import styles from "./styles.module.css";
import { Zipper } from "@/components/general/Svgs/Svgs";
import { removeLineBreak } from "@/scripts/mainPageScripts";
import AppearanceAnimation from "@/components/general/AppearanceAnimation/AppearanceAnimation";
import Constants from "@/constants";
import { Link } from "@/i18n/navigation";
import { createHashLink } from "@/scripts/servicesScripts";
import { useTranslations } from "next-intl";
import AboutMainElement from "./AboutMainElement";

const AboutMain: FC = () => {

    const t = useTranslations();

    const style = {
        width: "fit-content", 
        height: "fit-content", 
        display: "block", 
        position: "relative",
    };

    const isPC = (): boolean => {
        if (typeof window === "undefined") return true;

        return window.innerWidth > 1024;
    }

    return ( 
        <div className={styles.aboutTextContainer}>
            <div className={styles.aboutTextTitleContainer}>
                <AppearanceAnimation 
                    initialPosition={Constants.BASE_APPEARANCE_ANIMATION.clone()}
                    delay={500} 
                    style={style}>
                    <Link  
                        href={`/services${createHashLink(t("servicesWindow.services.service_4.title"))}`}
                        className={styles.aboutTextTitle}>
                        { isPC()
                            ? t("mainWindow.about.professional_fumigation")
                            : removeLineBreak(t("mainWindow.about.professional_fumigation")) }
                    </Link>
                </AppearanceAnimation>
            </div>

            <Zipper className={styles.zipper} />

            <AboutMainElement />
        </div>
    );
}

export default AboutMain;