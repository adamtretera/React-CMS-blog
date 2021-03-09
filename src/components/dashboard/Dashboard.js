import React, { Component } from 'react'
import ProjectList from "../project/ProjectList";
import Notifications from "./Notification";
import { connect } from 'react-redux'
import {firestoreConnect, useFirestoreConnect} from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import {Col} from "react-bootstrap";
import ProjectListProjects from "../project/ProjectListProjects";

class Dashboard extends Component {
    render() {

        const { auth, notifications } = this.props;
        if (!auth.uid) return <Redirect to='/signin' />

        return (
            <Container >
                <Row>
                    <ProjectList/>
                </Row>
                <Row md={12}>
                    <Col md={9}>


                        <ProjectListProjects/>

                    </Col>
                    <Col md={3}>

                        <Notifications notifications={notifications} />

                    </Col>

                </Row>


            </Container>
        )
    }
}

const mapStateToProps = (state) => {

    // console.log(state);
    return {


        auth: state.firebase.auth,
        notifications: state.firestore.ordered.notifications,

    }
}

export default compose(
    connect(mapStateToProps),

    firestoreConnect([
        { collection: 'notifications', limit: 3, orderBy: ['time', 'desc']}

    ])
)(Dashboard)
