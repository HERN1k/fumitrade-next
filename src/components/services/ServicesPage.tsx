"use client";

import { useEffect, useState } from "react";
import { IServiceProps } from "@/types";
import Constants from "@/constants";
import styles from "@/components/services/styles.module.css";
import { transitionToHash } from "@/scripts/appWrapperScripts";
import Header from "@/scripts/header";
import { useTranslations } from "next-intl";
import ScrollIndicator from "@/components/general/ScrollIndicator/ScrollIndicator";
import ServicesHeader from "@/components/services/ServicesHeader";
import Service from "@/components/services/Service";

export default function ServicesPage() {

    const t = useTranslations();
 
    const [modals, setModals] = useState<Record<string, boolean>>({
        service_1: false,
        service_2: false,
        service_3: false,
        service_4: false,
        service_5: false
    });

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

        transitionToHash(window.location.hash, servicesCollection, "title")?.click();
    }, []);

    const openModal = (serviceKey: string): void => {
        setModals(prev => Object.fromEntries(Object.keys(prev)
            .map(key => serviceKey === key ? [key, true] : [key, false])));
    };

    const closeModal = (): void => {
        setModals(prev => Object.fromEntries(Object.keys(prev).map(key => [key, false])));
    };

    const servicesCollection: IServiceProps[] = [
        {
            id: Constants.SERVICES_PAGE_SERVICE_1_ID,
            imgSrc: Constants.SERVICES_PAGE_SERVICE_1_IMAGE,
            title: t("servicesWindow.services.service_1.title"),
            description: t("servicesWindow.services.service_1.description"),
            modalOpen: modals.service_1,
            closeModal: closeModal,
            previousModalOpen: () => openModal("service_5"),
            thisModalOpen: () => openModal("service_1"), 
            nextModalOpen: () => openModal("service_2") 
        },
        {
            id: Constants.SERVICES_PAGE_SERVICE_2_ID,
            imgSrc: Constants.SERVICES_PAGE_SERVICE_2_IMAGE,
            title: t("servicesWindow.services.service_2.title"),
            description: t("servicesWindow.services.service_2.description"),
            modalOpen: modals.service_2,
            closeModal: closeModal,
            previousModalOpen: () => openModal("service_1"),
            thisModalOpen: () => openModal("service_2"), 
            nextModalOpen: () => openModal("service_3")
        },
        {
            id: Constants.SERVICES_PAGE_SERVICE_3_ID,
            imgSrc: Constants.SERVICES_PAGE_SERVICE_3_IMAGE,
            title: t("servicesWindow.services.service_3.title"),
            description: t("servicesWindow.services.service_3.description"),
            modalOpen: modals.service_3,
            closeModal: closeModal,
            previousModalOpen: () => openModal("service_2"),
            thisModalOpen: () => openModal("service_3"), 
            nextModalOpen: () => openModal("service_4")
        },
        {
            id: Constants.SERVICES_PAGE_SERVICE_4_ID,
            imgSrc: Constants.SERVICES_PAGE_SERVICE_4_IMAGE,
            title: t("servicesWindow.services.service_4.title"),
            description: t("servicesWindow.services.service_4.description"),
            modalOpen: modals.service_4,
            closeModal: closeModal,
            previousModalOpen: () => openModal("service_3"),
            thisModalOpen: () => openModal("service_4"), 
            nextModalOpen: () => openModal("service_5")
        },
        {
            id: Constants.SERVICES_PAGE_SERVICE_5_ID,
            imgSrc: Constants.SERVICES_PAGE_SERVICE_5_IMAGE,
            title: t("servicesWindow.services.service_5.title"),
            description: t("servicesWindow.services.service_5.description"),
            modalOpen: modals.service_5,
            closeModal: closeModal,
            previousModalOpen: () => openModal("service_4"),
            thisModalOpen: () => openModal("service_5"), 
            nextModalOpen: () => openModal("service_1")
        }
    ];

    return (
        <div id={Constants.SERVICES_PAGE_ID}>
            <ScrollIndicator />
                
            <ServicesHeader />  

            <div className={styles.servicesContent}>
                <div className={styles.servicesContainer}>
                    {servicesCollection.map((item, index) => 
                        <Service 
                            key={index}
                            id={item.id}
                            imgSrc={item.imgSrc}
                            title={item.title}
                            description={item.description}
                            closeModal={item.closeModal}
                            modalOpen={item.modalOpen}
                            previousModalOpen={item.previousModalOpen}
                            thisModalOpen={item.thisModalOpen} 
                            nextModalOpen={item.nextModalOpen} />)}
                </div>
            </div>
        </div>
    );
}