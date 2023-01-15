import React from 'react'
import PropTypes from 'prop-types'
import CardTopImageStyles from './CardTopImage.module.scss'
import '../../../assets/scss/app.scss'
export const CardTopImage = ({ data }) => {
  return (
    <>
            <div className={`${CardTopImageStyles.card} card border-0`}>
            <img src={require(`../../../assets/images/${data.image}.jpg`)} alt="" />
            <div className={`card-body p-3`}>
                <h6 className="app-heading4">{data.name}</h6>
                <a className={CardTopImageStyles.preview_link} href={data.previewLink} target="_blank" rel="noreferrer" ><i className={`fa fa-eye`}></i></a>
                <a className={CardTopImageStyles.code_link} href={data.codeLink} target="_blank" rel="noreferrer" ><i className="fa fa-code"></i></a>
            </div>
        </div>
    </>
  )
}

CardTopImage.propTypes = {
    data: PropTypes.object
}

CardTopImage.defaultProps = {
    data: {
    name: "Card with Image on Top",
        image: "expense-tracker",
        previewLink: 'https://localhost:3001',
        codeLink: 'https://localhost:3001'
    },
}