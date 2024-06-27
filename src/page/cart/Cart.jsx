import ProductInCart from "../../components/common/cards/ProductInCart";
import { useDispatch, useSelector } from "react-redux";
import { removeAll, selectCardItems, selectTotalItems, selectTotalPrice } from "../../redux/features/cart/cartSlice";

export default function Cart() {
const totalItems = useSelector(selectTotalItems);
const cartItems = useSelector(selectCardItems);
var totalPrice = useSelector(selectTotalPrice);
const dispatch = useDispatch();

//handle remove all products
const handleRemoverAllProduct = () => { 
    dispatch(removeAll());
}

console.log("card item in cart", cartItems);
  return (
    <section className="flex justify-center mt-2">
        <section className="max-w-sm w-1/2 bg-slate-50 rounded-md p-5 overflow-scroll h-[80vh]">
            <div className="mb-4 flex items-center justify-between">
                <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                    Shopping Cart
                </h5>
                <button onClick = {()=> handleRemoverAllProduct()} className="text-sm font-medium text-red-600 hover:underline dark:text-cyan-500">
                Delete all
                </button>
            </div>
            {
                cartItems.map((cartItems, index) => {
                return <>

                    <ProductInCart 
                        key = {index}
                        image = {cartItems.image}
                        title = {cartItems.title}
                        desc = {cartItems.desc}
                        id = {cartItems.id}
                        price = {cartItems.price}
                        qty = {cartItems.qty}
                    />
</>
})
}
{cartItems.length > 0 && ( // Conditionally render subtotal only if there are items
          <section className="flex flex-row-reverse">
            <div className="mt-3 flex text-md leading-none text-gray-900 dark:text-white">
              <p>Subtotal ({totalItems} items):</p>
              <p className="font-bold">${totalPrice.toFixed(2)}</p>
            </div>
          </section>
        )}
      </section>
    </section>
  );
}
