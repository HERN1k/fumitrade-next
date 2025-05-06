"use client";

import { FC, MouseEvent, useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import PopupBackdrop from "@/components/general/PopupBackdrop/PopupBackdrop";
import { getPrivacyPolicyUrl } from "@/scripts/appWrapperScripts";
import Constants from "@/constants";
import { useTranslations } from "next-intl";
import styles from "@/components/general/PopupBackdrop/styles.module.css";

const CookiePopup: FC = () => {

    const [popupOpen, setPopupOpen] = useState<boolean>(false);

    const t = useTranslations();

    const open = (): void => {
        setTimeout(() => { 
            var key = localStorage.getItem(Constants.COOKIES_ACCEPT_KEY);
            if (key === null || key === "undefined") {
                setPopupOpen(true);
            }
        }, 1000);
    }

    const reject = (): void => {
        localStorage.removeItem(Constants.COOKIES_ACCEPT_KEY);

        localStorage.setItem(Constants.COOKIES_ACCEPT_KEY, false.toString());

        setPopupOpen(false);
    }

    const accept = (): void => {
        localStorage.removeItem(Constants.COOKIES_ACCEPT_KEY);

        localStorage.setItem(Constants.COOKIES_ACCEPT_KEY, true.toString());

        setPopupOpen(false);
    }

    const stopPropagation = (e: MouseEvent) => e.stopPropagation();

    useEffect(() => { open() }, []);

    return (
        <AnimatePresence
            initial={false}
            onExitComplete={() => null}>
            {popupOpen && 
                <PopupBackdrop onClick={reject}>
                    <div className={styles.popupContainer} onClick={stopPropagation}>
                        <p className={styles.question} 
                            dangerouslySetInnerHTML={{ 
                                __html: t("appWrapper.popupCookie.question")
                            }}
                        />
 
                        <div className={styles.interesticContainer}>
                            <a className={styles.learnMore} href={getPrivacyPolicyUrl()} target="_blank">
                                <p className={styles.learnMoreText} 
                                    dangerouslySetInnerHTML={{ 
                                        __html: t("appWrapper.popupCookie.learnMore")
                                    }}
                                />
                                
                                <span className={styles.learnMoreSpan}>
                                    &gt;
                                </span>
                            </a>

                            <div className={styles.buttonsContainer}>
                                <button className={styles.buttonReject} onClick={reject}>
                                    {t("appWrapper.popupCookie.reject")}
                                </button>

                                <button className={styles.buttonAccept} onClick={accept}>
                                    {t("appWrapper.popupCookie.accept")}
                                </button>
                            </div>
                        </div>
                    </div>
                </PopupBackdrop>}
        </AnimatePresence>
    );
}

export default CookiePopup;