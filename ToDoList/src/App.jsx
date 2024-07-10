import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [items, setItems] = useState([])
  const [task, setTask] = useState('')
  const [editMode, setEditMode] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(null)
  
  function handleChange(event){
    setTask(event.target.value)
  }
  function addItem(){
    if(!editMode){
      setItems((prev)=>{
        return [...prev, task]
      
      })
      setTask('')
    }
    else{
      let newItems = [...items];
      newItems[currentIndex] = task;
      setItems(newItems);

      setTask('');
      setEditMode(false);
      
    }

  }
  function edit(index){
    setTask(items[index]);
    setEditMode(true);
    setCurrentIndex(index);
  }

  function deleteItem(index){
    setItems(items.filter((item, i) => {
      return i !== index;
    })
  )
    
  }

  return (
    <>
      
      <input value={task} onChange={handleChange} placeholder="Add Item" />
      <button onClick={addItem} type="submit">{editMode ? 'Edit' : 'Add'}</button>
      <ol>
  {items.map((item, index) => (
    <li key={index}>
      {item} 
      <button onClick={() => edit(index)}>Edit</button>
      <button onClick={() => deleteItem(index)}>Delete</button>
    </li>
  ))}
</ol>

    </>
  )
}
  
export default App
