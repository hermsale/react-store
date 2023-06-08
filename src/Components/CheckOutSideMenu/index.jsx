import {  XCircleIcon  } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from "../../Context";
import { useContext } from 'react';

import './style.css';

function CheckOutSideMenu(){

    const context = useContext(ShoppingCartContext)
    // console.log('product show is', context.productShow)
   
    return(
        <aside // hidden es utilizado para ocultar un elemento de la interfaz
        className={`${context.isCheckOutSideMenuOpen ?  'flex' : 'hidden'}  aside__checkOutSideMenu transition-all duration-300 flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center'>
                <h2 className='font-medium text-xl p-6'>My Order</h2>
                <XCircleIcon  className="h-6 w-6 text-red-600 cursor-pointer"
                 onClick={() => context.closeCheckOutSideMenu()}
                ></XCircleIcon>
            </div>
        </aside>
    )
}

export {CheckOutSideMenu}