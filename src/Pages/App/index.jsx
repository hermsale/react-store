
// imports de React
import { useRoutes, BrowserRouter } from 'react-router-dom';

// Componentes
import { ShoppingCartProvider } from '../../Context';
import Home from '../Home/index'
import MyAccount from '../MyAccount/index'
import MyOrder from '../MyOrder/index'
import MyOrders from '../MyOrders/index'
import SignIn from '../SignIn/index'
import NotFound from '../NotFound';
import NavBar from '../../Components/NavBar';

// CSS
import './App.css'
import { CheckOutSideMenu } from '../../Components/CheckOutSideMenu';

const AppRoutes = () =>{
  let routes = useRoutes([
    { path: '/', element: <Home />},
    { path: 'my-account', element: <MyAccount />},
    { path: 'my-order', element: <MyOrder />},
    { path: 'my-orders', element: <MyOrders />},
    { path: 'my-orders/last', element: <MyOrder />},
    { path: 'my-orders/:id', element: <MyOrder />},
    { path: 'sign-in', element: <SignIn /> },
    { path: '/*', element: <NotFound/> }
    
  ])
  return routes
}

function App() {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes/>
        <NavBar/>
      <CheckOutSideMenu/>
      </BrowserRouter>
    </ShoppingCartProvider>
  ) 
}

export default App
