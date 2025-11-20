import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop({ behavior = 'smooth' }) {
    const { pathname } = useLocation();

    useEffect(() => {
        // Desplaza al inicio cada vez que cambia la ruta
        try {
            window.scrollTo({ top: 0, left: 0, behavior });
        } catch {
            // Fallback para navegadores antiguos
            window.scrollTo(0, 0);
        }
    }, [pathname, behavior]);

    return null;
}

export default ScrollToTop;
