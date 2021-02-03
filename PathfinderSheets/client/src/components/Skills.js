import React, { useState } from 'react';
import { Col, Input, Label, Row } from 'reactstrap';

const Skills = ({skill}) => {

    const [sheet, setSheet] = useState();

    const handleChange = (e) => {
        const newSheet = {...sheet};
        newSheet[e.target.name] = e.target.value;
        setSheet(newSheet);
    }

return (
    <>
    <Col md={{offset:2}}>
    <Row>
    <Label md={2}>{skill}</Label>
    <Col md={2}>
        <Input name={`${skill}`} id={`${skill}`} onChange={((e) => handleChange(e))}/>
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