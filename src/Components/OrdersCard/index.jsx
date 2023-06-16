// import { totalPrice, totalProducts } from "../../utils"

import {  XCircleIcon  } from '@heroicons/react/24/solid'

function OrdersCard() {
  // {totalProducts, totalPrice}
  return (
    <div className="flex justify-between items-center mb-3 border border-black">
      <div>
        <span>01.01.23</span>
        {/* <span>{totalProducts}</span> */}
        {/* <span>{totalPrice}</span> */}
        <XCircleIcon/>
      </div>
    </div>
  )
}

export default OrdersCard