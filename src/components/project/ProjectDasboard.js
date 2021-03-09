import React from "react";
import {Container, Row, Col, Image,Card } from "react-bootstrap";

import styled from 'styled-components'
import Notifications from "../dashboard/Notification";
const CardStyled = styled(Container)`
      color:${(props) => props.theme.colors.mainColor };
      padding-bottom: 2vh;
    `
const DashboardCardTitle = styled.h3`
      font-weight: bold;
      font-size: 2rem;
    `
const DashboardCardPerex = styled.p`
      font-weight: 300;
      font-size: 1.2rem;
    `


const ProjectDasboard = ({project,notifications}) =>{
    return(
    <CardStyled >
        <Row >
                    <Col md={4}>
                        <Card.Img src={project.imageBlogURL}/>
                    </Col>

                    <Col md={8}>
                        <DashboardCardTitle>{project.title}</DashboardCardTitle>
                        <DashboardCardPerex>{project.perex}</DashboardCardPerex>
                        <p>{project.createdAt}</p>
                        <p>{project.authorName} </p>
                    </Col>


        </Row>

    </CardStyled>


    )
}
export default ProjectDasboard