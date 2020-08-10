import React from 'react';

class NewTaskForm extends React.Component {

    // debugger

getOptions = () => {
    let updatedCategories = this.props.categories.filter ((category) => {
        return category !== 'All'
    })
    return updatedCategories.map ((category) => {
        return <option>{category}</option>
    })
}

  render() {
    return (
        <form className="new-task-form" onSubmit={(event) => this.props.newTask(event)}>
            <input name="input" type="text" placeholder="New task details"/>
            <select name="code">
                {this.getOptions()}
            </select>
            <input type="submit"/>
        </form>
    )
  }
}

export default NewTaskForm;