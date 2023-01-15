import React from 'react'
import PropTypes from 'prop-types'
import CardFullWidthStyles from './CardFullWidth.module.scss'
import '../../../assets/scss/app.scss'
import { Link } from "react-router-dom"

export const CardFullWidth = ({ data }) => {
    return (
        <>
            <div className={`${CardFullWidthStyles.card} card`}>
              <Link to={`/blogs/${data.id}`}>

                <div className={`${CardFullWidthStyles.body}  p-3`}>
                    <h6 className='app-heading1 fw-normal fs-3'>{data.title}</h6>
                    <div className={`${CardFullWidthStyles.badgeContainer}`}>
                        <img src={require(`../../../assets/images/user.jpg`)} className="rounded-circle" width="45px" alt="Avatar" />
                        <h5 className='app-heading4 fw-normal mb-0 px-2'>Maryam Noor</h5>
                        <span className={`badge ${CardFullWidthStyles.badge}`}>{data.date}</span>
                    </div>
                    {
                        data.image && data.image.length ?
                        <img className={`${CardFullWidthStyles.img} py-3`} src={require(`../../../assets/images/${data.image}.jpg`)} alt="" />
                        : <div className='py-2'></div>
                    }
                    <span className='app-heading4 fw-normal fs-6' style={{opacity: 0.7, lineHeight: 1.65}}>{data.content}</span>
                    <button className={CardFullWidthStyles.cardButton}>Continue Reading</button>
               </div>
              </Link>
            </div>
        </>
    )
}

CardFullWidth.propTypes = {
    data: PropTypes.object
}

CardFullWidth.defaultProps = {
    data: {
        title: "Article title",
        image: "covid-19-tracker",
        content: "Article description",
        date: "03-05-2022",
    },
}