import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './FilterButtons.scss'

export const FilterButtons = ({ projectCategories, filterCategory }) => {
  const [selected, setSelected] = useState('All')
  console.log('filterCategory', filterCategory)
  const handleSelectedFilter = (category) => {
    setSelected(category)
    filterCategory(category)
  }

  return (
    <div className='filter-btns d-flex justify-content-center'>
      <button className={(selected === "All" ? "active" : "")} onClick={() => {handleSelectedFilter('All')}}>
        All
      </button>
      {
        projectCategories.map((category, index) => {
          return (
            <button className={(selected === category ? "active" : "")} key={index} onClick={() => { handleSelectedFilter(category) }}>
              {category}
            </button>
          )
        })
      }
    </div>
  )
}

FilterButtons.propTypes = {
    projectCategories: PropTypes.array,
    filterCategory: PropTypes.func
}

FilterButtons.defaultProps = {
    projectCategories: ['Mern stack'],
}