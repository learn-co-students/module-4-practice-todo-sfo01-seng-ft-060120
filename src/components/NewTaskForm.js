import React from 'react';

const NewTaskForm = (props) => {
    return(
        <form className='new-task-form' onSubmit={props.addNewTask}>
            <input placeholder='new task details' type='text' />
            <select>
                <option>Code</option>
                <option>Food</option>
                <option>Money</option>
                <option>Misc</option>
            </select>
            <input type='submit' value='Add Task' />
        </form>
    )
}

export default NewTaskForm