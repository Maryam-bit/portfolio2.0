import React from 'react'

const Service = ({ service }) => {
    console.log(service)
    return (
        <>
            <div className="card-body p-3 text-center">
                {/* <div className="row mb-3"> */}
                    {/* <div className="col-md-2"> */}
                        <img className='service-img' src={require(`../assets/images/${service.image}.png`)} alt="" />
                    {/* </div> */}
                    {/* <div className="col-md-10"> */}
                        <h6 className='service-name'>{service.name}</h6>
                    {/* </div> */}
                {/* </div> */}
                
                    {service.tag.map((tag, index) => (
                        <button key={index} className="service-tag">{tag}</button>
                    ))}
            </div>
        </>
    )
}

export default Service