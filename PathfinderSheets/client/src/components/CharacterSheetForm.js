import React, { useContext, useEffect, useState } from 'react';
import { Col, Form, FormGroup, Input, Label, Row, Button } from 'reactstrap';
import SkillsForm from './SkillsForm';
import { UserProfileContext } from "../providers/UserProfileProvider";
import { useHistory } from 'react-router-dom';
import AttributesForm from './AttributesForm';

const CharacterSheetForm = () => {

    const [sheet, setSheet] = useState({
        Strength: 10, Dexterity: 10, Constitution: 10, Intelligence: 10, Wisdom: 10, Charisma: 10,
        Acrobatics: 0, Appraise: 0, Bluff: 0, Climb: 0, Craft: 0, Diplomacy: 0,
        DisableDevice: 0, EscapeArtist: 0, Fly: 0, HandleAnimal: 0, Heal: 0, Intimidate: 0,
        KnowledgeArcana: 0, KnowledgeDungeoneering: 0, KnowledgeEngineering: 0, KnowledgeGeography: 0, KnowledgeHistory: 0, KnowledgeLocal: 0,
        KnowledgeNature: 0, KnowledgeNobility: 0, KnowledgePlanes: 0, KnowledgeReligion: 0, Linguistics: 0, Perception: 0,
        Perform: 0, Profession: 0, Ride: 0, SenseMotive: 0, SleightOfHand: 0, Spellcraft: 0, Stealth: 0, Survival: 0, Swim: 0, UseMagicDevice: 0,
        AlignmentId: 1, RaceId: 1, CharacterLevel: 1, ClassDataId: 1,});
    const [alignments, setAlignments] = useState([]);
    const [classes, setClasses] = useState([]);
    const [races, setRaces] = useState([]);

    const { getToken, getCurrentUser } = useContext(UserProfileContext);

    const user = getCurrentUser();

    const history = useHistory();

    useEffect(() => {
        getAlignments();
        getClasses();
        getRaces();
    }, [])


    const getAlignments = () => {
        fetch('/api/alignment')
            .then(res => res.json())
            .then(res => setAlignments(res))
    };

    const getClasses = () => {
        fetch('/api/class')
            .then(res => res.json())
            .then(res => setClasses(res))
    };

    const getRaces = () => {
        fetch('/api/race')
            .then(res => res.json())
            .then(res => setRaces(res))
    };

    const skillArray = ["Acrobatics", "Appraise", "Bluff", "Climb", "Craft", "Diplomacy", "Disable Device", "Escape Artist", "Fly", "Handle Animal", "Heal", "Intimidate",
        "Knowledge(Arcana)", "Knowledge(Dungeoneering)", "Knowledge(Engineering)", "Knowledge(Geography)", "Knowledge(History)", "Knowledge(Local)", "Knowledge(Nature)",
        "Knowledge(Nobility)", "Knowledge(Planes)", "Knowledge(Religion)", "Linguistics", "Perception", "Perform", "Profession", "Ride", "Sense Motive", "Sleight Of Hand",
        "Spellcraft", "Stealth", "Survival", "Swim", "Use Magic Device"];

    const attributeArray = ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"]

    const handleChange = (e) => {
        const newSheet = { ...sheet };
        newSheet[e.target.name] = e.target.value;
        setSheet(newSheet);
    }

    const addNewSheet = (sheet) => {
        getToken()
            .then((token) => {
                fetch('/api/charactersheet', {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/JSON",
                        Authorization: `Bearer ${token}`
                    },
                    body: JSON.stringify(sheet)
                })
            })
            .then(() => history.push('/home'))
    };

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
                                <Input name="characterName" required onChange={((e) => handleChange(e))} />
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label>Alignment</Label>
                                <Input type="select" name="alignmentId" required onChange={((e) => handleChange(e))}>
                                    {/* <option hidden>Select an Alignment</option> */}
                                    {alignments.map((alignment) => (
                                        <option value={alignment.id} key={alignment.id}>
                                            {alignment.alignmentName}
                                        </option>
                                    ))}
                                </Input>
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label>Player Name</Label>
                                <Input readOnly value={user.displayName} />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={5}>
                            <Label>Class</Label>
                            <Input type="select" name="classDataId" required onChange={((e) => handleChange(e))}>
                                {/* <option hidden>Select a Class</option> */}
                                {classes.map((classx) => (
                                    <option value={classx.id} key={classx.id}>
                                        {classx.className}
                                    </option>
                                ))}
                            </Input>
                        </Col>
                        <Col md={1}>
                            <Label>Level</Label>
                            <Input type="select" name="characterLevel" required onChange={((e) => handleChange(e))} >
                                {/* <option hidden>Select a Level</option> */}
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                                <option>11</option>
                                <option>12</option>
                                <option>13</option>
                                <option>14</option>
                                <option>15</option>
                                <option>16</option>
                                <option>17</option>
                                <option>18</option>
                                <option>19</option>
                                <option>20</option>
                            </Input>
                        </Col>
                        <Col md={3}>
                            <Label>Deity</Label>
                            <Input name="deity" onChange={((e) => handleChange(e))} />
                        </Col>
                        <Col md={3}>
                            <Label>Homeland</Label>
                            <Input name="homeland" onChange={((e) => handleChange(e))} />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={3}>
                            <Label>Race</Label>
                            <Input type="select" name="raceId" required onChange={((e) => handleChange(e))}>
                                {/* <option hidden>Select a Race</option> */}
                                {races.map((race) => (
                                    <option value={race.id} key={race.id}>
                                        {race.raceName}
                                    </option>
                                ))}
                            </Input>
                        </Col>
                        <Col md={3}>
                            <Label>Size</Label>
                            <Input name="size" onChange={((e) => handleChange(e))} />
                        </Col>
                        <Col md={1}>
                            <Label>Gender</Label>
                            <Input name="gender" onChange={((e) => handleChange(e))} />
                        </Col>
                        <Col md={1}>
                            <Label>Age</Label>
                            <Input name="age" onChange={((e) => handleChange(e))} />
                        </Col>
                        <Col md={1}>
                            <Label>Height</Label>
                            <Input name="height" onChange={((e) => handleChange(e))} />
                        </Col>
                        <Col md={1}>
                            <Label>Weight</Label>
                            <Input name="weight" onChange={((e) => handleChange(e))} />
                        </Col>
                        <Col md={1}>
                            <Label>Hair</Label>
                            <Input name="hair" onChange={((e) => handleChange(e))} />
                        </Col>
                        <Col md={1}>
                            <Label>Eyes</Label>
                            <Input name="eyes" onChange={((e) => handleChange(e))} />
                        </Col>
                    </Row>
                </Col>
            </Row>
            <br></br>
            <Row>
                <Col md={6}>
                    <h1>Attributes</h1>
                    {attributeArray.map(attribute => <AttributesForm key={attribute} attribute={attribute} handleChange={handleChange} sheet={sheet} />)}
                    <h1>Health</h1>
                    <Row>
                        <Col md={{ size: 2, offset: 4 }}>
                            <Label>Current</Label>
                            <Input name="currentHealth" onChange={((e) => handleChange(e))} />
                        </Col>
                        <Col md={2}>
                            <Label>Maximum</Label>
                            <Input name="maxHealth" onChange={((e) => handleChange(e))} />
                        </Col>
                    </Row>
                    <br></br>
                    <h1>Saves</h1>
                    <Row>
                        <Col md={{ size: 2, offset: 3 }}>
                            <Label>Fortitude</Label>
                            <Input name="fortitude" onChange={((e) => handleChange(e))} />
                        </Col>
                        <Col md={2}>
                            <Label>Reflex</Label>
                            <Input name="reflex" onChange={((e) => handleChange(e))} />
                        </Col>
                        <Col md={2}>
                            <Label>Will</Label>
                            <Input name="will" onChange={((e) => handleChange(e))} />
                        </Col>
                    </Row>
                    <br></br>
                    <h1>Defenses</h1>
                    <Row>
                        <Col md={{ size: 2, offset: 1 }}>
                            <Label>Armor Class</Label>
                            <Input name="armorClass" onChange={((e) => handleChange(e))} />
                        </Col>
                        <Col md={2}>
                            <Label>Touch AC</Label>
                            <Input name="touchAC" onChange={((e) => handleChange(e))} />
                        </Col>
                        <Col md={2}>
                            <Label>Flat-Footed AC</Label>
                            <Input name="flatFootedAC" onChange={((e) => handleChange(e))} />
                        </Col>
                        <Col md={2}>
                            <Label>Spell Resistance</Label>
                            <Input name="spellResistance" onChange={((e) => handleChange(e))} />
                        </Col>
                        <Col md={2}>
                            <Label>CMD</Label>
                            <Input name="cMDefense" onChange={((e) => handleChange(e))} />
                        </Col>
                    </Row>
                    <br></br>
                    <h1>Combat</h1>
                    <Row>
                        <Col md={{ size: 2, offset: 1 }}>
                            <Label>Inititiative</Label>
                            <Input name="inititiative" onChange={((e) => handleChange(e))} />
                        </Col>
                        <Col md={2}>
                            <Label>Basic Attack Bonus</Label>
                            <Input name="BaB" onChange={((e) => handleChange(e))} />
                        </Col>
                        <Col md={2}>
                            <Label>Melee</Label>
                            <Input name="melee" onChange={((e) => handleChange(e))} />
                        </Col>
                        <Col md={2}>
                            <Label>Ranged</Label>
                            <Input name="ranged" onChange={((e) => handleChange(e))} />
                        </Col>
                        <Col md={2}>
                            <Label>CMB</Label>
                            <Input name="cMBouns" onChange={((e) => handleChange(e))} />
                        </Col>
                    </Row>
                    <br></br>
                    <h1>Speed</h1>
                    <Row>
                        <Col md={{ size: 2, offset: 1 }}>
                            <Label>Land</Label>
                            <Input name="landSpeed" onChange={((e) => handleChange(e))} />
                        </Col>
                        <Col md={2}>
                            <Label>Run</Label>
                            <Input name="Run" onChange={((e) => handleChange(e))} />
                        </Col>
                        <Col md={2}>
                            <Label>Climb</Label>
                            <Input name="climbSpeed" onChange={((e) => handleChange(e))} />
                        </Col>
                        <Col md={2}>
                            <Label>Swim</Label>
                            <Input name="swimSpeed" onChange={((e) => handleChange(e))} />
                        </Col>
                        <Col md={2}>
                            <Label>Fly</Label>
                            <Input name="flySpeed" onChange={((e) => handleChange(e))} />
                        </Col>
                    </Row>
                    <br></br>
                    <h1>Equipment</h1>
                    <Row>
                        <Col md={{ size: 5, offset: 1 }}>
                            <Label>Weapons</Label>
                            <Input rows="5" type="textarea" name="weapon" onChange={((e) => handleChange(e))} />
                        </Col>
                        <Col md={5}>
                            <Label>Armor</Label>
                            <Input rows="5" type="textarea" name="armor" onChange={((e) => handleChange(e))} />
                        </Col>
                    </Row>
                    <br></br>
                    <Row>
                        <Col md={{ size: 10, offset: 1 }}>
                            <h1>Inventory</h1>
                            <Input rows="10" type="textarea" name="inventory" onChange={((e) => handleChange(e))} />
                        </Col>
                    </Row>
                </Col>
                <Col md={6}>
                    <h1>Skills</h1>
                    {skillArray.map(skill => <SkillsForm key={skill} skill={skill} sheet={sheet} handleChange={handleChange} />)}
                    <br></br>
                    <Row>
                        <Col md={{ size: 2, offset: 4 }}>
                            <Label>Skill Points Used</Label>
                            <Input readOnly value={0} />
                        </Col>
                        <Col md={2}>
                            <Label>Total Skill Points</Label>
                            <Input readOnly value={0} />
                        </Col>
                    </Row>
                    <br></br>
                </Col>

            </Row>
            <Button color="info" onClick={e => {
                e.preventDefault()
                addNewSheet(sheet)
            }}>Save Character</Button>
        </Form>
    )
}
export default CharacterSheetForm;