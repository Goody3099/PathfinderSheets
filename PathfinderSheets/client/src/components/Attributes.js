import React from 'react';
import { Col, Input, Label, Row } from 'reactstrap';

const Attributes = ({attribute}) => {

return (
    <>
    <Col md={{offset:2}}>
    <Row>
    <Label md={2}>{attribute}</Label>
    <Col md={2}>
        <Input name={`${attribute}`} id={`${attribute}`} />
    </Col> Mod
    <Col md={2}>
    <Input readOnly value />
    </Col> Temp
    <Col md={2}>
        <Input  />
    </Col>
    </Row>
    </Col>
    <br></br>
    </>
)
}

export default Attributes;