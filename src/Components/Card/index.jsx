import { useContext } from "react";
import {  PlusIcon  } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from "../../Context";

function Card({...data}) {

    const context = useContext(ShoppingCartContext)

    // abrir el aside y asignar el ProductDetail seleccionado
    const showProduct = (data) =>{
        context.openProductDetail()
        context.setProductShow(data);
    }

    // agregar +1 al contador de productos y concatenar con spreed operator lo que ya habia en el array + productDetail
    const addProductsToCart = (productData) =>{
        context.setCount(context.count + 1)
        context.setCartProducts([...context.cartProducts, productData]);
    }
    
    return (
        <div
         className='bg-slate-400 cursor-pointer w-56 h-60 rounded-lg px-1 pt-0.5' 
            >
            <figure className='relative mb-2 w-full h-4/5' >
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
                    {data.category.name}</span>
                <img className="w-full h-full object-cover  rounded-lg" 
                src={data.images[0]}
                 alt={data.title} 
                 onClick={() => showProduct(data)}
                />
                <div 
                    className="absolute top-0 right-0 flex justify-center hover:bg-green-200 items-center
                                bg-white w-6 h-6 rounded-full  m-2 p-1"
                                onClick={() => addProductsToCart(data)} 
                >
                    <PlusIcon
                     className="h-6 w-6 text-black"    
                    />
                </div>
            </figure>
            <p className="flex justify-between"  onClick={() => showProduct(data)} >
            <span className="text-sm font-light">{data.title}</span>
            <span className="text-lg font-medium">${data.price}</span>
            </p>
        </div>
    )
}

export default Card
