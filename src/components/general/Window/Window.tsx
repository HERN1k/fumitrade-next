"use client";

import { useEffect, useState, forwardRef } from "react";
import { IWindowProps } from "@/types";
import styles from "./styles.module.css";

const Window = forwardRef<HTMLDivElement, IWindowProps>(({ id, children, className = "", onceClassName = false }, ref) => {
    
    const [height, setHeight] = useState<number>(() => {
        if (typeof window === "undefined") return 300;
        
        const innerHeight = window.innerHeight;
        return innerHeight <= 0 ? 300 : innerHeight;
    });
  
    useEffect(() => {
        window.addEventListener("resize", handleResize);
    
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleResize = () => {
        setHeight(window.innerHeight);
    };

    return (
        <div ref={ref} id={id} className={onceClassName ? className : `${className} ${styles.window}`} style={{ minHeight: height }} suppressHydrationWarning>
            {children}
        </div>
    );
});

Window.displayName = "Window";

export default Window;