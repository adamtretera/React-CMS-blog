import React from "react";
import ProjectSummary from "./ProjectSummary";
import {Link} from "react-router-dom";
import Row from 'react-bootstrap/Row'
import Col from "react-bootstrap/Col";
import styled from "styled-components";
import {compose} from "redux";
import {connect} from "react-redux";
const CardLink = styled(Link)`
      &:hover{
      text-decoration: none;
      }
      
    `
//cycle if we have some projects to input them
const ProjectList = ({projects}) => {
    return(
      <React.Fragment>

            {projects && projects.slice(0,4).map(project =>{
                return (
                    <Col md={"3"}  key={project.id}>
                    <CardLink to={"/project/" + project.id}>
                    <ProjectSummary  project={project} />
                    </CardLink>
                    </Col>
                )
            })
            }
      </React.Fragment>




    )
}
const mapStateToProps = (state) => {

    return {
        projects: state.firestore.ordered.projects,
    }
}

export default compose(
    connect(mapStateToProps),

)(ProjectList)
