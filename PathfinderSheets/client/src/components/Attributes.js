import React from 'react';
import { Col, Input, Label, Row } from 'reactstrap';

const Attributes = ({attribute, handleChange, sheet}) => {

    return (
        <>
            <Col md={{offset:2}}>
                <Row>
                        <Label md={2}>{attribute}</Label>
                    <Col md={2}>
                        <Input name={`${attribute}`} id={`${attribute}`} onChange={((e) => handleChange(e))}/>
                    </Col> Mod
                    <Col md={2}>
                        <Input readOnly value={Math.floor((sheet[attribute] - 10) / 2)} />
                    </Col> Temp
                    <Col md={2}>
                        <Input name={`${attribute}Temp`} id={`${attribute}Temp`} onChange={((e) => handleChange(e))}/>
                    </Col>
                </Row>
            </Col>
            <br></br>
        </>
    )
}

export default Attributes;