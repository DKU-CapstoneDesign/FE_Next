import { useEffect, useState } from 'react';
import { debounce } from 'lodash';

export function useScroll() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => { 
        const handleScroll = debounce(() => {
            setScrollY(window.scrollY);
        }, 100); 

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return scrollY;
}