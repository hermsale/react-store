import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import Layout from "../../Components/Layout"
import { Link } from "react-router-dom"
import OrdersCard from "../../Components/OrdersCard"

function MyOrders() {

  const context = useContext(ShoppingCartContext)

  console.log(context.order);

    return (
      <Layout>
        <div className="flex items-center justify-between relative">
          <h1 className="text-2xl font-bold mb-3">My Orders</h1>
        </div>
        <div className="flex flex-col">
          {
            context.order.map((order, index)=>
              (
                <Link key={index} to={`/my-orders/${index}`}>
                  <OrdersCard
                    date={order.date}
                    totalPrice={order.totalPrice}
                    totalProducts={order.totalProducts}
                  />
                </Link>
              )
            )
          }
        </div>
       
      </Layout>
    )
  }
  
  export default MyOrders
  