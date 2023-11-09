import React from 'react'
import { Button } from 'react-bootstrap'
import {ListCustomerCarrusel} from '../CustomerCarruselList'

export const CustomerCarruselImg = () => {

  const ListFiltrada = ListCustomerCarrusel.filter(List => {
    return List.categoria == 1;
  })
  return (
    <>
      <div className='row py-5 mx-5'>
      {ListFiltrada.map(content => content.items.map(
            item =>
        <div className='col xs-6 col-md-6 d-flex flex-column justify-content-between'>
              <img className="d-block w-100" id='customercarrusel-img' src={item.imagen} />          
        </div>
        ))}
        <div className='col xs-6 col-md-6 d-flex flex-column align-text-center' >
          <div style={{ fontSize: 'small' }}>
            <p>“Yo creo que el mayor valor agregado que tiene Foundesk es que he podido coordinar y controlar como nunca antes los aspectos impositivos de mi empresa.”</p>
          </div>
          <div style={{ fontWeight: 'bold' }}>Andres Villarroel</div>
          <div style={{ fontSize: 'small' }}>CEO Deppa</div>
          <div>
            <Button class="btn btn-primary btn-sm" variant='primary'>Conoce mas aqui</Button>
          </div>
        </div>
      </div>
    </>
  )
}
