
import { useRef } from "react";
import RestaurantCardComponent from "./RestaurantCard";
import { Link } from "react-router-dom";
import ScrollLeftRight from "../Common/ScrollLeftRight";
import UseScrollLeftRight from "../../Hooks/useHorizontalScroll";

const TopRestaurantCity = ({ items }) => {
//   const scrollContainerRef = useRef(null);
  const { scrollContainerRef, scrollLeft, scrollRight, onScroll } = UseScrollLeftRight(); // Use the custom hook

//   const onScroll = (direction) => {
//     if (scrollContainerRef.current) {
//       const scrollLeft = scrollContainerRef.current.scrollLeft || 0;
//       if (direction === 'left') {
//         scrollContainerRef.current.scrollLeft = Math.max(0, scrollLeft - 100);
//       } else if (direction === 'right') {
//         scrollContainerRef.current.scrollLeft = scrollLeft + 100;
//       }
//     }
//   };
  return (
    <>
     
        <div className="topitem-title flex justify-between p-3">
            <ScrollLeftRight 
            title={'Top Restaurant in City'}  
            onScrollLeft={()=>onScroll('left')}
            onScrollRight={()=>onScroll('right')}/>
        </div>
        <div className="topitem-item-list">
          <div className="flex overflow-scroll" ref={scrollContainerRef}>
            <div className="flex space-x-4 sm:space-x-8 lg:space-x-16">
              {items?.map((restaurant) => {
                return (
                  <Link
                    className="relative w-60 mx-2 my-2"
                    key={restaurant.info.id}
                    to={"/restaurant-details/" + restaurant.info.id}
                  >
                    {restaurant?.info?.id ? (
                      <RestaurantCardComponent {...restaurant.info} />
                    ) : null}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
     
    </>
  );
};

export default TopRestaurantCity;
