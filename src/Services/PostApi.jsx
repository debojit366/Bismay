// creating an instance
import axios from 'axios'
const api = axios.create({
    baseURL:"https://jsonplaceholder.typicode.com/todos/1"
})
export const getPost = () =>{
    return api.get("/posts")
}
export const deletePost = (id)=>{
    return api.delete(`/posts/${id}`)
}