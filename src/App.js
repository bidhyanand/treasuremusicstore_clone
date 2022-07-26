import React from 'react'
import Header from './view/header/Header'
import Routing from './Routing/Routing'
import CombineFooter from './view/footer/CombineFooter'
import MobileHeader from './Component/header/drawerData/MobileHeader'
const App = () => {
  return (
    <div>
     <Header/>
     <MobileHeader/>
      <Routing/>
      <CombineFooter/>
      <br/>
    </div>
  )
}

export default App