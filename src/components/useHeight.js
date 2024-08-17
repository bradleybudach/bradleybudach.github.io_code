import { useCallback, useEffect, useState } from 'react';

const useHeight = (elementRef) => {
    const [height, setHeight] = useState(null);

    const updateHeight = useCallback(() => { // get height of target element
      if (elementRef && elementRef.current) {
          const { height } = elementRef.current.getBoundingClientRect();
          setHeight(height);
      }
    }, []);

    useEffect(() => {
      if (!elementRef.current) return;

      const resizeObserver = new ResizeObserver(() => {
        updateHeight();
      });
      
      resizeObserver.observe(elementRef.current);
      return () => resizeObserver.disconnect(); // clean up 
      }, []);

    return height;
}

export default useHeight;