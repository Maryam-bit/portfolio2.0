import React from 'react'
import cardTopImgStyles from'./CardTopImage.module.scss'

const CardTopImage = ({data}) => {
  return (
    <>
        <img src={require(`../../assets/images/${data.image}.jpg`)} alt="" />
        <div className="card-body p-3">
            <h6 className="app-heading4">{data.name}</h6>
            <a className={cardTopImgStyles.preview_link} href={data.previewLink} target="_blank"><i className="fa fa-eye"></i></a>
            <a className={cardTopImgStyles.code_link} href={data.codeLink} target="_blank"><i className="fa fa-code"></i></a>
        </div>
    </>
  )
}

export default CardTopImage;