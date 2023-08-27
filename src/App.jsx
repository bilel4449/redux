import { useState } from 'react'

import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { handleMunis, handlePlus } from './Redux/actions'

function App() {
 const count=useSelector(state=>state.count)
//  console.log(count)
const dispatch=useDispatch()
  return (
    <>
   <h1>{count}</h1>
<button onClick={()=>dispatch(handlePlus())} >+</button>
<button onClick={()=>count>0&&dispatch(handleMunis())} >-</button>
    </>
  )
}

export default App
