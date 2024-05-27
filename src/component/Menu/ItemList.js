
// import { IMG_CDN_URL} from "../utils/constnant";
import { addItem } from "../../utils/cartSlice";
import {CDN_URL, IMG_CDN_URL} from "../../public/common/constnant"
import {useDispatch} from 'react-redux'
export default ItemList = ({ item }) => {

  const dispatchCart = useDispatch();
  const handleAddItem = (item) => {
      //Dispatch the action
      dispatchCart(addItem(item))
  };
  return (
    <div>
      {/* {items.map((item) => ( */}
        <div className="flex justify-between text-left" key={item.id}>
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.name}</span>
              <span>
                - ₹
                {item?.price
                  ? item.price / 100
                  : item?.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item?.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className="">
              <button className="" onClick={() => handleAddItem(item)}>Add +</button>
            </div>
            <img
              src={IMG_CDN_URL + item.imageId}
              className="w-full"
              alt={item.imageId}
            />
          </div>
        </div>
      {/* ))} */}
    </div>
  );
};
