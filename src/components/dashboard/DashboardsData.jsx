import React from 'react'
import Dashboardimgkpi from '/public/dashboard.png'
import Dashboardimgrisk from '/public/dashboard_risk.png'

export const DashboardsData = ({dashboardMenuValue}) => {
    const dashboardtype = dashboardMenuValue
    const textDashboardTypeRisk = 
        `Con Foundesk accedes a información en tiempo real de observaciones en: 1.- El estado de tus declaraciones de impuestos mensuales F29, 2.- Estado de tus declaraciones de renta, 3.- Estado de Pago de tus impuestos, 4.- Estado de pago de tus cotizaciones previsionales, 5.- Estado de declaracion de tus libros de remuneraciones electronico, entre muchas otras cosas.`
        
    const textDashboardTypeKpi = 'Con Foundesk accedes a un completo set de indicadores comerciales y financieros que te ayudarán a revisar y controlar tu gestión comercial y evitar riesgos financieros.'
    const textDashboardTypeKpiMessage = 'Logra una visual rápida y completa de los indicadores comerciales fundamentales de tu negocio.'
    const textDashboardTypeRiskMessage = 'Logra una visual rápida y completa de los indicadores de riesgo fundamentales de tu negocio.'
    return (
        <div className='dashboard-data'>
            <h2 style={{textAlign: 'center'}}>{dashboardtype == 'risk' ? textDashboardTypeRiskMessage : textDashboardTypeKpiMessage}</h2>
            <img src={dashboardtype == 'risk' ? Dashboardimgrisk : Dashboardimgkpi} />
            <p>{dashboardtype == 'risk' ? textDashboardTypeRisk : textDashboardTypeKpi}</p>
        </div>
    )
}
