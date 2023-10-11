import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        const scrollOptions = {
            top: 0,
            behavior: 'smooth'
        };

        window.scrollTo(scrollOptions);
    }, [pathname]);

    return null;
};

export default ScrollToTop;
