import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap'

export const ControllerMenu = ({ onAddControllerMenu, controllerMenuValue }) => {

  const [controllerType, setControllerType] = useState(controllerMenuValue ? controllerMenuValue : 'tributarios')
  onAddControllerMenu(controllerType)
  return (
    <>
      <div id='dashboard-menu'>
        <Button onClick={() => { setControllerType('tributarios') }} variant={controllerType == 'tributarios' ? 'primary' : 'light'}>
          Riesgos Tributarios</Button>
        <Button onClick={() => { setControllerType('laborales') }} variant={controllerType == 'laborales' ? 'primary' : 'light'}>
          Riesgos Laborales
        </Button>
      </div>
    </>
  )
}

ControllerMenu.protoTypes = {
  onAddControllerMenu: PropTypes.func.isRequired
}

