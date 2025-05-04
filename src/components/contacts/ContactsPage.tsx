"use client";

import ContactsWindow from "@/components/general/ContactsWindow/ContactsWindow";
import ScrollIndicator from "@/components/general/ScrollIndicator/ScrollIndicator";
import Constants from "@/constants";
import Header from "@/scripts/header";
import { useEffect } from "react";

export default function ContactsPage() {

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
        <div id={Constants.CONTACTS_PAGE_ID}>
            <ScrollIndicator />
                
            <ContactsWindow sticky={false} />
        </div>
    );
}