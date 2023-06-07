import './style.css';
import {  XCircleIcon  } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from "../../Context";
import { useContext } from 'react';


function ProductDetail(){

    const context = useContext(ShoppingCartContext)
    console.log('product show is', context.productShow)
   
    return(
        <aside // hidden es utilizado para ocultar un elemento de la interfaz
        className={`${context.isProductDetailOpen ?  'flex' : 'hidden'}  aside__productDetail flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center'>
                <h2 className='font-medium text-xl p-6'>Detail</h2>
                <XCircleIcon  className="h-6 w-6 text-red-600 cursor-pointer"
                 onClick={() => context.closeProductDetail()}
                ></XCircleIcon>
            </div>
            <figure className='px-6'>
                <img className='w-full h-full' src={context.productShow?.images && context.productShow?.images[0]} alt={context.productShow?.title} />
            </figure>
            <p className='flex flex-col p-6'>
                <span className='font-medium text-2xl'>${context.productShow.price}</span>
                <span className='font-medium text-md'>{context.productShow.title}</span>
                <span className='font-light text-sm'>{context.productShow.description}</span>
            </p>
        </aside>
    )
}

export {ProductDetail}