"use client";

import { FC } from "react";
import { BurgerButton } from "../../Svgs/Svgs";
import { Link } from "@/i18n/navigation";
import { toggleMobileMenu } from "@/scripts/appWrapperScripts";
import { useTranslations } from "next-intl";
import "./styles.css";

const MobileMenu: FC = () => {

    const t = useTranslations();

    return (
        <div className="mobileMenuContainer">
            <BurgerButton toggleMenu={toggleMobileMenu} />

            <div id="menuContainer" className="menu-main-container">
                <ul className="links">
                    <Link href="/services">
                        <li className="link-item" onClick={toggleMobileMenu}>
                            {t("appWrapper.menu.services")}
                        </li>
                    </Link>
                    <Link href="/about-us">
                        <li className="link-item" onClick={toggleMobileMenu}>
                            {t("appWrapper.menu.about_us")}
                        </li>
                    </Link>
                    <Link href="/knowledge-base">
                        <li className="link-item" onClick={toggleMobileMenu}>
                            {t("appWrapper.menu.knowledge_base")}
                        </li>
                    </Link>
                    <Link href="/contacts">
                        <li className="link-item" onClick={toggleMobileMenu}>
                            {t("appWrapper.menu.contacts")}
                        </li>
                    </Link> 
                </ul>
            </div>
        </div>
    );
};

export default MobileMenu;