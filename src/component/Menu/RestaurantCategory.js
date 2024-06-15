//* It shpuel looping of catergoary and inside each caterogy called item list page
//*

import React, { useEffect, useState, useRef } from "react";
import { IMG_CDN_URL, ITEM_IMG_CDN_URL } from "../Common/constnant";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../../utils/cartSlice";
import ImageWithFallback from "../Common/ImageFallback";
import VegetarianSVG from "../Common/VegetarianSVG";
import NonVegetarianSVG from "../Common/NonVegetarianSVG";
import CustomizeItem from "./CustomizeItem";

export default RestaurantCategory = ({ item, setShowIndex, showItems }) => {
  //! const [showItems, setShowItems] = useState(false)
  //! Basically i dont want to give a power of show and collapse to the vmy category i want to pass
  //! to the my parent i.e we will called the setShowIndex of parent insid ethat will handle the collapse
  //* If it has own state then it is uncntroll component if you you have from parent state then it is controlled component
  const textContainerRef = useRef(null);
  const [showMoreLabel, setShowMoreLabel] = useState(false);
  const [open, setOpen] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false);
  const [animatedItem, setAnimatedItem] = useState(null);
 // let open = false;
  const dispatch = useDispatch();
  let cartItems = useSelector((store) => {
    return store.cart.items;
  });
  const handleAddItem = (item) => {
    setOpen(false);
    dispatch(addItem(item));
  };

  const handleItemMoreItem = (action, item) => {
    if (action == "add") {
      setIsRepeat(true);
      item.addons ? setOpen(true) : setOpen(false);
    } else {
      setIsRepeat(false);
      dispatch(removeItem(item));
    }
  };
  const handleClickOpen = (item) => {
    if (item?.addons) {
      setOpen(true);
    } else {
      dispatch(addItem(item));
    }
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const textContainer = textContainerRef.current;
    if (textContainer.scrollWidth > textContainer.clientWidth) {
      setShowMoreLabel(true);
    } else {
      setShowMoreLabel(false);
    }
  }, []);

  return (
    <React.Fragment key={`restaurant-category-${item?.id}`}>
      <div className="flex p-3">
        <div className="w-9/12 nline-block justify-between cursor-pointer menuitem-details">
          {item?.isVeg ? <VegetarianSVG /> : <NonVegetarianSVG />}
          <span className="text-lg font-bold text-slate-600">{item?.name}</span>
          <div className="py-2">
            <span>
              ₹{item?.price ? item.price / 100 : item?.defaultPrice / 100}
            </span>
          </div>
          <div className="relative">
            <div
              ref={textContainerRef}
              className="w-[93%] absolute overflow-hidden text-ellipsis whitespace-nowrap text-base font-extralight"
            >
              {item?.description}
            </div>
            {showMoreLabel && (
              <span className="absolute top-0 bottom-0 right-0 text-base font-bold">
                more
              </span>
            )}
          </div>
        </div>
        <div
          className="flex w-3/12 justify-between text-left menuitem-wraper ml-16"
          key={item.id}
        >
          <button className="w-[156px] h-[144px] rounded-xl">
            <ImageWithFallback
              src={ITEM_IMG_CDN_URL + item.imageId}
              fallbackSrc="default-error.jpg"
              alt={item.imageId}
              className="w-full h-full rounded-xl"
            />
            <div className="relative left-1/2 bottom-7 -translate-x-2/4	 z-[1]">
              <div className="relative ">
                {cartItems &&
                cartItems[item.id] &&
                cartItems[item.id].count > 0 ? (
                  <button className="text-[#1BA672] font-bold text-base relative inline-flex items-center h-10 w-32 border border-solid	border-slate-300 rounded-lg bg-white justify-around">
                    <span onClick={() => handleItemMoreItem("minus", item)}>
                      -
                    </span>
                    <span
                      style={{
                        transform: "translateY(0px)",
                        transition: "none 0s ease 0s",
                      }}
                      className={``}
                    >
                      {cartItems[item.id].count}{" "}
                    </span>
                    <span onClick={() => handleItemMoreItem("add", item)}>
                      +
                    </span>
                  </button>
                ) : (
                  <button
                    className="text-[#1BA672] relative inline-flex items-center h-10 w-32 border border-solid	border-slate-300 rounded-lg bg-white justify-center"
                    onClick={() => handleClickOpen(item)}
                  >
                    Add +
                  </button>
                )}
                <span className="text-sm font-extralight text-gray-500">
                  {item.addons ? `customize` : ""}
                </span>{" "}
              </div>
            </div>
          </button>
        </div>
      </div>
      <div className="border-b-[0.5px] h-1 mx-0 my-3 p-3"></div>
      {open && (
        <CustomizeItem
        key={`customize-index-${item?.id}`}
          item={item}
          isRepeat={isRepeat}
          isOpen={open}
          handleClose={handleClose}
          handleAddItem={(addonItem) => handleAddItem(addonItem)}
        />
      )}
    </React.Fragment>
  );
};
