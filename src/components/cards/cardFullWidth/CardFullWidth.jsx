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
                <div className={`${CardFullWidthStyles.body}`}>
                    <h6 className={`${CardFullWidthStyles.title} app-heading1`}>{data.title}</h6>
                    <div className={`${CardFullWidthStyles.badgeContainer}`}>
                        <img src={require(`../../../assets/images/user.jpg`)} className={`${CardFullWidthStyles.avatar}`} alt="Avatar" />
                        <h5 className='app-heading4'>Maryam Noor</h5>
                        <span className={`${CardFullWidthStyles.badge} badge`}>{data.date}</span>
                    </div>
                    {
                        data.image && data.image.length ?
                        <img className={`${CardFullWidthStyles.img}`} src={require(`../../../assets/images/${data.image}.jpg`)} alt="" />
                        : <div className={`${CardFullWidthStyles.img}`}></div>
                    }
                    <span className={`app-heading4 ${CardFullWidthStyles.content}`}>{data.content}</span>
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