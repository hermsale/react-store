import {  XCircleIcon  } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from "../../Context";
import { useContext } from 'react';

import './style.css';
import OrderCard from '../OrderCard';
import { totalPrice, totalProducts } from '../utils';

function CheckOutSideMenu(){

    const context = useContext(ShoppingCartContext);


    const handleDelete = (id) =>{
        // busca el producto y lo guarda en productCart
        const productCart = context.cartProducts.find(item => item.id === id);
        if(productCart.quantity > 1){
            productCart.quantity -= 1;
            context.setCount(context.count - 1)
        }else{
            // guarda todos los productos menos el que se filtra
            const filteredProducts = context.cartProducts.filter(product => product.id != id);
            context.setCartProducts(filteredProducts);
            context.setCount(context.count - 1)
        }
        
    }

    // esta función crea un objeto orderToAdd que sera agregada al array Order 
    const handleCheckout = () =>{
        const orderToAdd = {
            date:new Date().toLocaleString(),
            products: context.cartProducts,
            totalProducts: context.cartProducts.length,
            // obtenemos el total de los productos contemplando la cantidad de c/u
            quantityProducts: totalProducts(context.cartProducts),
            totalPrice: totalPrice(context.cartProducts),
        }        

        context.setOrder([...context.order, orderToAdd]);
        context.setCartProducts([]);
        context.setCount(0);
        context.closeCheckOutSideMenu();
    }
     
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
                            handleDelete={handleDelete}
                            id={product.id}
                            />
                            )

                        )
                    }
                </div>
                <div className='px-6'>
                    <p className='flex justify-between items-center'>
                      <span className='font-light'>Total:</span>  
                      <span className='font-medium text-2xl'>${totalPrice(context.cartProducts)}</span>
                    </p>
                    <button className='bg-black py-3 text-white w-full rounded-lg hover:bg-slate-200 hover:border border-black hover:text-black hover:font-medium'
                     onClick={() => handleCheckout()}>¡CheckOut!</button>
                </div>
        </aside>                
    )
}

export {CheckOutSideMenu}