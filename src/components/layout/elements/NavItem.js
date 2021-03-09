import styled from 'styled-components'
import {Link} from "react-router-dom";
import React from 'react';
const NavLink = styled(Link)`
  color: ${(props) => props.theme.colors.mainColor };
  font-size: ${(props) => props.theme.fontSize.size1A2 };
  margin-left: 2vw;
  margin-right: 2vw;
  position: relative;
  text-decoration: none;
  font-width: bold;
  cursor: pointer;
 
    &:hover {
     text-decoration: none;
    color: ${(props) => props.theme.colors.mainColor };
    }
    &::before {
     content: "";
     position: absolute;
     width: 100%;
     height: 1px;
     bottom: 0;
     left: 0;
     background-color: ${(props) => props.theme.colors.mainColor };
     visibility: hidden;     
     -webkit-transform: scaleX(0);
     transform: scaleX(0);
     -webkit-transition: all 0.3s ease-in-out 0s;
     transition: all 0.3s ease-in-out 0s;
    }
    &:hover:before {
      visibility: visible;
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
    }
    @media ${({theme}) => theme.mediaQueries.mobile}{
        text-align:${(props) => props.theme.textAlign.center };
         &::before {
         width: 20%;
         margin-left:40%;
         }
      }
     @media ${({theme}) => theme.mediaQueries.tablet}{
        text-align:${(props) => props.theme.textAlign.center };
         &::before {
         width: 10%;
         margin-left:45%;
         }
        }
      @media ${({theme}) => theme.mediaQueries.desktop}{
         &::before {
         width: 100%;
         margin-left: 0%;
         }
         }
 
 
`;
export default (props) => <NavLink {...props} />;