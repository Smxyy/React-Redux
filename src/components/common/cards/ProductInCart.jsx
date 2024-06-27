import React from 'react'
import { useDispatch } from 'react-redux'
import { decreaseQuantity, increaseQuantity } from '../../../redux/features/cart/cartSlice';

export default function ProductInCart({image, price , title, desc, id, qty}) {
  const dispatch = useDispatch();

//handle increase quantity
const handleIncreaseQuantity = () => {
    dispatch(increaseQuantity({id}));
}

//handle decrease quantity
const handleDecreaseQuantity = ()=> {
    dispatch(decreaseQuantity({id}));
}

return (
    <>
    <div className="flow-root">
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
              <div className="shrink-0">
                <img
                  alt={title || "Unknown"}
                  height="40"
                  src={image || "../src/assets/placeholder.png"}
                  width="32"
                  className="rounded-full"
                />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-[24px] font-medium text-gray-900 dark:text-white">{title || "Unknown Product"}</p>
                <p className="truncate text-sm text-gray-500 dark:text-gray-400">{desc || "No description"}</p>
                <div className='flex gap-2 mt-2'> 
                        <button onClick={() => handleDecreaseQuantity()} className='px-2 py-1 bg-slate-200 rounded-sm'>-</button>
                        <p className='px-2 py-1 bg-slate-200 rounded-sm'>{qty}</p>
                        <button onClick={()=> handleIncreaseQuantity()} className='px-2 py-1 bg-slate-200 rounded-sm'>+</button>
                </div>
              </div>             
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">${price? parseFloat(price * qty).toFixed(2) : "Unavailable"}</div>
            </div>
          </li>       
        </ul>
        <hr />
      </div>
    </>
  )
}
