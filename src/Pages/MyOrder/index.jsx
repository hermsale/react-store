import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import Layout from "../../Components/Layout"
import OrderCard from "../../Components/OrderCard";
import { totalPrice } from "../../utils";

function MyOrder() {

 

  const context = useContext(ShoppingCartContext);
  
    return (
      <Layout>
        
          <h1 className="text-2xl font-bold mb-2">MyOrder Last</h1>
          <div className='flex flex-col border my-2 p-2 rounded-lg'>
          { 
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
          }
        <span className='font-medium text-2xl text-right mr-5'>Total ${totalPrice(context.lastCartProducts)}</span>
        </div>
      </Layout>
    )
  
}
  export default MyOrder
  