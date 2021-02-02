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
                        <h1>Attributes</h1>
                            {attributeArray.map(attribute => <Attributes key={attribute} attribute={attribute} />)}
                            <h1>Health</h1>
                    <Row>
                        <Col md={{size:2,offset:4}}>
                        <Label>Current</Label>
                        <Input name="currentHealth" id="currentHealth" />
                        </Col>
                        <Col md={2}>
                        <Label>Maximum</Label>
                        <Input name="maxHealth" id="maxHealth" />
                        </Col>
                    </Row>
                    <br></br>
                        <h1>Saves</h1>
                        <Row>
                            <Col md={{size:2, offset:3}}>
                                <Label>Fortitude</Label>
                                <Input name="fortitude" id="fortitude" />
                            </Col>
                            <Col md={2}>
                                <Label>Reflex</Label>
                                <Input name="reflex" id="reflex" />
                            </Col>
                            <Col md={2}>
                                <Label>Will</Label>
                                <Input name="will" id="will" />
                            </Col>
                        </Row>                        
                    <br></br>
                        <h1>Defenses</h1>
                        <Row>
                            <Col md={{size:2, offset:1}}>
                                <Label>Armor Class</Label>
                                <Input name="armorClass" id="armorClass" />
                            </Col>
                            <Col md={2}>
                                <Label>Touch AC</Label>
                                <Input name="touchAC" id="touchAC" />
                            </Col>
                            <Col md={2}>
                                <Label>Flat-Footed AC</Label>
                                <Input name="fFAC" id="fFAC" />
                            </Col>
                            <Col md={2}>
                                <Label>Spell Resistance</Label>
                                <Input name="spellResistance" id="spellResistance" />
                            </Col>
                            <Col md={2}>
                                <Label>CMD</Label>
                                <Input name="CMD" id="CMD" />
                            </Col>
                        </Row>
                        <br></br>
                        <h1>Combat</h1>
                        <Row>
                            <Col md={{size:2, offset:1}}>
                                <Label>Inititiative</Label>
                                <Input name="inititiative" id="initiative" />
                            </Col>
                            <Col md={2}>
                                <Label>Basic Attack Bonus</Label>
                                <Input name="BaB" id="BaB" />
                            </Col>
                            <Col md={2}>
                                <Label>Melee</Label>
                                <Input name="melee" id="melee" />
                            </Col>
                            <Col md={2}>
                                <Label>Ranged</Label>
                                <Input name="ranged" id="ranged" />
                            </Col>
                            <Col md={2}>
                                <Label>CMB</Label>
                                <Input name="CMB" id="CMB" />
                            </Col>
                        </Row>
                        <br></br>
                        <h1>Speed</h1>
                        <Row>
                            <Col md={{size:2, offset:1}}>
                                <Label>Land</Label>
                                <Input name="land" id="land" />
                            </Col>
                            <Col md={2}>
                                <Label>Run</Label>
                                <Input name="Run" id="Run" />
                            </Col>
                            <Col md={2}>
                                <Label>Climb</Label>
                                <Input name="climb" id="climb" />
                            </Col>
                            <Col md={2}>
                                <Label>Swim</Label>
                                <Input name="swim" id="swim" />
                            </Col>
                            <Col md={2}>
                                <Label>Fly</Label>
                                <Input name="fly" id="fly" />
                            </Col>
                        </Row>
                        <br></br>
                        <h1>Equipment</h1>
                        <Row>
                        <Col md={{size:5, offset:1}}>
                            <Label>Weapons</Label>
                            <Input rows="5" type="textarea" name="weapons" id="weapons" />
                        </Col>
                        <Col md={5}>
                            <Label>Armor</Label>
                            <Input rows="5" type="textarea" name="armor" id="armor" />
                        </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col md={{size:10, offset:1}}>
                                <h1>Inventory</h1>
                                <Input rows="10" type="textarea" />
                            </Col>
                        </Row>
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