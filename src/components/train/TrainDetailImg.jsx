import React from 'react'
import traindetailcreateimg from '/public/trainDetailCreateImg.webp'
import traindetailsaveimg from '/public/trainDetailSaveImg.webp'
import traindetailshowimg from '/public/trainDetailShowImg.webp'

export const TrainDetailImg = ({trainDetailSelect}) => {


  return (
    <>
      <div  >
        <img id='train-detail-img' src={trainDetailSelect == 'porque' ? traindetailcreateimg : (trainDetailSelect == 'como' ? traindetailsaveimg : traindetailshowimg)} />
      </div>
    </>
  )
}