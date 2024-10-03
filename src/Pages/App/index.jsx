import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SingIn from '../SingIn'

import './App.css'

function App() {
  return (
    <>
      <div className='bg-red-400'>
        <Home></Home>
        <MyAccount></MyAccount>
        <MyOrder></MyOrder>
        <MyOrders></MyOrders>
        <NotFound></NotFound>
      </div>
    </>
  )
}

export default App
