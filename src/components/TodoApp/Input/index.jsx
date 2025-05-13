import React, { useState } from 'react'


import 'bootstrap/dist/css/bootstrap.min.css';
const TodoInput = ({ addTodo }) => {

    const [text, setText] = useState('');
    const handleDefualt = (e) => {
        e.preventDefault();
        addTodo(text);
        setText('');
    }

    const handleChange = (e) => {
        setText(e.target.value);
    }
    return (
        <div className='container'>
            <form onSubmit={handleDefualt}>
                <input type="text" value={text} onChange={handleChange} className='form-control mb-3' />
                <button type="submit" className='btn btn-primary w-100' >Add</button>
            </form>
        </div>
    )
}

export default TodoInput