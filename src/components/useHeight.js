import { useCallback, useEffect, useRef, useState } from 'react';

const useHeight = (elementRef) => {
    const [height, setHeight] = useState(null);
    const pageWidth = useRef(0);

    const updateHeight = useCallback(() => { // get height of target element
        if (elementRef && elementRef.current && window.innerWidth !== pageWidth.current) {
            pageWidth.current = window.innerWidth;
            const { height } = elementRef.current.getBoundingClientRect();
            setHeight(height);
        }
    }, [elementRef, pageWidth]);

    useEffect(() => {
        updateHeight();

        // Event listeners:
        window.addEventListener("resize", updateHeight); // adjust height on resize
        window.addEventListener("load", updateHeight); // ensure page fully loads content before checking height

        // Remove Event Listeners:
        return () => {
          window.removeEventListener("resize", updateHeight);
          window.removeEventListener("load", updateHeight); 
        };
      }, [updateHeight]);

    return height;
}

export default useHeight;