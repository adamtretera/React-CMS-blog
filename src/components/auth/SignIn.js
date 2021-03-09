import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'
import { Redirect } from 'react-router-dom'
import styled from "styled-components";
import Container from 'react-bootstrap/Container'
import BigHeader from "../layout/elements/BigHeader";
import AlignDiv from "../layout/elements/AlignDiv";
import LoginBtb from "../layout/elements/Btn"
import ResetPassword from "./ResetPassword";
import BlogLink from "../layout/elements/BlogLink";
import {LinkContainer} from "react-router-bootstrap";
const Form = styled.form`
    margin-left: 20%;
    max-width: 60%;
`
const Label = styled.label`
    font-size: 100%;
`
const ErrorMsg = styled.div`
    text-align: center;
    padding-top: 2.5vw;
    
`
const FormInput= styled.input`

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

class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signIn(this.state)
    }
    render() {
        const { authError, auth } = this.props;
        if (auth.uid) return <Redirect to='/' />
        return (
            <Container>
                <Form>
                    <BigHeader title={"Přihlášení"}/>

                        <Label htmlFor="email">Email</Label>
                        <FormInput type="email" id='email' onChange={this.handleChange} />


                        <Label htmlFor="password">Password</Label>
                        <FormInput type="password" id='password' onChange={this.handleChange} />


                    <AlignDiv textAlign={"center"}>
                        <LinkContainer to={"signup"}><BlogLink>Ještě nemám účet</BlogLink></LinkContainer>
                             <ResetPassword/>
                        <LoginBtb type={"submit"} onClick={this.handleSubmit}  name={"Přihlásit se!"}/>


                    </AlignDiv>
                        <ErrorMsg className="center red-text">
                            { authError ? <p>{authError}</p> : null }
                        </ErrorMsg>

                </Form>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
