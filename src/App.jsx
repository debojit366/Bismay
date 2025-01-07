import { useEffect, useState } from 'react'
import { getPost } from './Services/PostApi'
function App() {
  const getData = async ()=>{
    const res = await getPost();
    console.log(res)
  }
  useEffect(getData(), [])
return (
    <>
    <p>hello</p>
    </>
  )
}

export default App
