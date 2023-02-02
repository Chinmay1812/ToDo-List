import logo from './logo.svg';
import './App.css';
import './style.css'
import {useState} from "react";
import ToDoList from "./ToDoList";
function App() {
    const [name,setName]=useState('');
    const [inputList,setInputList]=useState([]);

    const inputEvent=event=>{
        setName(event.target.value);
    }
    const addItem=()=>{
        setInputList((old)=>{
            return [...old,name];
        });
        setName('');
    }

    const deleteItems=(id)=>{
        setInputList((old)=>{
            return (old.filter((element,index)=>{
                return index!==id;
            }))
        })
    }


  return (
    <div>
      <div className="main_div">
          <div className="center_div">
              <br/>
              <h1>ToDo List</h1>
              <br/>
              <input type="text" placeholder="Add items" value={name} onChange={inputEvent} />
              <button onClick={addItem}>+</button>
              <ol>
                  {inputList.map((val,index)=>{
                  return <ToDoList
                      text={val}
                      key={index}
                      id={index}
                      onSelect={deleteItems}
                  />
                  })}
              </ol>
          </div>
      </div>

    </div>
  );
}

export default App;
