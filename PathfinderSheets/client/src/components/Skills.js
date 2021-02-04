import React, { useState } from 'react';
import { Col, Input, Label, Row } from 'reactstrap';

const Skills = ({skill, handleChange, sheet}) => {

    const getName = (s) => {
        if (s === "Knowledge(Arcana)") {
          return "knowledgeArcana";
        }
        if (s === "Knowledge(Dungeoneering)") {
          return "knowledgeDungeoneering";
        }
        if (s === "Knowledge(Engineering)") {
          return "knowledgeEngineering";
        }
        if (s === "Knowledge(Geography)") {
          return "knowledgeGeography";
        }
        if (s === "Knowledge(History)") {
          return "knowledgeHistory";
        }
        if (s === "Knowledge(Local)") {
          return "knowledgeLocal";
        }
        if (s === "Knowledge(Nature)") {
          return "knowledgeNature";
        }
        if (s === "Knowledge(Nobility)") {
          return "knowledgeNobility";
        }
        if (s === "Knowledge(Planes)") {
          return "knowledgePlanes";
        }
        if (s === "Knowledge(Religion)") {
          return "knowledgeReligion";
        }
        let string = s.replace(/\s+/g, "");
        return string[0].toLowerCase() + string.slice(1);
      };

    return (
        <>
            <Col md={{offset:2}}>
                <Row>
                        <Label md={2}>{skill}</Label>
                    <Col md={2}>
                        <Input name={getName(skill)} defaultValue={sheet[getName(skill)]} onChange={((e) => handleChange(e))}/>
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