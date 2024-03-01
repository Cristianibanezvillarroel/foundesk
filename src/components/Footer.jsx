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
                        <Heading>Enseña</Heading>
                        <FooterLink href="/foundesk/#/teach">Enseña en Foundesk</FooterLink>
                    </Column>
                    <Column>
                        <Heading>Capacita</Heading>
                        <FooterLink href="/foundesk/#/train">Capacita con Foundesk</FooterLink>
                    </Column>
                </Row>
            </Container>
        </Box>
    );
}