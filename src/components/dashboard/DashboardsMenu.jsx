import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap'

export const DashboardsMenu = ({ onAddDashboardMenu, dashboardMenuValue }) => {

  const [dashboardType, setDashboardType] = useState(dashboardMenuValue ? dashboardMenuValue : 'kpi')
  onAddDashboardMenu(dashboardType)
  return (
    <>
      <div id='dashboard-menu'>
        <Button onClick={() => { setDashboardType('kpi') }} variant={dashboardType == 'kpi' ? 'primary' : 'light'}>
          KPI's Comerciales</Button>
        <Button onClick={() => { setDashboardType('finance') }} variant={dashboardType == 'finance' ? 'primary' : 'light'}>
          KPI's Financieros
        </Button>
      </div>
    </>
  )
}

DashboardsMenu.protoTypes = {
  onAddDashboardMenu: PropTypes.func.isRequired
}

