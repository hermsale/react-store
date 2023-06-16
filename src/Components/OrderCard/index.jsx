import {  XCircleIcon  } from '@heroicons/react/24/solid'
import PropTypes from 'prop-types'
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';


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

      
    //   manipulamos el renderizado de el icono de borrar, ya que en la vista de MyOrder Last, no se debe poder borrar
      let renderXCircleIcon;
      if(handleDelete) {
        renderXCircleIcon = <XCircleIcon  className="h-6 w-6 text-black-600 cursor-pointer hover:text-red-600" onClick={() => handleDelete(id)}
            />
      }

    //   manipulamos el renderizado del totalPriceItem para que en la vista de MyOrder Last, se pueda visualizar el importe total
      let totalPriceItem;
      if(!context.count > 0){
        totalPriceItem = <div className='text-lg font-medium gap-2 mx-1'>
            <p className='flex font-light  mb-2 '>Importe</p>
            <p className='text-center'>{price*quantity}</p>           
        </div>;
      }

      //   manipulamos el renderizado del itemPrice para que en la vista de MyOrder Last, se pueda visualizar el importe de cada item 
    //   y si se encuentra en la vista de CheckOutSideMenu se vea solo el valor del item
      let itemPrice;
      if(!context.count){
        itemPrice = <div className='text-lg font-medium gap-2 mx-1'>
            <p className='flex font-light mb-2'>Unidad</p>
            <p className='text-center'>{price}</p>           
        </div>
      }else{
        itemPrice = <p className='text-lg font-medium gap-2 mx-1'>
                {price}
        </p>
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
        <div className='flex row-auto'>
            {itemPrice}
            {totalPriceItem}
            {renderXCircleIcon}
        </div>
    </div>
  )
}



export default OrderCard