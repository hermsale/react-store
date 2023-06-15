/**
 * This function calculates total price of a new order
 * @param {Array} products cartProduct: Array of Objects
 * @returns {numer} Total price
 */

// obtenemos la suma total de los productos contemplando su cantidad 
export const totalPrice = (products) => {
    let sum = 0
    products.forEach(product => sum += product.price * product.quantity)
    return sum
  }

  // obtenemos la cantidad total de productos contemplando los productos repetidos 
  export const totalProducts = (products) => {
    let total = 0
    products.forEach(product => total +=  product.quantity)
    return total
  }