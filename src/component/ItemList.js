
// import { IMG_CDN_URL} from "../utils/constnant";
import { addItem } from "../utils/cartSlice";
import {CDN_URL} from "../utils/constnant"
import {useDispatch} from 'react-redux'
export default ItemList = ({ items }) => {

  const dispatchCart = useDispatch();
  const handleAddItem = (item) => {
      //Dispatch the action
      dispatchCart(addItem(item))
  };
  return (
    <div>
      {items.map((item) => (
        <div className="flex justify-between text-left" key={item.card.info.id}>
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                - ₹
                {item?.card.info.price
                  ? item.card.info.price / 100
                  : item?.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className="">
              <button className="" onClick={() => handleAddItem(item)}>Add +</button>
            </div>
            <img
              src={CDN_URL + item.card.info.imageId}
              className="w-full"
            />
          </div>
        </div>
      ))}
    </div>
  );
};
