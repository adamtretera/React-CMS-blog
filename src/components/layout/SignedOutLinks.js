import React from 'react'

import NavItem from "./elements/NavItem";

const SignedOutLinks = () => {
    return (
        <React.Fragment>
            <NavItem to="/signin" >Přihlásit se</NavItem>
            <NavItem to="/signup" >Registrace</NavItem>
        </React.Fragment>
    )
}

export default SignedOutLinks