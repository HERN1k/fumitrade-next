import { FC } from "react";
import Window from "@/components/general/Window/Window";
import Constants from "@/constants";
import styles from "./styles.module.css";
import { formattingPhoneNumber, getStaticFile } from "@/scripts/appWrapperScripts";
import { IContactsWindowProps } from "@/types";
import AppearanceAnimation from "@/components/general/AppearanceAnimation/AppearanceAnimation";
import { useTranslations } from "next-intl";
import { TranslateOnAxis } from "@/scripts/translateOnAxis";
import ContactForm from "./ContactForm";

const ContactsWindow: FC<IContactsWindowProps> = ({ sticky = true }) => {

    const t = useTranslations();

    return (
        <Window 
            id={Constants.CONTACTS_WINDOW_MAIN_PAGE_ID} 
            sticky={sticky} 
            className={styles.window}
            onceClassName={true}
        >
            <div 
                className={styles.imageBG} 
                style={{backgroundImage: `url(${getStaticFile(Constants.SERVICES_PAGE_SERVICE_2_IMAGE)})`}} />

            <AppearanceAnimation 
                initialPosition={Constants.BASE_APPEARANCE_ANIMATION.clone()}
                delay={500} 
                className={styles.textConatiner}>
                <h2 className={styles.mainTitle}>
                    {t("contactsPage.mainTitle")}
                </h2>

                <div className={styles.contactsConatiner}>
                    <div className={styles.contactConatiner}>
                        <h3 className={styles.contactTitle}>
                            {t("appWrapper.our_location")}
                        </h3> 
                        <a className={styles.contactAnchor} target="_blank" href={Constants.COMPANY_GOOGLE_MAPS_URL}>
                            <p className={styles.contactText}>
                                {t("appWrapper.location")}
                            </p>
                        </a>
                    </div>

                    <div className={styles.contactConatiner}>
                        <h3 className={styles.contactTitle}>
                            {t("appWrapper.representatives_in_ukraine")}
                        </h3>
                        <div className={styles.numbersContainer}>
                            <div>
                                <h2 className={styles.contactText}>{t("appWrapper.north")}</h2>
                                <h2 className={styles.contactText}>{t("appWrapper.central")}</h2>
                                <h2 className={styles.contactText}>{t("appWrapper.west")}</h2>
                                <h2 className={styles.contactText}>{t("appWrapper.south")}</h2>
                            </div>
                            <div>
                                <a
                                    className={styles.contactAnchor} 
                                    style={{ whiteSpace: "nowrap" }}
                                    target="_blank" 
                                    href={formattingPhoneNumber(Constants.COMPANY_FIRST_PHONE_NUMBER)}
                                >
                                    {Constants.COMPANY_FIRST_PHONE_NUMBER}
                                </a>
                                <a
                                    className={styles.contactAnchor} 
                                    style={{ whiteSpace: "nowrap" }}
                                    target="_blank" 
                                    href={formattingPhoneNumber(Constants.COMPANY_SECOND_PHONE_NUMBER)}
                                >
                                    {Constants.COMPANY_SECOND_PHONE_NUMBER}
                                </a>
                                <a
                                    className={styles.contactAnchor} 
                                    style={{ whiteSpace: "nowrap" }}
                                    target="_blank" 
                                    href={formattingPhoneNumber(Constants.COMPANY_THIRD_PHONE_NUMBER)}
                                >
                                    {Constants.COMPANY_THIRD_PHONE_NUMBER}
                                </a>
                                <a
                                    className={styles.contactAnchor} 
                                    style={{ whiteSpace: "nowrap" }}
                                    target="_blank" 
                                    href={formattingPhoneNumber(Constants.COMPANY_FOURTH_PHONE_NUMBER)}
                                >
                                    {Constants.COMPANY_FOURTH_PHONE_NUMBER}
                                </a>
                            </div>
                        </div>
                        {/* <div>
                            <a className={styles.contactAnchor} target="_blank" href={formattingPhoneNumber(Constants.COMPANY_FIRST_PHONE_NUMBER)}>
                                <h2 className={styles.contactText}>{Constants.COMPANY_FIRST_PHONE_NUMBER}</h2>
                            </a>
                            <a className={styles.contactAnchor} target="_blank" href={formattingPhoneNumber(Constants.COMPANY_SECOND_PHONE_NUMBER)}>
                                <h2 className={styles.contactText}>{Constants.COMPANY_SECOND_PHONE_NUMBER}</h2>
                            </a>
                        </div> */}
                    </div>
                </div>
            </AppearanceAnimation>

            <AppearanceAnimation 
                initialPosition={new TranslateOnAxis(10, "rem", "X")}
                delay={1000}
                duration={0.4}
                className={styles.mailConatiner}>
                <ContactForm />
            </AppearanceAnimation>
        </Window>
    );
}

export default ContactsWindow;