import {  XCircleIcon  } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from "../../Context";
import { useContext } from 'react';

import './style.css';
import OrderCard from '../OrderCard';

function CheckOutSideMenu(){

    const context = useContext(ShoppingCartContext)
     
    return(
        <aside // hidden es utilizado para ocultar un elemento de la interfaz
        className={`${context.isCheckOutSideMenuOpen ?  'flex' : 'hidden'}  aside__checkOutSideMenu overflow-y-scroll transition-all duration-300 flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <div>
                    <XCircleIcon  className="h-6 w-6 text-red-600 cursor-pointer"
                    onClick={() => context.closeCheckOutSideMenu()}
                    />
                </div>
            </div>
                <div className='px-6'>
                    {
                        context.cartProducts.map(product => (
                            <OrderCard
                            key={product.id}
                            title={product.title}
                            imgUrl={product.images}
                            price={product.price}
                            quantity={product.quantity}
                            />
                            )

                        )
                    }
                </div>
           
        </aside>                
    )
}

export {CheckOutSideMenu}