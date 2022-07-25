import React from 'react'
import Header from './view/header/Header'
import Routing from './Routing/Routing'
import CombineFooter from './view/footer/CombineFooter'
const App = () => {
  return (
    <div>
     <Header/>
      <Routing/>
      <CombineFooter/>
      <br/>
    </div>
  )
}

export default App