import axios from "axios"

const url="http://localhost:6969/todos"

export const addTodo = (newTodo)=>{
    return axios.post(url,newTodo)
}

export const getTodo = ()=>{
   return axios.get(url)
}

export const deleteTodo=(id)=>{
   return axios.delete(`http://localhost:6969/todos/${id}`)
}

export const toggleTodo = (id,status)=>{
    axios.patch(`http://localhost:6969/todos/${id}`,{status:!status})
}