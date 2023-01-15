import React from 'react'
import PropTypes from 'prop-types'
import CardTagsBottomStyles from './CardTagsBottom.module.scss'
import '../../../assets/scss/app.scss'
export const CardTagsBottom = ({ data }) => {
    return (
        <>
            <div className={`${CardTagsBottomStyles.card} card`}>
                <div className={`${CardTagsBottomStyles.body} text-center`}>
                    <img className={CardTagsBottomStyles.img} src={require(`../../../assets/images/${data.image}.png`)} alt="" />
                    <h6 className='app-heading3'>{data.name}</h6>
                    <div>
                        {data.tag.map((tag, index) => (
                            <button key={index} className="app-tag">{tag}</button>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

CardTagsBottom.propTypes = {
    data: PropTypes.object
}

CardTagsBottom.defaultProps = {
    data: {
        name: "Card with Tags",
        image: "mern-stack",
        tag: [
            "tag1",
            "tag2",
            "tag3",
            "tag4",
        ],
    },
}