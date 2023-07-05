import React,{useState} from 'react'
import { Outlet,useNavigate } from 'react-router-dom'
import NavBarComp from './NavBarComp'
import { Provider } from 'react-redux'
import store from './store/store'

const RootLayout = () => {

  return (
    <div>
  {/* <Provider store={store}> */}
     <NavBarComp />
      <Outlet />
  {/* </Provider>     */}
    </div>
  )
}

export default RootLayout