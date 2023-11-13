import React from 'react'
import detailimgcurses from '/public/detailimg_curses.webp'
import detailimgdashboard from '/public/dashboard.png'
import detailimgfile from '/public/file.png'

export const DetailImg = ({detailSelect}) => {


  return (
    <>
      <div  >
        <img id='detail-img' src={detailSelect == 'curses' ? detailimgcurses : (detailSelect == 'dashboard' ? detailimgdashboard : detailimgfile)} />
      </div>
    </>
  )
}
