// import { totalPrice, totalProducts } from "../../utils"

// import {  XCircleIcon  } from '@heroicons/react/24/solid'

// eslint-disable-next-line react/prop-types
function OrdersCard({date, totalProducts, totalPrice}) {

  
  return (
    <div className="flex justify-between p-2 items-center mb-3 border border-black rounded-lg w-full hover:bg-slate-200">
          <span className="mr-4">{date}</span>
          <span className="mr-4">Cantidad de productos: {totalProducts}</span>
          <span>Precio total: {totalPrice}</span>
    </div>
  )
}

{/* <XCircleIcon className="h-6 w-6 text-red-600 cursor-pointer"/> */}
export default OrdersCard