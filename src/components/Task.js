import React from 'react';

class Task extends React.Component {

  render() {
    return (
      <div className="task">
            <label className="label"> {this.props.task.category} </label>
            <text className="text"> {this.props.task.text} </text>
            <button class="delete" onClick={(event) => this.props.deleteTask (this.props.task, event)}>X</button>
      </div>
    )
  }
}

export default Task;