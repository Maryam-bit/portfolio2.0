import React from 'react'
import Service from '../components/Service'
import user from '../assets/js/data/user'

const Services = () => {
  return (
    <div className='services mb-5 pb-5'>
      <h1 className='app-heading text-center'>Services</h1>
      <div className="row mt-3">
        {
          user.services.map((service, index) => (
            <div className="col-md-6 mb-4" key={index}>
              <div className="card border-0">
                <Service service={service} />
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Services