
// imports de React
import { useRoutes, BrowserRouter } from 'react-router-dom';

// Componentes
import Home from '../Home/index'
import MyAccount from '../MyAccount/index'
import MyOrder from '../MyOrder/index'
import MyOrders from '../MyOrders/index'
import SignIn from '../SignIn/index'
import NotFound from '../NotFound';
import NavBar from '../../Components/NavBar';

// CSS
import './App.css'

const AppRoutes = () =>{
  let routes = useRoutes([
    { path: '/', element: <Home />},
    { path: 'my-account', element: <MyAccount />},
    { path: 'my-order', element: <MyOrder />},
    { path: 'my-orders', element: <MyOrders />},
    { path: 'sign-in', element: <SignIn /> },
    { path: '/*', element: <NotFound/> }
    
  ])
  return routes
}

function App() {
  return (

      <BrowserRouter>
        <AppRoutes/>
        <NavBar/>
      </BrowserRouter>
  ) 
}

export default App
