// import React, { useEffect, useState } from 'react'
// import { getTodo } from '../api';
// import { TodoCard } from './TodoCard';

// export const ShowTodo = () => {

//   const [todos , setTodos] = useState([]);

//   useEffect(()=>{
//     getTodo().then((res)=>setTodos(res.data))
//   },[]);


//   return (
//     <div>
//       {todos.map((itm)=>(
//         <TodoCard key={itm.id} {...itm} />
//       ))}
//     </div>
//   )
// }
