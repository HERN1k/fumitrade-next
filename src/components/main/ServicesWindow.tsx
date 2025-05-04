import { FC, useEffect, useRef, useState } from "react";
import Constants from "@/constants";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { getStaticFile } from "@/scripts/appWrapperScripts";
import styles from "./styles.module.css";
import "swiper/swiper-bundle.css";
import "@/app/globals.css";
import { Link } from "@/i18n/navigation";
import { addLineBreaks, createHashLink, trimWithDots } from "@/scripts/servicesScripts";
import { Arrow } from "@/components/general/Svgs/Svgs";
import AppearanceAnimation from "@/components/general/AppearanceAnimation/AppearanceAnimation";
import { getServicesCollectionForMainPage } from "@/scripts/collections";
import { useTranslations } from "next-intl";
import Window from "@/components/general/Window/Window";
import { TranslateOnAxis } from "@/scripts/translateOnAxis";

const ServicesWindow: FC = () => {

    const rootElementRef = useRef<HTMLDivElement | null>(null);
    const swiperElementRef = useRef<SwiperRef | null>(null);

    const [spaceBetween, setSpaceBetween] = useState<number>(50);
    const [swiperSlideWidth, setSwiperSlideWidth] = useState<string>("25dvw");
    
    const t = useTranslations();

    useEffect(() => {
        rootElementRef.current = document.getElementById(Constants.ROOT_CONTAINER_ID) as HTMLDivElement | null;
    }, []);

    useEffect(() => {
        const onResize = () => {
            if (typeof window === "undefined") {
                setSpaceBetween(50);
                setSwiperSlideWidth("25dvw");

                return;
            }

            if (window.innerWidth > 900) {
                setSpaceBetween(50);
                setSwiperSlideWidth("25dvw");
            } else {
                setSpaceBetween(100);
                setSwiperSlideWidth("90dvw");
            }
        }

        onResize();

        window.addEventListener("resize", onResize);

        return () => window.removeEventListener("resize", onResize);
    }, []);

    const isPC = (): boolean => {
        if (typeof window === "undefined") return true;

        return window.innerWidth > 768;
    }

    return (
        <Window id={Constants.SERVICES_WINDOW_MAIN_PAGE_ID} className={styles.servicesWindow}>
            <AppearanceAnimation 
                initialPosition={Constants.BASE_APPEARANCE_ANIMATION.clone()}
                delay={500} 
                style={{ width: "100%" }}>
                <h2 className={styles.servicesTitle}> 
                    {t("servicesWindowInMainPage.title")}
                </h2>
            </AppearanceAnimation> 
            
            <AppearanceAnimation  
                initialPosition={new TranslateOnAxis(5, "rem", "X")}
                delay={750} 
                duration={0.35} 
                style={{ width: "100%" }}>
                <Swiper
                    ref={swiperElementRef}
                    direction={"horizontal"}
                    slidesPerView={"auto"}
                    spaceBetween={spaceBetween}
                    centeredSlides
                    watchSlidesProgress
                    initialSlide={isPC() ? 1 : 0}
                    className={styles.servicesSwiper}>

                    {getServicesCollectionForMainPage(t).map((item, index) => (
                        <SwiperSlide key={index} style={{ width: swiperSlideWidth }}>
                            <Link 
                                href={`/services${createHashLink(item.title)}`}
                                className={styles.servicesSwiperItem} 
                                style={{
                                    backgroundImage: `url(${getStaticFile(item.imgSrc)})`
                                }}>
                                <p className={styles.servicesSwiperItemDescription}>
                                    {trimWithDots(item.description, 25)}
                                </p>

                                <h3 className={styles.servicesSwiperItemTitle}>
                                    {addLineBreaks(item.title)}
                                </h3>

                                <div className={styles.serviceSwiperItemButton}>
                                    <Arrow className={styles.serviceSwiperItemButtonArrowSvg} />
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}
                    
                    <SwiperSlide style={{ width: swiperSlideWidth }}>
                        <Link 
                            href="/services" 
                            className={styles.servicesSwiperLastItem}>
                            
                            <p className={styles.servicesSwiperLastItemDescription}>
                                {t("servicesWindowInMainPage.swiperLastItemDescription")}
                            </p>

                            <h3 className={styles.servicesSwiperLastItemTitle}>
                                {t("servicesWindowInMainPage.swiperLastItemTitle")}
                            </h3>

                            <div className={styles.serviceSwiperLastItemButton}>
                                <Arrow className={styles.serviceSwiperLastItemButtonArrowSvg} />
                            </div>
                        </Link>
                    </SwiperSlide>
                </Swiper>
            </AppearanceAnimation>
        </Window>
    );
}

export default ServicesWindow;