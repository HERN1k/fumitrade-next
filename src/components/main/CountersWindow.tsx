"use client";

import { FC, ReactNode, useEffect, useState } from "react";
import Window from "@/components/general/Window/Window";
import Constants from "@/constants";
import styles from "./styles.module.css"
import { LineChart, ResponsiveContainer, Line, CartesianGrid } from "recharts";
import { useInView } from "react-intersection-observer";
import { halfArray } from "@/scripts/mainPageScripts";
import AppearanceAnimation from "@/components/general/AppearanceAnimation/AppearanceAnimation";
import { chartData } from "@/scripts/collections";
import { useTranslations } from "next-intl";
import Counter from "@/components/main/Counter";
import { usePathname } from "next/navigation";

const CountersWindow: FC = () => {

    const pathname = usePathname();

    const [locale, setLocale] = useState<string>("uk");
    const [charts, setCharts] = useState<ReactNode | null>(null);

    const t = useTranslations();

    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.9 });

    useEffect(() => {
        onResizeOrInView();

        var l = pathname.split("/")[1] as string;

        if (l !== "uk" && l !== "en") {
            l = "uk";
        }

        setLocale(l);

        window.addEventListener("resize", onResizeOrInView);
        
        return () => {
            window.removeEventListener("resize", onResizeOrInView);
        };
    }, [inView]);

    const onResizeOrInView = () => {
        if (inView) {
            setCharts(
                <ResponsiveContainer width="100%" height={isPC() ? "80%" : "100%"} className={styles.countersCharts}>
                    <LineChart data={isPC() ? chartData : halfArray(chartData)}>
                        <Line type="monotone" dataKey="x" stroke="#dcb426" strokeWidth={1} />
                        <Line type="monotone" dataKey="y" stroke="#dcb426" strokeWidth={1} />
                        <CartesianGrid strokeDasharray="3 3" />
                    </LineChart>
                </ResponsiveContainer> 
            );
        } else {
            setCharts(null);
        }
    }

    const isPC = (): boolean => {
        if (typeof window === "undefined") return true;

        return window.innerWidth > 768;
    }

    return (
        <Window id={Constants.COUNTERS_WINDOW_MAIN_PAGE_ID} className={styles.countersWindow}>
            { charts }

            <AppearanceAnimation 
                initialPosition={Constants.BASE_APPEARANCE_ANIMATION.clone()}
                delay={500} 
                style={{ height: "fit-content" }}>
                <h2 className={styles.countersTitle}>
                    {t("countersWindow.we_are_in_numbers")}
                </h2>
            </AppearanceAnimation>

            <AppearanceAnimation 
                initialPosition={Constants.BASE_APPEARANCE_ANIMATION.clone()}
                delay={500} 
                style={{ height: "fit-content" }} 
                threshold={0.5}>
                <div className={styles.countersContent}>
                    <div className={styles.counterContainer}>
                        <p className={styles.counterTitle}>
                            {t("countersWindow.years_on_the_market")}
                        </p>

                        <Counter 
                            min={0} 
                            max={30} 
                            timeout={1250}
                            className={styles.counterNumbers} />
                    </div>

                    <div className={styles.counterContainer}>
                        <p className={styles.counterTitle}>
                            {t("countersWindow.we_have_processed")}
                        </p>

                        <Counter 
                            min={0} 
                            max={205400} 
                            timeout={1250}
                            textAfter={locale === "uk" ? " т." : " t."}
                            className={styles.counterNumbers} />
                    </div>

                    <div className={styles.counterContainer}>
                        <p className={styles.counterTitle}>
                            {t("countersWindow.regular_customers")}
                        </p>

                        <Counter 
                            min={0} 
                            max={40} 
                            timeout={1250}
                            textAfter="+"
                            className={styles.counterNumbers} />
                    </div>

                    <div ref={ref} className={styles.counterContainer}>
                        <p className={styles.counterTitle}>
                            {t("countersWindow.percentage_of_successful_treatments")}
                        </p>

                        <Counter 
                            min={0} 
                            max={98} 
                            timeout={1250}
                            textAfter="%"
                            className={styles.counterNumbers} />
                    </div>

                    <div className={styles.counterContainer}>
                        <p className={styles.counterTitle}>
                            {t("countersWindow.eco_friendly_solutions")}
                        </p>

                        <Counter 
                            min={0} 
                            max={20} 
                            timeout={1500}
                            textAfter="+"
                            className={styles.counterNumbers} />
                    </div>

                    <div className={styles.counterContainer}>
                        <p className={styles.counterTitle}>
                            {t("countersWindow.percentage_of_satisfied_customers")}
                        </p>

                        <Counter 
                            min={0} 
                            max={100} 
                            timeout={1250}
                            textAfter="%"
                            className={styles.counterNumbers} />
                    </div>
                </div>
            </AppearanceAnimation>
        </Window>
    );
}

export default CountersWindow;