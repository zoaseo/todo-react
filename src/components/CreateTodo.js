import React from 'react';
import './TodoList.css';

const CreateUser = ({todo, onChange, onCreate}) => {
    return (
        <div id="wrap">
            <h1>to do list</h1>
            <input name="todo" value={todo}
            onChange={onChange} />
            <button onClick={onCreate}>+</button>
        </div>
    );
};

export default CreateUser;