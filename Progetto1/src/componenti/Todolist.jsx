
import './Todolist.css';
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

function Todolist(){

    const [todos,setTodos] = useState([]); //creazione di un array

    const addTodo = (todo) =>{
        setTodos(prevTodo => [... prevTodo,todo]); //aggiunta nuovo todo
    };

    return(
        <div>

            <hr className='hrm'></hr>
            <br></br>
            <br></br>
            <h1>LISTA TODO</h1>
            <br></br>

            <button onClick={() => addTodo("nuovo todo")}>aggiungi nuovo todo</button>

            <ul>
                {todos.map((todo,index) => (
                    <li key= {index}>{todo}</li>
                ))}
            </ul>


        </div>
    )
}
export default Todolist;
