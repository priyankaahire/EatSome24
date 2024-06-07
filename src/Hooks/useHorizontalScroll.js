import { useRef } from 'react';

const UseScrollLeftRight = () => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = Math.max(
        0,
        scrollContainerRef.current.scrollLeft - 100
      );
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const scrollLeft = scrollContainerRef.current.scrollLeft || 0;
      scrollContainerRef.current.scrollLeft = scrollLeft + 100;
    }
  };

  const onScroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollLeft = scrollContainerRef.current.scrollLeft || 0;
      if (direction === 'left') {
        scrollContainerRef.current.scrollLeft = Math.max(0, scrollLeft - 100);
      } else if (direction === 'right') {
        scrollContainerRef.current.scrollLeft = scrollLeft + 100;
      }
    }
  };

  return { scrollContainerRef, scrollLeft, scrollRight, onScroll };
};

export default UseScrollLeftRight;
