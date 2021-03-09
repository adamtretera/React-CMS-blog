import React from "react";

import Card from "react-bootstrap/Card";
import styled from 'styled-components'
import Placement from "../../styles/img/placement.svg"
const CardStyle = styled(Card)`

        background: transparent;
        color:${(props) => props.theme.colors.mainColor };
        font-family: ${(props) => props.theme.fontFamily.mainFont };
        border-radius: initial;
        border:none;
        padding-bottom: 2vh;
    

     @media ${({theme}) => theme.mediaQueries.mobile}{
        text-align:${(props) => props.theme.textAlign.center };
        font-size: ${(props) => props.theme.fontSize.size1};
 
 }

    `

const CardTitle = styled(Card.Title)`
     font-weight: bold;
     
    `
const CardText= styled(Card.Text)`
     
    `

const CardAuthorName = styled.p`
     font-size: 0.8rem;
    `
const ProjectSummary = ({project}) =>{
    return(

            <CardStyle>
                <Card.Img variant="top" src={project.imageBlogURL}/>
                <Card.Body>
                    <CardTitle>{project.title}</CardTitle>
                    <CardAuthorName>Vytvořil: {project.authorName} </CardAuthorName>
                    <CardAuthorName>{project.createdAt.toString()}</CardAuthorName>
                </Card.Body>
            </CardStyle>



    )
}
export default ProjectSummary