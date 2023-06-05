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
    // contador de items en el carrito
    const [count, setCount ] = React.useState(0)

    console.log(count);

    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

ShoppingCartProvider.propTypes = {
    children: PropTypes.node.isRequired
  };

export {ShoppingCartProvider, ShoppingCartContext}