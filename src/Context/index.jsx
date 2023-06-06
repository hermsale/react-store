import React, { createContext } from "react";
import PropTypes from 'prop-types';

// creamos el contexto del carrito de compras
const ShoppingCartContext = createContext();
 
// export const ShoppingCartProvider = ({children}) => {
//     return (
//         <ShoppingCartContext.Provider>
//             {children}
//         </ShoppingCartContext.Provider>
//     )
// }


function ShoppingCartProvider({children}){
    // Shopping Cart item count ////////////////////////////////////
    const [count, setCount ] = React.useState(0)

    // Product Detail open/close //////////////////////////////////////////////////////
    const [isProductDetailOpen, setIsProductDetailOpen] = React.useState(false)

    // creamos las funciones para abrir y cerrar el aside. Para que simplemente exportemos la logica 
    const openProductDetail = () => setIsProductDetailOpen(prevState => !prevState);
    const closeProductDetail = () => setIsProductDetailOpen(false);

    // productDetail - show ProductDetail - recibirá un objeto
    const [productShow, setProductShow] = React.useState({})

    console.log(productShow);

    console.log(count);

    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productShow, 
            setProductShow
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

ShoppingCartProvider.propTypes = {
    children: PropTypes.node.isRequired
  };

export {ShoppingCartProvider, ShoppingCartContext}