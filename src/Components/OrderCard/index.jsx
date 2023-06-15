import {  XCircleIcon  } from '@heroicons/react/24/solid'
import PropTypes from 'prop-types'
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import { totalPrice } from '../../utils';


function OrderCard({ title, imgUrl, price, quantity, handleDelete, id }) {
    const context = useContext(ShoppingCartContext);
    // correcion para que no salga error en el pasaje de props
    OrderCard.propTypes = {
        title: PropTypes.node.isRequired,
        imgUrl: PropTypes.node.isRequired,
        price: PropTypes.node.isRequired,
        quantity: PropTypes.node.isRequired,
        id: PropTypes.node.isRequired,
        handleDelete: PropTypes.func,
      }

      
      let renderXCircleIcon;
      if(handleDelete) {
        renderXCircleIcon = <XCircleIcon  className="h-6 w-6 text-black-600 cursor-pointer hover:text-red-600" onClick={() => handleDelete(id)}
            />
      }

      let totalPriceItem;
      if(!context.count > 0){
        totalPriceItem = price*quantity;
      }


  return (
    <div className="flex justify-between items-center mx-1 hover:bg-slate-200 p-1 rounded-lg">
        <div className='flex items-center gap-2 mb-1'>
            <p>{quantity}</p>
            <figure className='w-20 h-20'>
                <img className='w-full h-full rounded-lg object-cover' src={imgUrl} alt={title} />
            </figure>
            <p className='text-sm font-light '>
                {title}
            </p>
        </div>
        <div className='flex flex-row'>
            <p className='text-lg font-medium gap-2 mx-1'>
                <p className='font-light'>Unidad</p>
                <p>{price}</p>
            </p>
            <p className='text-lg font-medium gap-2 mx-1'>
                <p className='font-light'>Importe</p> 
                <p>{totalPriceItem}</p>
            </p>
        </div>
            {renderXCircleIcon}
    </div>
  )
}



export default OrderCard