import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname,hash } = useLocation();

    useEffect(() => {
        if (!hash) { // Conflit avec ancre HashLink ds le Header et Home
            setTimeout(() => { 
            window.scrollTo(0, 0); 
        },50);
        }
    }, [pathname, hash]);

    return null;
};

export default ScrollToTop;
