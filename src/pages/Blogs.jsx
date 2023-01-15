import React from 'react'
import user from '../assets/js/data/user'
import { CardFullWidth } from '../components/cards/cardFullWidth/CardFullWidth'


const Blogs = () => {
  return (
    <div className='blogs mb-5 pb-5'>
      <h1 className='app-heading1 text-center'>Blogs</h1>
      <div className="mt-3">
        {
          user.blogs.map((blog, index) => (
            <div className="mb-4" key={index}>
                <CardFullWidth data={blog} />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Blogs