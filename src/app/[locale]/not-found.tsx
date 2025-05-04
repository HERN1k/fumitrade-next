import Constants from "@/constants";
import Window from "@/components/general/Window/Window";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { Montserrat } from "next/font/google";
import "../globals.css";

const montserrat = Montserrat({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});   

export default function NotFound() {

    const t = useTranslations();

    return (
        <Window id={Constants.NOT_FOUND_PAGE_ID}>
            <div className={`${montserrat.variable} container`}>
                <img 
                    src={"/static/general/not-found.svg"} 
                    alt="Not Found" 
                    className="image"
                />
                <p className="message">{t("notFoundWindow.page_not_found")}</p>
                <p className="description">
                    {t("notFoundWindow.you_may_have_entered_the_wrong_address") + " "}<br />
                    {t("notFoundWindow.or_the_page_has_been_moved")}
                </p>
                <Link href="/uk" className="homeButton">
                    {t("notFoundWindow.to_the_main_page")}
                </Link>
            </div>
        </Window>
    );
}