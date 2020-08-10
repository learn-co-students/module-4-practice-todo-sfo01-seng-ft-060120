import React from 'react';
import Button from './Button'

const Categories = ({categories, filterTasks, selectedFilter}) => {
    return(
        <div className='categories'>
            <h5>Category Filters</h5>
            {
                categories.map((category,idx) => {
                    return <Button category={category} key={idx} filterTasks={filterTasks} selectedFilter={selectedFilter}/>
                })
            }
        </div>
        )
}

export default Categories