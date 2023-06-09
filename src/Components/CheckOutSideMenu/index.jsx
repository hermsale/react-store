import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { ShoppingCartContext } from "../../Context";

import OrderCard from '../OrderCard';
import './style.css';
import {  XCircleIcon  } from '@heroicons/react/24/solid'
import { totalPrice, totalProducts } from '../../utils';

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

        // concatenamos al order, el ultimo checkOut 
        context.setOrder([...context.order, orderToAdd]);

        // guardamos exclusivamente solo ultimo checkOut, para acceder a su informacion 
        context.setLastCartProducts(context.cartProducts);

        // ponemos en '0' el carrito y el contador 
        context.setCartProducts([]);
        context.setCount(0);
        context.closeCheckOutSideMenu();
    }
     

    let linkCheckOut;
    // si hay algo en el carrito, renderizamos el CheckOut 
    
        linkCheckOut = <Link to={'/my-orders/last'}>
                            <button disabled={!context.count>0} className={`${context.count > 0 ? 'bg-black' : 'bg-red-500'} text-white w-full rounded-lg mt-4  hover:bg-slate-200 hover:border border-black hover:text-black hover:font-medium `}
                            onClick={() => handleCheckout()}>¡CheckOut!</button>
                        </Link>
    

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
                <div className='px-6 flex flex-col '>
                    <div className='flex justify-between items-center'>
                      <span className='font-light'>Total:</span>  
                      <span className='font-medium text-2xl'>${totalPrice(context.cartProducts)}</span>
                    </div>
                        {linkCheckOut}
                </div>
        </aside>                
    )
}

export {CheckOutSideMenu}