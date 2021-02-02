import React from 'react';
import { Col, Input, Label, Row } from 'reactstrap';

const Attributes = ({attribute}) => {

return (
    <>
    <Row>
    <Label md={2}>{attribute}</Label>
    <Col md={2}>
        <Input name={`${attribute}`} id={`${attribute}`} />
    </Col> +
    <Col md={2}>
    <Input readOnly value />
    </Col> =
    <Col md={2}>
        <Input readOnly value />
    </Col>
    </Row>
    <br></br>
    </>
)
}

export default Attributes;