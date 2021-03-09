import React from 'react';
import {connect} from "react-redux";
import {firestoreConnect} from "react-redux-firebase";
import  {compose} from "redux";
import {Redirect} from "react-router-dom"
import {Container, Image} from "react-bootstrap";
import styled from "styled-components";
import renderHTML from 'react-render-html'

const CardTitle = styled.h1`
      font-size: 3rem;
      font-weight: bold;
    `
const PostImage = styled(Image)`
    width: 100%;
    `
const Card = styled(Container)`
     border: none;
    `
const CardAuthorName = styled.p`
     font-size: 1rem;
     font-weight: 500;
     

    `
const CardText = styled.div`
     font-size: 1.2rem;

    `
const ProjectDetails = (props) => {
    const {project, auth} = props;

    if(!auth.uid) return <Redirect to={"/signup"}/>
    if (project) {
        return(
            <React.Fragment>
            <Card>
                              <PostImage src={project.imageURL} alt={project.blogImgName}/>

                        <div className="card-body">

                            <CardTitle>{project.title}</CardTitle>
                            <CardText>  {renderHTML(project.text)}</CardText>
                            <CardAuthorName>{project.authorFirstName} {project.authorLastName}</CardAuthorName>
                            <CardAuthorName>{project.createdAt.toString()}</CardAuthorName>
                        </div>

            </Card>
            </React.Fragment>
            )

    }
    else{
        return(
            <div className="container center">
                <p>Loading project...</p>
            </div>
        )
    }

}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] : null;
    return{
        project: project,
        auth: state.firebase.auth
    }
}


export default compose(
    connect(mapStateToProps)
) (ProjectDetails);