import React from 'react';

const Tasks = ({task, removeTask}) => {
    return(
        <div className='task'>
            <div className='label'>{task.category}</div>
            <div className='text'>{task.text}</div>
            <button className='delete' onClick={() => removeTask(task)}>X</button>
        </div>
    )
}

export default Tasks