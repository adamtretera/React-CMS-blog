import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {signUp} from '../../store/actions/authActions'
import styled from 'styled-components'
import Container from 'react-bootstrap/Container'
import BigHeader from "../layout/elements/BigHeader";
import AlignDiv from "../layout/elements/AlignDiv";
import LoginBtb from "../layout/elements/Btn"
import { LinkContainer } from 'react-router-bootstrap'
import BlogLink from "../layout/elements/BlogLink";
import GoogleLogin from "./GoogleLogin";




const Form = styled.form`
    margin-left: 20%;
    max-width: 60%;
`
const Label = styled.label`
    font-size: 100%;
`
const ErrorMsg = styled.div`
    text-align: center;
    padding-top: 2vw;
    
`
const LinkStyled= styled(LinkContainer)`
    
    padding-top: 1vw;
    
`
const FromInput = styled.input`

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

class SignUp extends Component {
    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: '',
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signUp(this.state);
    }


    render() {
        const {auth, authError} = this.props;
        if (auth.uid) return <Redirect to='/'/>
        return (
           <Container>
               <BigHeader title={"Vítejte na Mojera.cz blog"}/>
                <Form onSubmit={this.handleSubmit}>

                        <Label htmlFor="email">Email</Label>
                        <FromInput type="email" id='email' onChange={this.handleChange}/>


                        <Label htmlFor="password">Heslo</Label>
                        <FromInput type="password" id='password' onChange={this.handleChange}/>


                        <Label htmlFor="firstName">Jméno</Label>
                        <FromInput type="text" id='firstName' onChange={this.handleChange}/>


                        <Label htmlFor="lastName">Příjmení</Label>
                        <FromInput type="text" id='lastName' onChange={this.handleChange}/>

                    <AlignDiv textAlign={"center"}>
                        <LinkStyled to={"signin"}><BlogLink>Už máš účet?</BlogLink></LinkStyled>


                       <LoginBtb type={"submit"} onClick={this.handleSubmit}  name={"Registrovat"}/>



                    </AlignDiv>
                </Form>
               <AlignDiv textAlign={"center"}>

                   <GoogleLogin/>
                   <ErrorMsg>
                       {authError ? <p>{authError}</p> : null}
                   </ErrorMsg>

               </AlignDiv>






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
        signUp: (creds) => dispatch(signUp(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)