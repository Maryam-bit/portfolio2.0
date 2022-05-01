import React, { useState } from 'react'

const FilterButtons = ({ projectCategories, filterCategory }) => {
  const [selected, setSelected] = useState('JAM Stack')
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

export default FilterButtons