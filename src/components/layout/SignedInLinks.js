import React from 'react'

import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'
import NavItem from "./elements/NavItem";


const SignedInLinks = (props) => {
    return (
        <React.Fragment>
                <NavItem to='/createproject'>Nový post</NavItem>
                <NavItem to={"/"} onClick={props.signOut}>Odhlásit se!</NavItem>
                <NavItem to="/" > {props.profile.initials}</NavItem>
        </React.Fragment>


    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)
