import { FC, useEffect, useState } from "react";
import styles from "../styles.module.css";
import Constants from "@/constants";
import { formattingPhoneNumber, onResizeFooter } from "@/scripts/appWrapperScripts";
import { Link as I18NLink } from "@/i18n/navigation";
import Link from "next/link";
import { Facebook } from "@/components/general/Svgs/Svgs";
import { useTranslations } from "next-intl";
import Image from "next/image";
import LocaleSwitcher from "@/components/general/LocaleSwitcher/LocaleSwitcher";

import LogoImage from "../../../../../public/static/general/logo.webp";

const Footer: FC = () => {

    const [hyphen, setHyphen] = useState<string>("\n");

    const t = useTranslations();

    useEffect(() => {
        onResizeFooter(setHyphen);

        window.addEventListener("resize", () => onResizeFooter(setHyphen));
        
        return () => {
            window.removeEventListener("resize", () => onResizeFooter(setHyphen));
        }; 
    }, []);

    return (
        <footer className={styles.footer}>
            <div className={styles.footerTop}>
                <div className={styles.footerWorkTogether}>
                    <h1 className={styles.footerTitle}>
                        {t("appWrapper.lets_work_together")}

                        <span className={styles.footerTitleSpan}>{hyphen}</span>

                        <a href={`mailto:${Constants.COMPANY_EMAIL}`} className={styles.footerTitleAnchor}>{Constants.COMPANY_EMAIL}</a>
                    </h1>

                    <I18NLink href="/">
                        <Image 
                            src={LogoImage} 
                            alt={Constants.COMPANY_NAME}
                            width={LogoImage.width} 
                            height={LogoImage.height} 
                            className={styles.footerLogoImg}
                        />
                    </I18NLink>
                </div>

                <div className={styles.footerContacts}>
                    <div className={styles.footerContact}>
                        <h2 className={styles.footerContactText}>{t("appWrapper.our_location")}</h2>
                        <a className={styles.footerContactAnchor} target="_blank" href={Constants.COMPANY_GOOGLE_MAPS_URL}>
                            <h2 className={styles.footerContactText}>{t("appWrapper.location")}</h2>
                        </a>
                    </div>

                    <div className={styles.footerContact}>
                        <h2 className={styles.footerContactText}>{t("appWrapper.call_us")}</h2>
                        <div>
                            <a className={styles.footerContactAnchor} target="_blank" href={formattingPhoneNumber(Constants.COMPANY_FIRST_PHONE_NUMBER)}>
                                <h2 className={styles.footerContactText}>{Constants.COMPANY_FIRST_PHONE_NUMBER}</h2>
                            </a>
                            <a className={styles.footerContactAnchor} target="_blank" href={formattingPhoneNumber(Constants.COMPANY_SECOND_PHONE_NUMBER)}>
                                <h2 className={styles.footerContactText}>{Constants.COMPANY_SECOND_PHONE_NUMBER}</h2>
                            </a>
                        </div>
                    </div>

                    <div className={styles.footerContact}>
                        <h2 className={styles.footerContactText}>{t("appWrapper.connect")}</h2>
                        <a className={styles.footerFbButton} target="_blank" href={Constants.COMPANY_FACEBOOK_URL}>
                            <Facebook className={styles.footerFbSvg} />
                        </a>
                    </div>

                    <LocaleSwitcher />
                </div>
            </div>

            <div className={styles.footerBottom}>
                <p className={styles.footerText}>
                    <I18NLink href="/"> 
                        <span className={styles.footerSpan}>{Constants.COMPANY_NAME + " "}</span> 
                    </I18NLink>
                    &copy;{" " + Constants.YEAR_OF_WEBSITE_CREATION.toString()}
                </p>

                <div className={styles.footerBottomLine}/>

                <p className={styles.footerText}>
                    {t("appWrapper.created_with_love_by")}
                    <a className={styles.footerContactAnchor} target="_blank" href={Constants.DEVELOPER_CONNECTION_URL}> 
                        <span className={styles.footerSpan}>{" " + Constants.DEVELOPER_NAME}</span>
                    </a>
                </p>

                <div className={styles.footerBottomLine}/>

                <p className={styles.footerText}>
                    <Link href="/privacy-policy" className={styles.footerContactAnchor}>
                        <span className={styles.footerSpan}>{t("appWrapper.privacy_policy")}</span>
                    </Link> 
                </p>
            </div>
        </footer>
    );
}

export default Footer;