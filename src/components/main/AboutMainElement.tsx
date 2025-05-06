import { FC } from "react";
import styles from "./styles.module.css";
import { Link } from "@/i18n/navigation";
import Constants from "@/constants";
import { removeLineBreak } from "@/scripts/mainPageScripts";
import AppearanceAnimation from "@/components/general/AppearanceAnimation/AppearanceAnimation";
import { createHashLink } from "@/scripts/servicesScripts";
import { useTranslations } from "next-intl";

const AboutMainElement: FC = () => {

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
        <div className={styles.aboutTextItemsContainer}>
            <AppearanceAnimation  
                initialPosition={Constants.BASE_APPEARANCE_ANIMATION.clone()}
                delay={isPC() ? 1250 : 500} 
                style={style}>
                <Link 
                    href={`/services${createHashLink(t("servicesWindow.services.service_1.title"))}`}
                    className={styles.aboutTextItemText}>
                    {removeLineBreak(t("mainWindow.about.fumigation_of_granaries"))}
                    <div className={styles.underlineAboutText} />
                </Link>
            </AppearanceAnimation>

            <AppearanceAnimation 
                initialPosition={Constants.BASE_APPEARANCE_ANIMATION.clone()}
                delay={isPC() ? 1500 : 500} 
                style={style}>
                <Link 
                    href={`/services${createHashLink(t("servicesWindow.services.service_2.title"))}`}
                    className={styles.aboutTextItemText}>
                    {removeLineBreak(t("mainWindow.about.aerosol_disinsection"))}
                    <div className={styles.underlineAboutText} />
                </Link>
            </AppearanceAnimation>

            <AppearanceAnimation 
                initialPosition={Constants.BASE_APPEARANCE_ANIMATION.clone()}
                delay={isPC() ? 1750 : 500} 
                style={style}>
                <Link 
                    href={`/services${createHashLink(t("servicesWindow.services.service_5.title"))}`}
                    className={styles.aboutTextItemText}>
                    {removeLineBreak(t("mainWindow.about.pest_control"))}
                    <div className={styles.underlineAboutText} />
                </Link>
            </AppearanceAnimation>
        </div>
    );
}

export default AboutMainElement;