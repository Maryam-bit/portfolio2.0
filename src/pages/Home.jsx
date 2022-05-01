import React from 'react';
import user from '../assets/js/data/user'

const Home = () => {
  return (
      <div className='home'>
        <h3 className='user-name'>{user.about.name}</h3>
        <p className='breakpoint'>___________________</p>
        <h6 className='user-profession'>{user.about.profession}</h6>
        <span className='user-description'>{user.about.description}</span>
      </div>
  )
}

export default Home