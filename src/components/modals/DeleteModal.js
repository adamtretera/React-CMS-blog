

import React, {Component, useState} from "react";
import Modal from "react-bootstrap/Modal";
import BtnSmall from "../layout/elements/BtnSmall";
import styled from "styled-components";
import {Container, Image} from "react-bootstrap";
import {createProject, deleteProject} from "../../store/actions/projectsActions";
import {connect} from "react-redux";
import {AiFillCloseCircle} from 'react-icons/ai';
import BigHeader from "../layout/elements/BigHeader";
const OpenBtn = styled(BtnSmall)`
      margin-bottom: 3%;
    `




const Card = styled(Container)`
       background: ${(props) => props.theme.colors.bcg };
       border: none;
           border-radius: .2rem;

    `

const CardText = styled.div`
     font-size: 3rem;
     color: ${(props) => props.theme.colors.mainColor };
    `
class DeleteModalBtn extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleDelete = this.handleDelete.bind(this);

        this.state = {
            show: false
        };
    }

    handleClose() {
        this.setState({ show: false });
    }
    handleDelete() {
        this.setState({ show: false });
        this.props.deleteProject(this.props.projectId)
    }

    handleShow() {
        this.setState({ show: true });
    }


    render() {

    return (
        <>

            <a onClick={this.handleShow}><AiFillCloseCircle/></a>



            <Modal show={this.state.show} onHide={this.handleClose}>
                    <Card>
                    <BigHeader title={"Opravdu chcete příspěvek vymazat"}/>

                    <OpenBtn variant="secondary" onClick={this.handleClose}>
                        Zavřít
                    </OpenBtn>
                    <OpenBtn variant="primary" onClick={this.handleDelete}>
                      Vymazat
                    </OpenBtn>
                    </Card>
            </Modal>
        </>
    );
}
}
const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}


const  mapDispatchToProps = (dispatch) =>{
    return{
        deleteProject: (project) => dispatch(deleteProject(project))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DeleteModalBtn)