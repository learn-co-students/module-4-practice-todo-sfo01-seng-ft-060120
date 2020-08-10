import React from 'react';
import CategoryButton from './CategoryButton'
import NewTaskForm from './NewTaskForm'
import Task from './Task'

class FilterContainer extends React.Component {

  getCategories = () => {
    this.props.categories.map (category => {
      return category
    })
  }

  render() {
    return (
      <div>
        <div className= "categories" >
          <h5> Category filters</h5>
          {
            this.props.categories.map(category => {
              return <CategoryButton categoryButton={category} filterTasks={this.props.filterTasks}/>
            })
          }
        </div>
        <div className="tasks">
          <h5>Tasks</h5>
          <NewTaskForm categories={this.props.categories} newTask={this.props.newTask}/>
          {
            this.props.filteredTasks.map(task => {
              return <Task className="tasks" task={task} deleteTask={this.props.deleteTask}/>
            })
          }
        </div>
      </div>

    )
  }
}

export default FilterContainer;