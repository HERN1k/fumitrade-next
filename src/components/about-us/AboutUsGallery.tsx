"use client";

import { FC, useEffect, useMemo, useState } from "react";
import Window from "@/components/general/Window/Window";
import Constants from "@/constants";
import styles from "./styles.module.css";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import { getStaticFile } from "@/scripts/appWrapperScripts";
import { IGalleryItem } from "@/types";
import justifiedLayout from "justified-layout";
import Image from "next/image";

const AboutUsGallery: FC = () => {

    const imgs: IGalleryItem[] = [
        { 
            id: 1, 
            src: getStaticFile("about-us/gallery/gallery_1.webp"), 
            alt: "gallery photo", 
            width: 2736,
            height: 3648,
            size: "3648-2736" 
        }
    ];

    const [windowHeight, setWindowHeight] = useState<number>(300);
    const [windowWidth, setWindowWidth] = useState<number>(600);
    const [lastWidth, setLastWidth] = useState<number>(0);

    const gallery = useMemo(() => {
        if (typeof window === "undefined") return;

        const currentWidth = window.innerWidth;
  
        if (Math.abs(currentWidth - lastWidth) < 50) {
            return;
        }

        setLastWidth(currentWidth);

        const aspectRatios = imgs.map((img) => img.height / img.width);

        const geometry = justifiedLayout(aspectRatios, {
            targetRowHeight: 400,
            containerWidth: window.innerWidth,
            widowLayoutStyle: "center",
            boxSpacing: 15,
            containerPadding: 20,
        });

        setWindowHeight(geometry.containerHeight);
    
        return imgs.map((img, i) => ({
            ...img,
            top: geometry.boxes[i].top,
            left: geometry.boxes[i].left,
            width: geometry.boxes[i].width,
            height: geometry.boxes[i].height,
        }));
    }, [windowWidth]);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <Window id={Constants.ABOUT_US_PAGE_GALLERY_ID} className={styles.galleryWindow}>
            <div style={{
                position: "relative",
                display: "block",
                overflow: "hidden",
                height: windowHeight,
                width: "100%",
                marginTop: "2rem",
                marginBottom: "2rem",
            }}>
                {gallery?.map((item) => (
                    <div
                        key={item.id}
                        style={{
                            position: "absolute",
                            display: "block",
                            top: `${item.top}px`,
                            left: `${item.left}px`,
                            width: `${item.width}px`,
                            height: `${item.height}px`,
                            overflow: "hidden",
                            borderRadius: "0.25rem",
                        }}
                    >
                        <Image
                            src={item.src}
                            alt={item.alt}
                            width={item.width}
                            height={item.height}
                            style={{
                            objectFit: "cover",
                            objectPosition: "center",
                            width: "100%",
                            height: "100%",
                            }}
                            loading="lazy" 
                        />
                    </div>
                ))}
            </div>
        </Window>
    );
}

export default AboutUsGallery;  