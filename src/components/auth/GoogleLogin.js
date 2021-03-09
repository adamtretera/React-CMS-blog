import React, { Component } from "react"

import {signUpGoogle} from "../../store/actions/authActions";
import {connect} from "react-redux";
import BtnSmall from "../layout/elements/BtnSmall";
import {FcGoogle} from "react-icons/all";
import styled from "styled-components";
import Card from "react-bootstrap/Card";

const GoogleIcon= styled(FcGoogle)`
     font-size: 150%;

    `


class GoogleLogin extends Component {



    render() {
        return (

            <BtnSmall onClick={this.props.signUpGoogle}><GoogleIcon/><span>Pokračovat s Google</span></BtnSmall>

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
        signUpGoogle: (creds) => dispatch(signUpGoogle(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GoogleLogin)