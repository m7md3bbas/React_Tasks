import { useState } from "react";
import TodoInput from "../Input";
import TodoItem from "../Item";
import { v4 as uuidv4 } from 'uuid';

import 'bootstrap/dist/css/bootstrap.min.css';
const TodoApp = () => {
    const [todos, setTodos] = useState([]);


    const addToDo = (text) => {
        if (text !== '') {
            const newTodo = { text, completed: false };
            setTodos([...todos, newTodo]);
        } else {
            alert('Please enter a todo');
        }
    }
    const toggleToDo = (index) => {
        const newTodos = [...todos];
        newTodos[index].completed = !newTodos[index].completed;
        setTodos(newTodos);
    }

    const deleteToDo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    }
    return (
        <div className="todo">
            <h3>Todo</h3>
            <TodoInput addTodo={addToDo} />
            <ul className="todo-list mt-3 list-group">
                {todos.map((todo, index) => (
                    <TodoItem
                        key={uuidv4()}
                        todo={todo}
                        index={index}
                        onDelete={deleteToDo}
                        onToggle={toggleToDo}
                    />
                ))}
            </ul>

        </div>
    )
}


export default TodoApp