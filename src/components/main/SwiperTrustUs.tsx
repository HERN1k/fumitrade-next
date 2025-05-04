import { FC, useEffect, useState } from "react";
import styles from "./styles.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { onResizeForTrustUsWindow } from "@/scripts/mainPageScripts";
import "swiper/swiper-bundle.css";
import "@/app/globals.css";
import { ISlidesTrustUs } from "@/types";
import Constants from "@/constants";
import { getStaticFile } from "@/scripts/appWrapperScripts";

const SwiperTrustUs: FC = () => {

    const [spaceBetween, setSpaceBetween] = useState<number>(75);
    const [slideWidth, setSlideWidth] = useState<string>("15rem");

    const trustUsSlides: ISlidesTrustUs = {
        data: [
            {
                imgSrc: getStaticFile(Constants.COMPANY_MAIS_LOGO_IMAGE),
                url: "https://mais.ua/",
                alt: "Mais"
            },
            {
                imgSrc: getStaticFile(Constants.COMPANY_NEWELEVATOR_LOGO_IMAGE),
                url: "https://new-elevator.com.ua/",
                alt: "НОВИЙ ЕЛЕВАТОР ЛЛД"
            },
            {
                imgSrc: getStaticFile(Constants.COMPANY_AGRODAR_LOGO_IMAGE),
                url: "https://elevatorist.com/kompanii/264-agrodar-ltd/",
                alt: "АГРОДАР ЛТД"
            },
            {
                imgSrc: getStaticFile(Constants.COMPANY_HORS_LOGO_IMAGE),
                url: "https://latifundist.com/kompanii/245-hors/",
                alt: "Зернова компанія Хорс"
            },
            {
                imgSrc: getStaticFile(Constants.COMPANY_AGROCO_LOGO_IMAGE),
                url: "https://www.agroco.com.ua/",
                alt: "Агроко"
            },
            {
                imgSrc: getStaticFile(Constants.COMPANY_ALTERAAZTECA_LOGO_IMAGE),
                url: "https://alteragruma.com/",
                alt: "АЛЬТЕРА АЦТЕКА МІЛИНГ УКРАЇНА"
            },
            {
                imgSrc: getStaticFile(Constants.COMPANY_DUNAGRARIAN_LOGO_IMAGE),
                url: "https://dunagrarian.com/",
                alt: "ДУНАЙСЬКИЙ АГРАРІЙ"
            },
            {
                imgSrc: getStaticFile(Constants.COMPANY_PRODEXIM_LOGO_IMAGE),
                url: "https://prodexim.com.ua/",
                alt: "ПРОДЕКСІМ"
            },
            {
                imgSrc: getStaticFile(Constants.COMPANY_KIVSHOVATA_LOGO_IMAGE),
                url: "https://kivshovata-agro.com.ua/",
                alt: "КІВШОВАТА АГРО"
            },
            {
                imgSrc: getStaticFile(Constants.COMPANY_AGROTRADE_LOGO_IMAGE),
                url: "https://at2000.com.ua/",
                alt: "Агротрейд-2000"
            },
            {
                imgSrc: getStaticFile(Constants.COMPANY_RAMBURS_LOGO_IMAGE),
                url: "https://www.ramburs.com/", 
                alt: "Рамбурс"
            },
            {
                imgSrc: getStaticFile(Constants.COMPANY_NIBULON_LOGO_IMAGE),
                url: "https://www.nibulon.com/",
                alt: "НІБУЛОН"
            }
        ]
    };
    
    useEffect(() => {
        onResize();

        window.addEventListener("resize", onResize);

        return () => window.removeEventListener("resize", onResize);
    }, []);

    const onResize = () => onResizeForTrustUsWindow(setSpaceBetween, setSlideWidth);

    return (
        <Swiper
            slidesPerView={"auto"}
            spaceBetween={spaceBetween}
            centeredSlides={false}
            modules={[Pagination, Autoplay]}
            loop={true}
            pagination={{ clickable: true }}
            autoplay={{ delay: 750, disableOnInteraction: false }}
            className={styles.swiper}>
            {trustUsSlides.data.map((item, index) => (
                <SwiperSlide key={index} style={{ width: slideWidth }}>
                    <a className={styles.swiperItem} target="_blank" href={item.url}>
                        <img loading="lazy" src={item.imgSrc} alt={item.alt} className={styles.swiperImg} />
                    </a>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default SwiperTrustUs;