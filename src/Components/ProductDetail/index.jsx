import './style.css';
import {  XCircleIcon  } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from "../../Context";
import { useContext } from 'react';


function ProductDetail(){

    const context = useContext(ShoppingCartContext)
   
    return(
        <aside // hidden es utilizado para ocultar un elemento de la interfaz
        className={`${context.isProductDetailOpen ?  'flex' : 'hidden'}  aside__productDetail flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center'>
                <h2 className='font-medium text-xl p-6'>Detail</h2>
                <XCircleIcon  className="h-6 w-6 text-red-600"
                 onClick={() => context.closeProductDetail()}
                ></XCircleIcon>
            </div>
        </aside>
    )
}

export {ProductDetail}