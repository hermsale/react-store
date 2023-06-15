import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import Layout from "../../Components/Layout"
import OrderCard from "../../Components/OrderCard";

function MyOrder() {

 

  const context = useContext(ShoppingCartContext);

    return (
      <Layout>
        
          Hola MyOrder
          <div className='flex flex-col w-80'>
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
        </div>
      </Layout>
    )
  
}
  export default MyOrder
  