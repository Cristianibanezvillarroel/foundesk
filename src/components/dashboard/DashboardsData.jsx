import React from 'react'
import Dashboardimgkpi from '/public/dashboard.png'
import DashboardimgkpiFinance from '/public/dashboard_finance.png'

export const DashboardsData = ({dashboardMenuValue}) => {
    const dashboardtype = dashboardMenuValue
    const textDashboardTypeFinance = 
        'Con Foundesk accedes a un completo set de indicadores financieros en linea con tu sistema contable o ERP permitiendote revisar de manera simple y rápida indicadores financieros globales como ciclo de pago, ratios de liquidez, rotacion de ventas, y flujo de caja.'
        
    const textDashboardTypeKpi = 'Con Foundesk accedes a un completo set de indicadores comerciales y financieros que te ayudarán a revisar y controlar tu gestión comercial y liquidez de tu empresa.'
    const textDashboardTypeKpiMessage = 'Logra una visual rápida y completa de los indicadores comerciales fundamentales de tu negocio.'
    const textDashboardTypeKpiFinanceMessage = 'Logra una visual rápida y completa de los indicadores financieros fundamentales de tu negocio.'
    return (
        <div className='dashboard-data'>
            <h2 style={{textAlign: 'center'}}>{dashboardtype == 'finance' ? textDashboardTypeKpiFinanceMessage : textDashboardTypeKpiMessage}</h2>
            <img src={dashboardtype == 'finance' ? DashboardimgkpiFinance : Dashboardimgkpi} />
            <p>{dashboardtype == 'finance' ? textDashboardTypeFinance : textDashboardTypeKpi}</p>
        </div>
    )
}
