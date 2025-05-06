"use client";

import Window from "@/components/general/Window/Window";
import Constants from "@/constants";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import { useEffect } from "react";
import "../app/globals.css";

const montserrat = Montserrat({
    variable: "--font-geist-sans",
    subsets: ["latin"],
}); 

export default function NotFound() {

    useEffect(() => { 
        var loader = document.getElementById(Constants.GENERAL_LOADING_ID);
            
        if (loader) {
            loader.style.opacity = "0";
        }

        setTimeout(() => {
            if (!loader) return;
    
            loader.style.display = "none";
        }, 300);
    }, []);

    return (
        <Window id={Constants.NOT_FOUND_PAGE_ID}>
            <div className={`${montserrat.variable} container`}>
                <img src={"/static/general/not-found.svg"} alt="Not Found" className="image" />
                <p className="message">Page not found</p>
                <p className="description">You may have entered the wrong address<br />or the page has been moved</p>
                <Link href="/uk" className="homeButton">To the main page</Link>
            </div>
        </Window>
    );
}