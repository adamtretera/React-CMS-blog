import React from 'react'
import BigHeader from "../layout/elements/BigHeader";
import Col from "react-bootstrap/Col";

const Notifications = (props) => {
    const { notifications } = props;
    return (
        <Col className={"notifications"}>
                    <h3 className={"font-weight-bold"}>Notifikace</h3>
                        { notifications && notifications.map(item =>{
                            return <p key={item.id}>
                                <span>{item.user} </span>
                                <span>{item.content}</span>


                            </p>
                        })}


        </Col>
    )
}

export default Notifications
