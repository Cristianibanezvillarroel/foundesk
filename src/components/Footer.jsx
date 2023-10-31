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
                        <FooterLink href="#">Nuestra Historia</FooterLink>
                        <FooterLink href="#">Registrate</FooterLink>
                    </Column>
                    <Column>
                        <Heading>Cursos</Heading>
                        <FooterLink href="#">Categorias</FooterLink>
                        <FooterLink href="#">Relatores</FooterLink>
                        <FooterLink href="#">Metodologia</FooterLink>
                    </Column>
                    <Column>
                        <Heading>Herramientas</Heading>
                        <FooterLink href="#">Repositorios</FooterLink>
                        <FooterLink href="#">Red de contactos iniciales</FooterLink>
                    </Column>
                </Row>
            </Container>
        </Box>
    );
}