import { useState } from 'react'
import './App.css'

function App() {

  const [todos, setTodos] = useState([
    { id: 1, todo: 'Learn React' }
  ]);
  const [input, setInput] = useState('');

  const addTodo = async () => {
    try {
      if (input.trim() !== '') {
        setTodos([...todos, { id: new Date(), todo: input }])
        setInput('')
      }

    } catch (error) {
      console.error(error.message)
    }
  }


  return (

    <div className='min-h-screen flex flex-col items-center justify-center gap-4 p-4'>
      <div className='bg-gray-100 p-6 rounded shadow-md w-full max-w-lg lg:w-1/4'>
        <h1 className='text-3xl font-bold text-center mb-4'>Todo App</h1>
        <div className='flex'>

          <input
            type="text"
            placeholder='Add a Todo'
            className='py-2 px-4 border rounded w-full focus:outline-none mr-2'
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <button onClick={addTodo} className='bg-gradient-to-r from-blue-400 to-blue-600 text-white py-2 px-4 rounded'>Add</button>

        </div>
      </div>
      <div className='bg-gray-100 p-6 rounded shadow-md w-full max-w-lg lg:w-1/4 '>
        <ul>
          {todos.map((todo, index) => {
            <li key={index} className='flex items-center justify-between bg-white p-3 rounded shadow-md mb-3'>
              <span className='text-lg'>{todos.todo}</span>
              <div>
                <button className='mr-2 p-2 bg-gradient-to-r from-gray-400 to-gray-600 text-white rounded hover:from-gray-500 hover:to-gray-700'>Edit</button>
                <button className='mr-2 p-2 bg-gradient-to-r from-red-400 to-red-600 text-white rounded hover:from-red-500 hover:to-red-700'>Remove</button>
              </div>
            </li>
          })}
        </ul>
      </div>
    </div>


  )
}

export default App
