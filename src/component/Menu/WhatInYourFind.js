import { ITEM_IMG_CDN_URL } from "../Common/constnant"
import UseScrollLeftRight from "../../Hooks/useHorizontalScroll";
import ScrollLeftRight from "../Common/ScrollLeftRight";
const WhatInYourMind = ({items}) => {
  const { scrollContainerRef, scrollLeft, scrollRight, onScroll } = UseScrollLeftRight(); // Use the custom hook
    return (
        <>
         
          <div className="memu-title flex justify-between p-3">
          <ScrollLeftRight 
            title={`What's in your mind`}  
            onScrollLeft={()=>onScroll('left')}
            onScrollRight={()=>onScroll('right')}/>
          </div>
          <div className="offer-item-list">
            <div className="flex overflow-scroll" ref={scrollContainerRef}>
              {items.map((item, index) => (
                
                    <div className="pt-0 pl-4 pb-0 pr-0 w-full" key={`whatinyourmind-item-${index}`}>
                        <div className="relative">
                            <div className="flex w-36 h-[180px]">
                                <img src={ITEM_IMG_CDN_URL + item?.imageId} alt=""></img>
                            </div>
                        </div>
                    </div>
               
              ))}
            </div>
          </div>
        </>
    )
}

export default WhatInYourMind