import styled from 'styled-components'
import React from "react";

const H2 = styled.h2`
 font-family:${(props) => props.theme.fontFamily.mainFont };
 color: ${(props) => props.theme.colors.mainColor };
 font-size: ${(props) => props.theme.fontSize.size4 };
 text-align: center;
 background: transparent;
   margin-top: ${(props) => props.theme.spacers.largeSpace };
  margin-bottom: ${(props) => props.theme.spacers.largeSpace };
 font-weight: bold;
 

 @media ${({theme}) => theme.mediaQueries.mobile}{
 font-size: ${(props) => props.theme.fontSize.size2A5 };
 
 }


`;
function BigHeader(props) {
    return (
        <React.Fragment>
            <H2>{props.title}</H2>
        </React.Fragment>
    );
}

export default BigHeader;

