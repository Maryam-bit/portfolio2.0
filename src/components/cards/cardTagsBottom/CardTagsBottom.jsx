import React from 'react'
import CardTagsBottomStyles from './CardTagsBottom.module.scss'

const CardTagsBottom = ({ data }) => {
    return (
        <>
            <div className={`${CardTagsBottomStyles.body} p-3 text-center`}>
                <img className={CardTagsBottomStyles.img} src={require(`../../../assets/images/${data.image}.png`)} alt="" />
                <h6 className='app-heading3'>{data.name}</h6>
                <div>
                    {data.tag.map((tag, index) => (
                        <button key={index} className="app-tag">{tag}</button>
                    ))}
                </div>
            </div>
        </>
    )
}

export default CardTagsBottom