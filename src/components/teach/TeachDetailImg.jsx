import React from 'react'
import teachdetailcreateimg from '/public/teachDetailCreateImg.png'
import teachdetailsaveimg from '/public/teachDetailSaveImg.png'
import teachdetailshowimg from '/public/teachDetailShowImg.jpg'

export const TeachDetailImg = ({teachDetailSelect}) => {


  return (
    <>
      <div  >
        <img id='teach-detail-img' src={teachDetailSelect == 'create' ? teachdetailcreateimg : (teachDetailSelect == 'save' ? teachdetailsaveimg : teachdetailshowimg)} />
      </div>
    </>
  )
}