import React from 'react'
import './App.css'
import { useState } from 'react';

export default function App() {
  //take input
  const [input, setInput] = useState("");

  //add value to list
  const [todo, setTodo] = useState([]);
  
  const addTodo = () => {
    if (input.trim() !== '') {
      setTodo([...todo, {
        id: Date.now(), 
        text: input,
        completed: false
      }]);
      setInput(''); // Clear input after adding
    }
  };

  //delete
  const Delete = (id) => {
    setTodo(todo.filter(todo => todo.id !== id)); 
  }
  
  
  const toggleTodo = (id) => {
    setTodo(
      todo.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo)
    );
  }

  return (
    <>
      <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow">
        <h1 className="text-2xl font-bold mb-4 text-center">Todo List</h1>
        
        <div className="flex mb-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && addTodo()} 
            placeholder="Add a new task..."
            className="flex-grow p-2 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button 
            onClick={addTodo} 
            className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600 focus:outline-none"
          >
            Add
          </button>
        </div>
        
        <ul className="space-y-2">
          {todo.map(item => (
            <li 
              key={item.id} 
              className="flex items-center justify-between p-3 border border-gray-200 rounded"
            >
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={item.completed}
                  onChange={() => toggleTodo(item.id)}
                  className="mr-2 h-5 w-5 text-blue-500"
                />
                <span className={item.completed ? "line-through text-gray-400" : ""}>
                  {item.text}
                </span>
              </div>
              <button 
                onClick={() => Delete(item.id)}
                className="text-red-500 hover:text-red-700 focus:outline-none"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
        
        {todo.length === 0 && (
          <p className="text-center text-gray-500 mt-4">No tasks yet. Add one above!</p>
        )}
      </div>
    </>
  );
}
