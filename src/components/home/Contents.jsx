import React from 'react'
import { ContentsCards } from './ContentsCards'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const Contents = () => {
  return (
    <>
      <div id='contents-llamado'>
        Creamos contenido exclusivo para ti con expertos de la industria
      </div>
      <div id='contents-bajada'>
        Descubre las últimas tendencias del futuro del trabajo junto a líderes y marcas que son referencia para nosotros en nuestro Resources Hub.
      </div>
      <div id='contents-cards'>
        <ContentsCards />
      </div>
      <div id='contents-link'>
        <Button as={Link} to='/blog'>Ver mas</Button>
      </div>
    </>
  )
}
