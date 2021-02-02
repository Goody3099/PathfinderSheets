import React, { useEffect, useState } from 'react';
import { Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import Attributes from './Attributes';
import Skills from './Skills';

const CharacterSheetForm = () => {

    const [sheet, setSheet] = useState();

    useEffect(() => {

    })

    const skillArray = ["Acrobatics", "Appraise", "Bluff", "Climb", "Craft", "Diplomacy", "Disable Device", "Escape Artist", "Fly", "Handle Animal", "Heal", "Intimidate",
                        "Knowledge(Arcana)", "Knowledge(Dungeoneering)", "Knowledge(Engineering)", "Knowledge(Geography)", "Knowledge(History)", "Knowledge(Local)", "Knowledge(Nature)",
                        "Knowledge(Nobility)", "Knowledge(Planes)", "Knowledge(Religion)", "Linguistics", "Perception", "Perform", "Profession", "Ride", "Sense Motive", "Sleight of Hand",
                        "Spellcraft", "Stealth", "Survival", "Swim", "Use Magic Device"];
    const attributeArray = ["Strenght", "Dexterity", "Consitution", "Intelligence", "Wisdom", "Charisma"]

    const handleChange = (e) => {
        const newSheet = {...sheet};
        newSheet[e.target.name] = e.target.value;
        setSheet(newSheet);
    }

    return (
        <Form>
            <Row>
            <Col md={4}>
                <div>Pathfinder Picture</div>
            </Col>
            <Col md={8}>
                 <Row>
                     <Col md={4}>
                         <FormGroup>
                             <Label>Character Name</Label>
                             <Input/>
                         </FormGroup>
                     </Col>
                     <Col md={4}>
                         <FormGroup>
                             <Label>Alignment</Label>
                             <Input/>
                         </FormGroup>
                         </Col>
                         <Col md={4}>
                         <FormGroup>
                             <Label>Player Name</Label>
                             <Input readOnly value/>
                         </FormGroup>
                         </Col>
                 </Row>
                 <Row>
                     <Col md={5}>
                         <Label>Class</Label>
                         <Input/>
                     </Col>
                     <Col md={1}>
                         <Label>Level</Label>
                         <Input/>
                     </Col>
                     <Col md={3}>
                         <Label>Deity</Label>
                         <Input/>
                     </Col>
                     <Col md={3}>
                         <Label>Homeland</Label>
                         <Input/>
                     </Col>
                 </Row>
                 <Row>
                     <Col md={3}>
                         <Label>Race</Label>
                         <Input/>
                     </Col>
                     <Col md={3}>
                         <Label>Size</Label>
                         <Input/>
                     </Col>
                     <Col md={1}>
                         <Label>Gender</Label>
                         <Input/>
                     </Col>
                     <Col md={1}>
                         <Label>Age</Label>
                         <Input/>
                     </Col>
                     <Col md={1}>
                         <Label>Height</Label>
                         <Input/>
                     </Col>
                     <Col md={1}>
                         <Label>Weight</Label>
                         <Input/>
                     </Col>
                     <Col md={1}>
                         <Label>Hair</Label>
                         <Input/>
                     </Col>
                     <Col md={1}>
                         <Label>Eyes</Label>
                         <Input/>
                     </Col>
                 </Row>
            </Col>
            </Row>
            <br></br>
            <Row>
                <Col md={6}>
                    <h1>Health</h1>
                    <Row>
                        <Col md={{size:2,offset:3}}>
                        <Label>Current</Label>
                        <Input name="currentHealth" id="currentHealth" />
                        </Col>
                        <Col md={2}>
                        <Label>Maximum</Label>
                        <Input name="maxHealth" id="maxHealth" />
                        </Col>
                        <Col md={2}>
                        <Label>Tempmorary</Label>
                        <Input name="tempHealth" id="tempHealth" />
                        </Col>
                    </Row>
                    <br></br>
                    <h1>Attributes</h1>
                    {attributeArray.map(attribute => <Attributes key={attribute} attribute={attribute} />)}
                </Col>
                <Col md={6}>
                <h1>Skills</h1>
                {skillArray.map(skill => <Skills key={skill} skill={skill} />)}
            </Col>
            </Row>          
        </Form>
    )
}
export default CharacterSheetForm;