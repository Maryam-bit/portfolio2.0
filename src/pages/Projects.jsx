import React, { useState } from 'react'
import Project from '../components/Project'
import user from '../assets/js/data/user'
import FilterButtons from '../components/FilterButtons'
import CardTopImage from '../components/cards/cardTopImage/CardTopImage'

const Projects = () => {
  const projectCategories = [...new Set(user.projects.map((Val) => Val.category))];
  const [category, setCategory] = useState(user.projects)
 
  const filterCategory = (category) => {
    if(category == 'All') {
      setCategory(user.projects)
      return;
    }
    const selectedCategory = user.projects.filter((val) => {
      return val.category === category
    })
    setCategory(selectedCategory)
  }

  console.log(category)
  return (
    <div className='projects'>
      <h1 className='app-heading1 text-center'>Projects</h1>
      <div className="row mb-4">
        <FilterButtons filterCategory={filterCategory} projectCategories={projectCategories} />
      </div>
      <div className="row mb-5 pb-5">
        {
          category.map((project, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card border-0">
                <CardTopImage data={project} />
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Projects