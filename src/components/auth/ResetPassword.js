import React, {Component, useState} from 'react'
import { connect } from 'react-redux'
import {resetPassword, resetEmail, signUp} from '../../store/actions/authActions'
import { Redirect } from 'react-router-dom'
import styled from "styled-components";
import Container from 'react-bootstrap/Container'
import BigHeader from "../layout/elements/BigHeader";
import AlignDiv from "../layout/elements/AlignDiv";
import LoginBtb from "../layout/elements/Btn"
import Button from "react-bootstrap/Button";
import Modal from 'react-bootstrap/Modal'
import BtnSmall from "../layout/elements/BtnSmall";



const Form = styled.form`
    margin-left: 20%;
    max-width: 60%;
`
const Label = styled.label`
    font-size: 100%;
`

const ResetPasswordBody = styled(Modal.Body)`
  background: ${(props) => props.theme.colors.bcg};
    
`
const LinkToResetPassword= styled.a`
  cursor: pointer;
  color: aliceblue;
    
`
const FormInput = styled.input`

    font-size: ${(props) => props.theme.fontSize.size1A2};
    color: ${(props) => props.theme.colors.mainColor};
    border: 2px solid ${(props) => props.theme.colors.mainColor};
    padding: 0.5rem;
    margin-bottom: ${(props) => props.theme.spacers.mediumSpace};
    background-color: transparent;
    width: 100%;
    transition: .4s;
    box-shadow: none;
    outline: none;
    &::placeholder{
      font-size: ${(props) => props.theme.fontSize.size1A2};
      color: ${(props) => props.theme.colors.mainColor};
    }

`




class ResetPassword extends Component {
    state = {
        resetEmail: '',


    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.resetEmail)
        this.props.resetPassword(this.state.resetEmail);
        const {authError} = this.props;

        this.handleClose()

    }

    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false
        };
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }



    render() {

        return (
            <Container>
                <LinkToResetPassword onClick={this.handleShow}>Zapoměli jste heslo ?</LinkToResetPassword>


                <Modal show={this.state.show} onHide={this.handleClose}>


                    <ResetPasswordBody>
                        <BigHeader title={"Chcete si resetovat heslo?"}/>
                        <Form onSubmit={this.handleSubmit}>
                        <Label htmlFor="email">Email</Label>
                        <FormInput type="email" id='resetEmail' onChange={this.handleChange}/>

                        <AlignDiv textAlign={"center"}>
                            <LoginBtb type={"submit"} onClick={this.handleSubmit}  name={"Resetovat heslo"}/>

                        </AlignDiv>


                        </Form>
                        <AlignDiv textAlign={"center"}>
                            <BtnSmall onClick={this.handleClose}>Zavřít</BtnSmall>
                        </AlignDiv>




                </ResetPasswordBody>

                </Modal>
            </Container>
        )

}
}


const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        resetPassword: (creds) => dispatch(resetPassword(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword)