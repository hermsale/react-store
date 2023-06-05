// import React from 'react';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';

function NavBar() {
    let activeStyle = "underline underline-offset-4"; // underlife-offset da una distancia entre el contenido y el subrayado
    const context = useContext(ShoppingCartContext)

  return (
    <>
     <nav className='flex justify-between items-center fixed z-99 top-0 w-full py-5 px-8 text-sm font-light bg-slate-300 bg-opacity-50'>
        <ul className='flex items-center gap-3'>
            <li className='font-semibold text-lg'>
                <NavLink to='/'>
                    Store
                </NavLink>
            </li>
            <li>
                <NavLink to='/all' className={({isActive})=> isActive ? activeStyle : undefined }>
                    All
                </NavLink>
             </li>
            <li>
                <NavLink to='/clothes' className={({isActive})=> isActive ? activeStyle : undefined }>
                    Clothes
                </NavLink>
            </li>
            <li>
                <NavLink to='/electronics' className={({isActive})=> isActive ? activeStyle : undefined }>
                    Electronics
                </NavLink>
            </li>
            <li>
                <NavLink to='/furnitures' className={({isActive})=> isActive ? activeStyle : undefined }>
                    Furnitures
                </NavLink>
            </li>
            <li>
                <NavLink to='/toys' className={({isActive})=> isActive ? activeStyle : undefined }>
                    Toys
                </NavLink>
            </li>
            <li>
                <NavLink to='/others' className={({isActive})=> isActive ? activeStyle : undefined }>
                    Others
                </NavLink>
            </li>
        </ul>
        {/* Lado derecho */}
        <ul  className='flex items-center gap-3'>
            <li className='text-black/60'>
                AleStore@gmail.com
            </li>
            <li>
                <NavLink to='/my-orders'  className={({isActive})=> isActive ? activeStyle : undefined }>
                    MyOrders
                </NavLink>
            </li>
            <li>
                <NavLink to='/my-account'   className={({isActive})=> isActive ? activeStyle : undefined }>
                    MyAccount
                </NavLink>
                
            </li> 
            <li>
                <NavLink to='/sign-in'   className={({isActive})=> isActive ? activeStyle : undefined }>
                    SigIn
                </NavLink>
            </li> 
            <li>
                 🛒 {context.count}
            </li>
        </ul>
     </nav>

     
    </>
  )
}

export default NavBar