"use client";

import { useEffect } from "react";
import Constants from "@/constants";
import Header from "@/scripts/header";
import ScrollIndicator from "@/components/general/ScrollIndicator/ScrollIndicator";
import MainWindow from "@/components/main/MainWindow";
import DescriptionWindow from "@/components/main/DescriptionWindow";
import ServicesWindow from "@/components/main/ServicesWindow";
import CountersWindow from "@/components/main/CountersWindow";
import TrustUsWindow from "@/components/main/TrustUsWindow";
import ContactsWindow from "@/components/general/ContactsWindow/ContactsWindow";

export default function MainPage() {

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
    <div id={Constants.MAIN_PAGE_ID}> 
      <ScrollIndicator />

      <MainWindow />

      <DescriptionWindow />

      <ServicesWindow />

      <CountersWindow />

      <TrustUsWindow />

      <ContactsWindow />
    </div>
  );
}