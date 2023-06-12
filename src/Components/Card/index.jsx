import { useContext } from "react";
import {  PlusIcon, CheckIcon  } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from "../../Context";

function Card({...data}) {

    const context = useContext(ShoppingCartContext)

    // abrir el aside y asignar el ProductDetail seleccionado
    const showProduct = (data) =>{
        console.log(data);
        console.log('se pulso shoProduct');
        context.openProductDetail()
        context.closeCheckOutSideMenu();
        context.setProductShow(data);
    }

    // render function 
    const renderIcon = (title) => {
        // verificamos si encuentra el producto en el carrito de compras 
    
        const productCart = context.cartProducts.find(item => item.title === title);
            if(productCart){ 
                return(
                    <div 
                    className="absolute top-0 right-0 flex justify-center hover:bg-green-200 items-center
                                bg-lime-500 w-6 h-6 rounded-full  m-2 p-1"
                                onClick={(event) => addProductsToCart(event, data)} 
                    >
                    <CheckIcon className="h-6 w-6 text-black"/>
                    </div>
                )
            }else{
                return(
                    <div 
                    className="absolute top-0 right-0 flex justify-center hover:bg-green-200 items-center
                                bg-white w-6 h-6 rounded-full  m-2 p-1"
                                onClick={(event) => addProductsToCart(event, data)} 
                    >
                    <PlusIcon className="h-6 w-6 text-black"/>
                    </div>
                )
            }
        
        
       }

    // agregar +1 al contador de productos y concatenar con spreed operator lo que ya habia en el array + productDetail
    const addProductsToCart = (event, productData) =>{
        
        console.log('se pulso addProductsToCart');
        event.stopPropagation();
        // sumamos al contador del carrito general
        context.setCount(context.count + 1)

        // verificamos que haya una coincidencia de que ya exista el producto
        const productExists = context.cartProducts.some(item => item.title === productData.title)

        // si el producto existe 
        if(productExists){
            // buscamos el producto y lo guardamos en productCart
            console.log('se encuentra este elemento');
            const productCart = context.cartProducts.find(item => item.title === productData.title);
            
            console.log(productCart.quantity);
            productCart.quantity += 1; 

            // mostramos el carro de compras con el valor quantity actualizado
            context.setProductShow(productCart);
        }else{
            productData.quantity = 1; 
            // realizamos la primera carga del producto en el carro de compras 
            context.setCartProducts([...context.cartProducts, productData]);
            console.log(productData.quantity);
            console.log('producto agreado');
        }
        context.openCheckOutSideMenu();
        context.closeProductDetail()
    }
    
    return (
        <div
         className='bg-slate-400 cursor-pointer hover:bg-slate-200 w-56 h-60 rounded-lg px-1 pt-0.5' 
            >
            <figure className='relative mb-2 w-full h-4/5' onClick={() => showProduct(data)}>
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
                    {data.category.name}</span>
                <img className="w-full h-full object-cover  rounded-lg" 
                src={data.images[0]}
                 alt={data.title} 
                />
                {renderIcon(data.title)}
            </figure>
            <p className="flex justify-between"  onClick={() => showProduct(data)} >
            <span className="text-sm font-light">{data.title}</span>
            <span className="text-lg font-medium">${data.price}</span>
            </p>
        </div>
    )
}

export default Card
