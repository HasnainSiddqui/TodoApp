import { useEffect, useState } from 'react'
import './App.css'

function App() {

  let [todos, setTodos] = useState([

  ])




  let [typeValue, setTypeValue] = useState("")

  let addTodo = () => {

    const addTodosValue = [
      
      { name: typeValue , id : Math.random().toString().slice(2,6)},
      ...todos
    ]
    setTodos(addTodosValue)
    setTypeValue("")
  }
  let check = (e) => {
    setTypeValue(e.target.value)

  }

  let deletbtn =(id) =>{
   
    setTodos(todos.filter((value)=> value.id != id))
    
  }

  return (
    <>
    
   <div className="text-center mt-10  p-9 w-96 rounded-xl bg-white mx-auto">
    <h1 className='text-2xl font-bold mb-5'>TODO APP</h1>
      <input className='border-2 mr-5 mb-5' onChange={(e) => check(e)} value={typeValue} type="search" name="" id="" />
      <button className='bg-purple-400 p-1 w-16 text-white rounded-lg' onClick={() => {
        addTodo()
      }} >Click</button>
      <div>{todos.map((value, ind) => (<div key={ind} className='m-1'>{value.name}<button onClick={()=> deletbtn(value.id) } className='bg-red-400 ml-3 p-1 w-16 text-white rounded-lg '>Delete</button></div>))}</div>
      </div>
      
    </>
  )
}

export default App
