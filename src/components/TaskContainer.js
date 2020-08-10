import React from 'react';
import Tasks from './Tasks'
import NewTaskForm from './NewTaskForm'

const TaskContainer = ({tasks, addNewTask, removeTask}) => {
    return(
        <div className='tasks'>
            <h5>Tasks</h5>
            <NewTaskForm addNewTask={addNewTask}/>
            <div>
                {tasks.map((task, idx) => {
                    return <Tasks task={task} key={idx} removeTask={removeTask}/>
                })}
            </div>
        </div>
    )
}

export default TaskContainer