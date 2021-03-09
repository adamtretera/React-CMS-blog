import React, {useState} from "react";
import {Link} from "react-router-dom";
import Col from "react-bootstrap/Col";
import styled from "styled-components";
import {compose} from "redux";
import {connect} from "react-redux";
import ProjectDasboard from "./ProjectDasboard";
import DeleteModalBtn from "../modals/DeleteModal";
const CardLink = styled(Link)`
      &:hover{
      text-decoration: none;
      }
      
    `

const ProjectListProjects = ({projects}) => {


    return(
        <React.Fragment>
            {projects && projects.map(project =>{
                return (
                    <Col key={project.id}>
                        <DeleteModalBtn projectId={project.id}/>
                        <CardLink to={"/project/" + project.id}>
                            <ProjectDasboard project={project} />
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

)(ProjectListProjects)
