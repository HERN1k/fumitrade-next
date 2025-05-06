"use client";

import AboutUsBestEmployee from "@/components/about-us/AboutUsBestEmployee";
import AboutUsText from "@/components/about-us/AboutUsText";
import ScrollIndicator from "@/components/general/ScrollIndicator/ScrollIndicator";
import Constants from "@/constants";
import Header from "@/scripts/header";
import { useEffect } from "react";

export default function AboutUsPage() {

    useEffect(() => { 
        var loader = document.getElementById(Constants.GENERAL_LOADING_ID);
        
        if (loader) {
          loader.style.opacity = "0";
        }

        Header.ensureVisible(); 

        setTimeout(() => {
          if (!loader) return;
    
          loader.style.display = "none";
        }, 300);
      }, []);

    return (
        <div id={Constants.ABOUT_US_PAGE_ID}>  
            <ScrollIndicator />

            <AboutUsText />

            <AboutUsBestEmployee />
        </div>
    );
}