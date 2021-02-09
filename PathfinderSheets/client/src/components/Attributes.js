import { getDefaultNormalizer } from '@testing-library/react';
import React from 'react';
import { Col, Input, Label, Row } from 'reactstrap';

const Attributes = ({attribute, handleChange, sheet}) => {

    const getName = (attribute) => {
        return attribute[0].toLowerCase() + attribute.slice(1);
    }

    const modValue = (att) => {
        let temp = isNaN(parseInt(sheet[`${getName(att)}Temp`])) ? 0: parseInt(sheet[`${getName(att)}Temp`]);
        let x = Math.floor((parseInt(sheet[getName(att)]) + temp - 10) / 2);
        if(isNaN(x)){
            return 0
        };
        return x;
    }

    return (
        <>
            <Col md={{offset:2}}>
                <Row>
                        <Label md={2}>{attribute}</Label>
                    <Col md={2}>
                        <Input name={getName(attribute)} defaultValue={sheet[getName(attribute)]} onChange={(e) => handleChange(e)}/>
                    </Col> Mod
                    <Col md={2}>
                        <Input readOnly value={modValue(attribute)} />
                    </Col> Temp
                    <Col md={2}>
                        <Input name={`${getName(attribute)}Temp`} onChange={((e) => handleChange(e))}/>
                    </Col>
                </Row>
            </Col>
            <br></br>
        </>
    )
}

export default Attributes;