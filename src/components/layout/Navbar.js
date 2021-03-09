import React from 'react'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'
import {LinkContainer} from 'react-router-bootstrap'
import Logo from "../../styles/img/Logo.svg"
import styled from "styled-components";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'




const NavColor = styled(Navbar)`
        background: ${(props) => props.theme.colors.bcg };
        text-align: center;

    `


function Navigation (props)  {


    const { auth, profile } = props;
    const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />;

    return (


        <NavColor  expand="lg" variant="dark">
            <Navbar.Brand>
                <LinkContainer to={"/"}>
                    <img
                    src={Logo}
                    width="75"
                    height="75"
                    className="d-inline-block align-top"
                    alt="Mojera logo"
                    title="Mojera logo"
                />
                </LinkContainer>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                <Nav>
                    {links}
                </Nav>
            </Navbar.Collapse>
        </NavColor>

    );
}

const mapStateToProps = (state) => {
    // console.log(state);
    return{
        auth: state.firebase.auth,
        profile: state.firebase.profile

    }
}

export default connect(mapStateToProps)(Navigation)
