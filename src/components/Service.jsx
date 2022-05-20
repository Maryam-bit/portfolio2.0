import React from 'react'

const Service = ({ service }) => {
    console.log(service)
    return (
        <>
            <div className="card-body p-3 text-center">
                <img className='service-img' src={require(`../assets/images/${service.image}.png`)} alt="" />
                <h6 className='service-name'>{service.name}</h6>
                <div>
                    {service.tag.map((tag, index) => (
                        <button key={index} className="service-tag">{tag}</button>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Service