import { FC } from "react";
import { IKnowledgeBaseItem } from "@/types";
import styles from "./styles.module.css";
import Constants from "@/constants";
import { getStaticFile } from "@/scripts/mainPageScripts";
import { copyToClipboard } from "@/scripts/appWrapperScripts";
import { useTranslations } from "next-intl";

const KnowledgeItem: FC<{ args: IKnowledgeBaseItem }> = ({ args }) => {

    const t = useTranslations();

    const copyUrl = () => {
        copyToClipboard( 
            `section${args.id}`,
            {
                title: <p className={styles.swalTitle}>{t("servicesWindow.modal.swalSuccessTitle")}</p>,
                icon: "success",
                background: "var(--color-modal-bg)",
                timer: 1250,
                showConfirmButton: false
            },
            { 
                title: <p className={styles.swalTitle}>{t("servicesWindow.modal.swalErrorTitle")}</p>,
                icon: "error",
                background: "var(--color-modal-bg)",
                timer: 1250,
                showConfirmButton: false
            }
        );
    }

    return (
        <div  
            id={`#section${args.id}`} 
            key={args.id}
            className={styles.itemContainer}>
            <h2 className={styles.itemTitle}>
                <div
                    className={styles.shareSvg}
                    onClick={copyUrl}
                    style={{ backgroundImage: `url(${getStaticFile(Constants.LINK_IMAGE)})` }} />
                {args.title}
            </h2>
            
            <p className={styles.itemText} dangerouslySetInnerHTML={{ __html: args.text }} />
        </div>
    );
}

export default KnowledgeItem;