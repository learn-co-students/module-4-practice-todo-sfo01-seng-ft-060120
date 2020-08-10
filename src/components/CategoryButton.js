import React from 'react';

class CategoryButton extends React.Component {

  render() {
    return (
      <button className={this.props.categoryButton === this.props.currentFilter ? "toggle-on" : null} name={this.props.categoryButton} onClick={(event) => this.props.filterTasks(event)}>
          {this.props.categoryButton}       
      </button>
    )
  }
}

export default CategoryButton;