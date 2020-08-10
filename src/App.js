import React from 'react';
import './App.css';
import FilterContainer from './components/FilterContainer.js';
import { CATEGORIES } from './data'

class App extends React.Component {

  state = {
    currentFilter: 'All',
    filteredTasks: [],
    tasks: [
      {
        text: 'Buy rice',
        category: 'Food'
      },
      {
        text: 'Save a tenner',
        category: 'Money'
      },
      {
        text: 'Build a todo app',
        category: 'Code'
      },
      {
        text: 'Build todo API',
        category: 'Code'
      },
      {
        text: 'Get an ISA',
        category: 'Money'
      },
      {
        text: 'Cook rice',
        category: 'Food'
      },
      {
        text: 'Tidy house',
        category: 'Misc'
      }
    ]
  }

  componentDidMount() {
    this.setState ({
      filteredTasks: this.state.tasks
    })
  }

  filterTasks = (event) => {
    if (event.target.name !== 'All') {
      let updatedTasks = this.state.tasks.filter ((task) => {
        return task.category === event.target.name
      })
      this.setState ({
        currentFilter: event.target.name,
        filteredTasks: updatedTasks
      })
    } else {
      this.setState ({
        filteredTasks: this.state.tasks
      })
    }
    console.log(this.state.currentFilter)
  }

  newTask = (event) => {
    event.preventDefault()

    let data = {
      text: event.target.input.value,
      category: event.target.code.value,
    }

    this.setState ({
      tasks: [
        ...this.state.tasks,
        data
      ]
    })

    if (this.state.currentFilter === "All") {
      this.setState ({
        filteredTasks: [
          ...this.state.filteredTasks,
          data
        ]
      })
    } else if (event.target.code.value === this.state.currentFilter) {
      this.setState ({
        filteredTasks: [
          ...this.state.filteredTasks,
          data
        ]
      })
    }
    
  }

  deleteTask = (task, event) => {
    // debugger
    this.setState ({
      currentFilter: this.state.currentFilter
    })
    let updatedTasks = this.state.tasks.filter (oneTask => {
      return oneTask.text !== task.text
    })
    console.log(this.state.currentFilter)
    if (this.state.currentFilter === "All") {
      this.setState ({
        filteredTasks: updatedTasks
      })
    } else if (task.category === this.state.currentFilter) {
      let updatedFilteredTasks = this.state.tasks.filter (oneTask => {
        return oneTask.text !== task.text && oneTask.category === this.state.currentFilter
      })
      this.setState ({
        tasks: updatedTasks,
        filteredTasks: updatedFilteredTasks
      })
    }
  }

  render() {
    return (
      <div className="App">
        <h2>My tasks</h2>
        <FilterContainer className="categories" categories={CATEGORIES} filteredTasks={this.state.filteredTasks} filterTasks={this.filterTasks} newTask={this.newTask} deleteTask={this.deleteTask} />
      </div>
    );
  }
}

export default App;
