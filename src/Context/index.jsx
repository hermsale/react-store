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

    // almacenamos los productos que seleccionan, en un carrito de productos
    // será un array de objetos 
    const [cartProducts, setCartProducts] = React.useState([]);

    // console.log(cartProducts);

    // CheckOut Side Menu open/close
    const [isCheckOutSideMenuOpen, setIsCheckOutSideMenuOpen] = React.useState(false)

    // creamos las funciones para abrir y cerrar el aside. Para que simplemente exportemos la logica 
    const openCheckOutSideMenu = () => setIsCheckOutSideMenuOpen(prevState => !prevState);
    const closeCheckOutSideMenu = () => setIsCheckOutSideMenuOpen(false);

    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productShow, 
            setProductShow,
            cartProducts, 
            setCartProducts,
            isCheckOutSideMenuOpen,
            openCheckOutSideMenu,
            closeCheckOutSideMenu 
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

ShoppingCartProvider.propTypes = {
    children: PropTypes.node.isRequired
  };

export {ShoppingCartProvider, ShoppingCartContext}