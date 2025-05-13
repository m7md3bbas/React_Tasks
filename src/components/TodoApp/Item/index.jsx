import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const TodoItem = ({ todo, index, onDelete, onToggle }) => {
    return (
        <div className='container'>
            <li className="list-group-item d-flex justify-content-between align-items-center">
                <span
                    style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                    className="flex-grow "
                >
                    {todo.text}
                </span>
                <div>
                    <button
                        className="btn btn-danger btn-sm me-2"
                        onClick={() => onDelete(index)}
                    >
                        Delete
                    </button>
                    <button
                        className="btn btn-primary btn-sm"
                        onClick={() => onToggle(index)}
                    >
                        Toggle
                    </button>
                </div>
            </li>
        </div>
    );
};

export default TodoItem;