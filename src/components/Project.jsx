import React from 'react'

const Project = ({project}) => {
  return (
    <>
        <img src={require(`../assets/images/${project.image}.jpg`)} alt="" />
        <div className="card-body p-3">
            <h6 className='project-name'>{project.name}</h6>
            <a className='preview-link' href={project.previewLink} target="_blank"><i className="fa fa-eye"></i></a>
            <a className='code-link' href={project.codeLink} target="_blank"><i className="fa fa-code"></i></a>
        </div>
    </>
  )
}

export default Project