

import axios from 'axios'
import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTodoFailure, getTodoRequest, getTodoSuccess, postTodoFailure, postTodoRequest, postTodoSuccess } from '../Redux/action'
import TodoInput from './TodoInput'

function Todos() {
    const dispatch = useDispatch()
    const isLoading = useSelector((state)=>state.isLoading)
    const todos = useSelector((state)=>state.todos)


    
    const getTodos = useCallback(() =>{

        dispatch(getTodoRequest())
        
        axios.get('http://localhost:8000/todos').then((res)=>{

            dispatch(getTodoSuccess(res.data))
            console.log(res.data)
        }).catch((e)=>{

            dispatch(getTodoFailure())
            console.log(e)
        })
    },[dispatch])

    useEffect(()=>{
       
 
       getTodos()

    },[getTodos])

 


    const addTodo = (title)=>{
            if(title){
             
                dispatch(postTodoRequest())

               return axios.post('http://localhost:8000/todos',
                {
                    title:title,
                    status:false
            }).then((res)=>{
                    dispatch(postTodoSuccess(res.data))
                    getTodos()
                }).catch((e)=>{
                    dispatch(postTodoFailure())
                })
            }
          
    }

    const handleAddTodo =(text)=>{
        addTodo(text);
    }


  return (
    <div>
        {isLoading ? <h1>Loading</h1> : <TodoInput   handleAddTodo={handleAddTodo} /> }

        {todos.length>0 && todos.map(todo=>(
             <div key={todo.id}>
                    <h2>{todo.title}</h2>
             </div>
        ))}
    </div>
  )
}

export default Todos