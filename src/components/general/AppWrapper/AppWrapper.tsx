"use client";
 
import { FC, useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";
import Constants from "@/constants";
import { onResize } from "@/scripts/appWrapperScripts";
import { Link } from "../../../i18n/navigation";
import Image from "next/image";
import Header from "@/scripts/header";
import Footer from "./Footer/Footer";
import CookiePopup from "./CookiePopup/CookiePopup";

import LogoImage from "../../../../public/static/general/logo.webp"

export default function AppWrapper({ children }: { children: React.ReactNode }) {
    
    const containerRef = useRef<HTMLDivElement | null>(null);
    
    const [Menu, setMenu] = useState<FC>(() => () => <></>);

    useEffect(() => { 
        Header.setElements(
            document.getElementById(Constants.ROOT_CONTAINER_ID), 
            document.getElementById(Constants.HEADER_ID));

        onResize({ setMenu: setMenu });

        containerRef.current?.addEventListener("scroll", Header.onScroll); 
        window.addEventListener("resize", () => onResize({ setMenu: setMenu }));

        return () => {
            containerRef.current?.removeEventListener("scroll", Header.onScroll);
            window.removeEventListener("resize", () => onResize({ setMenu: setMenu }));
        }; 
    }, []);
 
    return (
        <div ref={containerRef} className={styles.container} id={Constants.ROOT_CONTAINER_ID}>
            <header className={styles.header} id={Constants.HEADER_ID}>  
                <Link href="/">
                    <Image 
                        src={LogoImage} 
                        alt={Constants.COMPANY_NAME}
                        width={LogoImage.width} 
                        height={LogoImage.height} 
                        className={styles.logoImg}
                    />
                </Link>
                
                <Menu />
            </header>
            
            <main className={styles.main}>
                {children}

                <CookiePopup />
            </main>
             
            <Footer />
        </div>
    );
};