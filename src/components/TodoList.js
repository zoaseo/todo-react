import React from 'react';

const User = ({user, onDelete, onToggle}) => {
    return (
        <div>
            <span className={user.active ? 'active' : ""} onClick={()=>{onToggle(user.id)}}>
                {user.todo}
            </span>
            <button id="btn" onClick={()=>{onDelete(user.id)}}>x</button>
        </div>
    )
}

const UserList = ({users, onDelete, onToggle}) => {
    return (

        <div id='lists'>
            {users.map(user => <User user={user} key={user.id} onDelete={onDelete} onToggle={onToggle}/>)}
        </div>
    );
};

export default UserList;