import { Dispatch, SetStateAction } from "react";
import Constants from "@/constants";
import styles from "@/components/services/styles.module.css";
import { IEmailInputs, IParseServiceDescriptionProps, IServiceModalProps } from "@/types";
import { send } from "@emailjs/browser";
import Swal, { SweetAlertOptions } from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export const getStaticFile = (name: string) => Constants.STATIC_FILES_PATH + name;

export const addLineBreaks = (str: string) => {
    var result = str;

    result = result.length > 0 ? result.replace(/\t/g, " ") : "Null";
 
    return result;
};

export const createHashLink = (str: string) => {
    return "#" + encodeURIComponent(str);
}

export const trimWithDots = (str: string, maxLength: number) => {
    var result = str.length > maxLength ? str.slice(0, maxLength - 3) + "..." : str;

    return result.length > 0 ? result : "Null";
};

export const servicesWindowInView = (inView: boolean) => {
    setTimeout(() => {
        if (inView) {
            var title = document.getElementsByClassName(styles.navigationTitle)[0];
            var text = document.getElementsByClassName(styles.navigationText)[0];

            if (title && text) {
                title.classList.add(styles.textInView);
                text.classList.add(styles.textInView);
            }
        }
    }, 250);
}

export const serviceInView = (inView: boolean, container: HTMLDivElement | null) => {
    setTimeout(() => {
        if (inView && container) {
            container.classList.add(styles.serviceInView);
        }
    }, 100);
}

export const onServiceHover = (element: HTMLDivElement | null) => {
    if (element) {
        element.childNodes.forEach((child) => {
            var serviceButton: HTMLDivElement | null = null;

            if (child instanceof HTMLDivElement && child.classList.contains(styles.serviceFogging)) {
                child.classList.toggle(styles.serviceFoggingHover);
            }

            if (child instanceof HTMLDivElement && child.classList.contains(styles.serviceButton)) {
                child.classList.toggle(styles.serviceButtonHover);
                serviceButton = child;
            }

            serviceButton?.childNodes.forEach((buttonChild) => {
                if (buttonChild instanceof SVGSVGElement && buttonChild.classList.contains(styles.serviceButtonArrowSvg)) {
                    buttonChild.classList.toggle(styles.serviceButtonArrowSvgHover);
                }
            });
        });
    }
}

export const parseServiceDescription = (args: IParseServiceDescriptionProps) => {
    if (!args.description || args.description.length == 0) return;

    const lines = args.description
        .split("\t")
        .map(item => item.trim())
        .filter(item => item.length > 0);

    args.setMainDescription(lines[0] || "Null");

    if (lines.length > 1) {
        args.setDescriptionItems(new Array<string>(...lines.slice(1)));
    }
}

export const onResizeModal = (setDisplayPropery: Dispatch<SetStateAction<string>>) => {
    if (window.innerWidth > 1024) {
        setDisplayPropery("flex");
    } else {
        setDisplayPropery("none");
    }
}

export const onPreviousModalClick = (args: IServiceModalProps) => {
    setTimeout(() => {
        if (args.previousModalOpen) args.previousModalOpen();
    }, 100)
};

export const onNextModalClick = (args: IServiceModalProps) => {
    setTimeout(() => {
        if (args.nextModalOpen) args.nextModalOpen();
    }, 100)
};

export const onScrollServicesHeader = () => {
    var rootElement = document.getElementById(Constants.ROOT_CONTAINER_ID) as HTMLDivElement | null;
    var element = document.getElementsByClassName(styles.headerContainer)[0] as HTMLDivElement | null;

    if (element && rootElement) {
        element.style.transform = `translateY(-${rootElement.scrollTop / 2}px)`;
    }
}; 

export const sendEmailAsync = async (data: IEmailInputs, successMessage: SweetAlertOptions, errorMessage: SweetAlertOptions) => {
    try {
        var res = await send(
            Constants.EMAIL_SERVICE_ID, 
            Constants.EMAIL_TEMPLATE_ID, 
            { 
                ...data, 
                date: new Date().toLocaleString(),
                recipient: Constants.EMAIL_RECIPIENT
            },
            { 
                publicKey: Constants.EMAIL_PUBLIC_KEY 
            }
        );

        if (res.status !== 200) {
            throw new Error();
        }

        withReactContent(Swal).fire(successMessage);
    } catch (error: any) {
        console.warn(`[FAILED]\t${new Date().toLocaleString()}\t`, (error.text ? error.text : "Sending email"));

        withReactContent(Swal).fire(errorMessage);

        throw error;
    }
};