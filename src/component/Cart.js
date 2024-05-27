import { clearCart } from "../utils/cartSlice"
import ItemList from "./Menu/ItemList"
import {useDispatch} from 'react-redux'

const CartComponent = () => {
//We have to subscribe our store

const dispatchCart = useDispatch()
const handleClearCart = () =>{
    dispatchCart(clearCart())
}
const cartItems = useSelector((store) => store.cart.items);

return (
<div className="text-center m-4 p-4">
    <h1 className="text-2xl font-bold">Cart</h1>
    <div className="w-6/12 m-auto">
        <button className="rounded-lg bg-black p-2 m-2" onClick={handleClearCart}>Clear Cart</button>
        {cartItems?.length ==0 && 
        (
            <h1>Your shopping bag is empty</h1>
        )}
        <ItemList items={cartItems} />
    </div>
</div>
)
}

export default CartComponent