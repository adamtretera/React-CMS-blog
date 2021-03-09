import React from "react";
import styled from "styled-components";
import Spinner from "react-bootstrap/Spinner";
import {Container} from "react-bootstrap";


const LoaderDiv = styled.div`
           position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transform: -webkit-translate(-50%, -50%);
    transform: -moz-translate(-50%, -50%);
    transform: -ms-translate(-50%, -50%);
    color:darkred;
       
    `

function Loader() {
    return (

        <LoaderDiv>
            <Loader
                type="TailSpin"
                color="#00BFFF"
                height={100}
                width={100}
                timeout={3000} //3 secs
            />
        </LoaderDiv>
    )


}



export default Loader