import React from "react";
import Modal from "react-bootstrap/Modal";
import {Container} from "react-bootstrap";
import styled from "styled-components";
import BtnSmall from "../layout/elements/BtnSmall";
import AlignDiv from "../layout/elements/AlignDiv";
const OpenBtn = styled(BtnSmall)`
      margin-bottom: 4rem;
      margin-left: 2rem;
    `
const CloseBtn = styled(BtnSmall)`
      margin-bottom: 3rem;
    `
const Card = styled(Container)`
       background: ${(props) => props.theme.colors.bcg };
       border: none;
           border-radius: .2rem;

    `

const PreviewBlogDasboard = (props) => {

    const [isOpen, setIsOpen] = React.useState(false);

    const showModal = () => {
        setIsOpen(true);
    };

    const hideModal = () => {
        setIsOpen(false);


    };


    return (

        <React.Fragment>
            <OpenBtn onClick={showModal}>Náhled v hlavní nabídce </OpenBtn>
            <Modal  show={isOpen} onHide={hideModal} >
                <Card>
                    
                    <AlignDiv textAlign={"center"}>
                        <CloseBtn onClick={hideModal}>Zavřít</CloseBtn>
                    </AlignDiv>




                </Card>

            </Modal>
        </React.Fragment>
    );
};

export default PreviewBlogDasboard