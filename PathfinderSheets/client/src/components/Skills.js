import React from 'react';
import { Col, Input, Label, Row } from 'reactstrap';

const Skills = ({skill}) => {

return (
    <>
    <Col md={{offset:2}}>
    <Row>
    <Label md={2}>{skill}</Label>
    <Col md={2}>
        <Input name={`${skill}`} id={`${skill}`} />
    </Col> +
    <Col md={2}>
    <Input readOnly value />
    </Col> =
    <Col md={2}>
        <Input readOnly value />
    </Col>
    </Row>
    </Col>
    <br></br>
    </>
)
}

export default Skills;