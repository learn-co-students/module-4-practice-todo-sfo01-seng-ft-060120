import React from 'react';
import './App.css';
import { CATEGORIES } from './data'
import Categories from './components/Categories'
import TaskContainer from './components/TaskContainer'

class App extends React.Component {

  state = {
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
    ],
    displayedTasks: [],
    selectedFilter: ""
  }

  filterTasks = (category) => {
    let selectedFilter = category
    if (category === 'All') {
      let displayedTasks = [...this.state.tasks]
      this.setState({ displayedTasks, selectedFilter })
    } else {
      let displayedTasks = this.state.tasks.filter(task => task.category === category)
      this.setState({ displayedTasks, selectedFilter })
    }
  }

  componentDidMount(){
    this.setState({
      displayedTasks: [...this.state.tasks],
      selectedFilter: 'All'
    })
  }

  addNewTask = (e) => {
    e.preventDefault()
    let newTask = {
      text: e.target[0].value,
      category: e.target[1].value
    }
    let tasks = [...this.state.tasks, newTask]
    this.setState({ tasks })
    e.target[0].value = ""
    e.target[1].value = "Code"
  }

  componentDidUpdate(previousProps, previousState){
    if (previousState.tasks !== this.state.tasks) {
      this.filterTasks(this.state.selectedFilter)
    }
  }

  removeTask = (selectedTask) => {
    let tasks = this.state.tasks.filter(task => task !== selectedTask )
    this.setState({ tasks })
  }

  render() {
    return (
      <div className="App">
        <h2>My tasks</h2>
        <Categories categories={CATEGORIES} filterTasks={this.filterTasks} selectedFilter={this.state.selectedFilter}/>
        <TaskContainer tasks={this.state.displayedTasks} addNewTask={this.addNewTask} removeTask={this.removeTask}/>
      </div>
    );
  }
}


export default App;
