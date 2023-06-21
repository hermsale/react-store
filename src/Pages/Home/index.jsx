import React from "react"

import Layout from "../../Components/Layout"
import Card from "../../Components/Card"
import { ProductDetail } from "../../Components/ProductDetail"

function Home() {

  const urlProducts = 'https://api.escuelajs.co/api/v1/products'
  const [items, setItems ] = React.useState(null)


  React.useEffect( () =>{
    fetch(urlProducts)
      .then(response => response.json())
      .then(data => 
        setItems(data)
      )     
  }, [])

  return (
      <Layout>
       
        <div className="mt-5 grid justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4  max-w-screen-lg ">
          {
            items?.map((item) =>(
              <Card 
              {...item}
              key={item.id}
              />
            ))
          }
        </div>
       
        <ProductDetail/>
      </Layout>
  )
}

export default Home
