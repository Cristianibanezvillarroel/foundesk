import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap'

export const TemplatesMenu = ({ onAddTemplatesMenu }) => {

  const [templateType, setTemplateType] = useState('Comercial')

  const getCategory = (category) => {
    onAddTemplatesMenu(category)
    setTemplateType(category)
  }

  return (
    <>
      <div id='template-menu'>
        <Button onClick={() => { getCategory('Comercial') }} variant={templateType == 'Comercial' ? 'primary' : 'light'}>
          Comerciales</Button>
        <Button onClick={() => { getCategory('Laboral') }} variant={templateType == 'Laboral' ? 'primary' : 'light'}>
          Laborales
        </Button>
      </div>
    </>
  )
}

TemplatesMenu.protoTypes = {
  onAddTemplatesMenu: PropTypes.func.isRequired
}

