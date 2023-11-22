import React from "react";
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
} from "../FooterStyles";

export const Footer = () => {
    return (
        <Box>
            <Container>
                <Row>
                    <Column>
                        <Heading>La empresa</Heading>
                        <FooterLink href="/foundesk/#/about">Nuestra Historia</FooterLink>
                        <FooterLink href="/foundesk/#/diary">Agenda una demo</FooterLink>
                    </Column>
                    <Column>
                        <Heading>Cursos</Heading>
                        <FooterLink href="/foundesk/#/coursescategories">Categorias</FooterLink>
                        <FooterLink href="/foundesk/#/courses">Cursos Online</FooterLink>
                    </Column>
                    <Column>
                        <Heading>Dashboards</Heading>
                        <FooterLink href="/foundesk/#/dashboards/kpi">KPI's</FooterLink>
                        <FooterLink href="/foundesk/#/dashboards/risk">Control Riesgos</FooterLink>
                    </Column>
                    <Column>
                        <Heading>Templates</Heading>
                        <FooterLink href="/foundesk/#/templates">Plantillas Administrativas</FooterLink>
                    </Column>
                </Row>
            </Container>
        </Box>
    );
}