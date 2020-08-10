import React from 'react';

const Button = ({category, filterTasks, selectedFilter}) => {
    return(
        <button className={selectedFilter === category ? 'selected' : null} onClick={() => filterTasks(category)}>
            {category}
        </button>
    )
}

export default Button