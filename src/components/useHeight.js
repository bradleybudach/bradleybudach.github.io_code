import { useCallback, useEffect, useState } from 'react';

const useHeight = (elementRef) => {
    const [height, setHeight] = useState(null);

    const updateHeight = useCallback(() => { // get height of target element
        if (elementRef && elementRef.current) {
            const { height } = elementRef.current.getBoundingClientRect();
            setHeight(height);
        }
    }, [elementRef]);

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