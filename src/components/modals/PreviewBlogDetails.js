import React from "react";
import Modal from "react-bootstrap/Modal";
import {Image} from "react-bootstrap";
import {Container} from "react-bootstrap";
import styled from "styled-components";
import renderHTML from 'react-render-html'
import BtnSmall from "../layout/elements/BtnSmall";
import AlignDiv from "../layout/elements/AlignDiv";
import Moment from 'react-moment';

const OpenBtn = styled(BtnSmall)`
      margin-bottom: 4rem;
      margin-left: 2rem;
    `
const CloseBtn = styled(BtnSmall)`
      margin-bottom: 3rem;
    `
const CardTitle = styled.h1`
     font-size: 1.25rem;
     font-weight: bold;
    `


const Card = styled(Container)`
       background: ${(props) => props.theme.colors.bcg };
       border: none;
           border-radius: .2rem;

    `
const CardAuthorName = styled.p`
     font-size: 0.5rem;

    `
const CardText = styled.div`
     font-size: 0.5rem;
     color: white;
    `
const MainImage = styled(Image)`
     width: 100%;

    `


const PreviewBlogDetails = (props) => {

    const [isOpen, setIsOpen] = React.useState(false);

    const showModal = () => {
        setIsOpen(true);
    };

    const hideModal = () => {
        setIsOpen(false);


    };


    return (

        <React.Fragment>
            <OpenBtn onClick={showModal}>Jak to bude vypadat ? </OpenBtn>
            <Modal  show={isOpen} onHide={hideModal} >
                <Card>
                    <MainImage src={props.imageBlogURL}/>
                    <CardTitle>{props.title}</CardTitle>
                    <CardText>{renderHTML(props.text)}</CardText>
                    <CardAuthorName>{props.profile.fullName}</CardAuthorName>
                    <CardAuthorName><Moment format={"LL"} locale={"cs"}></Moment></CardAuthorName>
                    <AlignDiv textAlign={"center"}>
                        <CloseBtn onClick={hideModal}>Zavřít</CloseBtn>
                    </AlignDiv>




                </Card>
            </Modal>
        </React.Fragment>
    );
};

export default PreviewBlogDetails