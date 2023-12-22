import { useCallback, useEffect, useState } from 'react';

const useHeight = (elementRef, isLoaded) => {
    const [height, setHeight] = useState(null);

    const updateHeight = useCallback(() => {
        if (isLoaded && elementRef && elementRef.current) {
            const { height } = elementRef.current.getBoundingClientRect();
            setHeight(height);
        }
    }, [isLoaded, elementRef]);

    useEffect(() => {
        updateHeight();
        window.addEventListener("resize", updateHeight);
        return () => {
          window.removeEventListener("resize", updateHeight);
        };
      }, [updateHeight]);

    return height;
}

export default useHeight;