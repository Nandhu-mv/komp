import React from 'react'
import Main from './components/Main'
// import CondtionIf1 from './components/Con1'
// import ConditionIf2 from './components/Con2'
// import Conditional3 from './components/Con3'
// import Parent from './components/Parent'
// import Third from './components/Third'
// import One from './components/One'
//  import Counter from './components/Counter'
// import Calc from './components/Calc'
// import Name from './components/Name'
import Cars from './components/Cars'
import Useff from './components/Useff'

function New() {
  return (
    <div style={{background:"rgba(89, 89, 89, 1)",color:"white"}}>
        <h1 style={{padding:"10px", paddingLeft:"20px"}}> Sports Cars</h1>
        {/* <div style={{width : "100%",overflow:"scroll"}}>

        <Third />
        
        </div>
        <One /> */}

        {/* <Parent /> */}
        <Main />
        {/* <Counter /> */}
        {/* <CondtionIf1/>
        <ConditionIf2/>
        <Conditional3/> */}

        {/* <Calc />

        <Name /> */}

        <Cars />

        <Useff />

        
    </div>
  )
}

export default New