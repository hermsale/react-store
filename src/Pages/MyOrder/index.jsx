import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import Layout from "../../Components/Layout"
import OrderCard from "../../Components/OrderCard";
import { totalPrice } from "../../utils";

import { useLocation, useParams } from "react-router-dom";

function MyOrder() {
  const context = useContext(ShoppingCartContext);
  
  
  const location = useLocation();
  console.log('el location es ',location);
  const params = useParams()
  const id = parseInt(params.id);
  console.log('el id es', id)

  const orderId = context.getOrder(id);
  
  // si no hay nada en el params, mostramos lo que haya aca 
  let myOrderLast;
  // si hay algo en el params, obtendra un id, por ende podemos mostrar lo que haya en ese orderId
  let myOrder;
  // este calculadorTotal es para cuando hay algo en myOrderLast 
  let calculatorTotal;

  calculatorTotal =  <span className='font-medium text-2xl text-right mr-5'>Total ${totalPrice(context.lastCartProducts)}</span>

  // nos fijamos si hay algun producto con el Id que se obtiene por params
  if(!orderId){
      myOrderLast = 
        context.order?.slice(-1)[0].products.map(product =>(
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            imgUrl={product.images}
            price={product.price}
            quantity={product.quantity}
          />
        ))
    
  }else{
    { 
      myOrder = 
          orderId.products.map(product =>(
        <OrderCard
          key={product.id}
          id={product.id}
          title={product.title}
          imgUrl={product.images}
          price={product.price}
          quantity={product.quantity}
        />
      ))
    }
  }
        
    return (
      <Layout>
       
          <h1 className="text-2xl font-bold mb-2">MyOrder Last</h1>
          <div className='flex flex-col w-1/2 border my-2 p-2 rounded-lg'>
          { myOrderLast } { myOrderLast && calculatorTotal }
          { myOrder }
        </div>
      </Layout>
    )
  
}
  export default MyOrder
  