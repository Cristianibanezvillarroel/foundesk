import React from 'react'
import detailimgaprende from '/public/detailimg_curses.webp'
import detailimgensena from '/public/dashboard.png'
import detailimgcapacita from '/public/dashboard_risk.png'

export const DetailImg = ({detailSelect}) => {


  return (
    <>
      <div  >
        <img id='detail-img' src={detailSelect == 'videos' ? detailimgaprende : (detailSelect == 'tutoriales' ? detailimgensena : detailimgcapacita)} />
      </div>
    </>
  )
}
