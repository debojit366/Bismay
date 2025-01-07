import { useEffect, useState } from 'react'
import { deletePost, getPost } from './Services/PostApi'
function App() {
  const [data,setData]=useState([])
  const getData = async ()=>{
    const res = await getPost();
    setData(res.data)
  }
  const handleDeleteBtn = async (id)=>{
    const res = await deletePost(id)
    console.log(res)
  }
  
  useEffect(()=>{getData()}, [])
return (
    <>
    {
      data.map((el,index)=>{
        const {id , title, body} = el
        return <div key={id}>
          <p>{id}</p>
          <p>{title}</p>
          <p>{body}</p>
          <button >Edit</button>
          <button onClick={()=>handleDeleteBtn(id)}>Delete</button>
        </div>
      })
    }
    </>
  )
}

export default App
