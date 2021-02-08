import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Col, Form, FormGroup, Input, Label, Row, Button } from 'reactstrap';
import Attributes from "../components/Attributes";
import Skills from "../components/Skills";
import { UserProfileContext } from "../providers/UserProfileProvider";

const CharacterSheetDetails = () => {

    const [sheet, setSheet] = useState({});
    const [alignments, setAlignments] = useState([]);
    const [classes, setClasses] = useState([]);
    const [races, setRaces] = useState([]);

    const { id } = useParams();

    const { getToken, getCurrentUser } = useContext(UserProfileContext);

    const user = getCurrentUser();

    const history = useHistory();

    const getCharacterSheetById = () => {
        getToken()
        .then((token) => {
            fetch(`/api/charactersheet/${id}`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((res) => res.json())
            .then((sheet) => {
                setSheet(sheet);
            });
        })
    }

    const updateCharacterSheet = () => {
        return getToken()
        .then((token) => {
            fetch(`/api/charactersheet/${sheet.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(sheet),
            })
        })
    }

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
                        "Knowledge(Nobility)", "Knowledge(Planes)", "Knowledge(Religion)", "Linguistics", "Perception", "Perform", "Profession", "Ride", "Sense Motive", "Sleight of Hand",
                        "Spellcraft", "Stealth", "Survival", "Swim", "Use Magic Device"];

    const attributeArray = ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"]

    const handleChange = (e) => {
        const newSheet = {...sheet};
        newSheet[e.target.name] = e.target.value;
        setSheet(newSheet);
    }

    useEffect(() => {
        getAlignments();
        getClasses();
        getRaces();
        getCharacterSheetById();
    }, [])

    useEffect(() => {
        const timer = setTimeout(() => {
            updateCharacterSheet();
        }, 3000);
        return () => clearInterval(timer);
    }, [sheet]);

    const addSkillPoints = () => {
        let sum;
        skillArray.forEach(skill => {
            sum+= parseInt(sheet[skill])
        });
        return sum;
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
                             <Input name="characterName" defaultValue={sheet.characterName} onChange={((e) => handleChange(e))}/>
                         </FormGroup>
                     </Col>
                     <Col md={4}>
                         <FormGroup>
                             <Label>Alignment</Label>
                             <Input type="select" name="alignmentId" onChange={((e) => handleChange(e))}>
                                 <option disabled hidden>Select an Alignment</option>
                                 {alignments.map((alignment) => (
                                     <option value={alignment.id} key={alignment.id} selected={sheet.alignmentId === alignment.id} >
                                         {alignment.alignmentName}
                                     </option>
                                 ))}
                              </Input>                                
                         </FormGroup>
                         </Col>
                         <Col md={4}>
                         <FormGroup>
                             <Label>Player Name</Label>
                             <Input readOnly value={user.displayName}/>
                         </FormGroup>
                         </Col>
                 </Row>
                 <Row>
                     <Col md={5}>
                         <Label>Class</Label>
                         <Input type="select" name="classId" onChange={((e) => { handleChange(e)})}>
                                 <option disabled hidden>Select a Class</option>
                                 {classes.map((classx) => (
                                     <option value={classx.id} key={classx.id}  selected={sheet.classId === classx.id}>
                                         {classx.className}
                                     </option>
                                 ))}
                              </Input>
                     </Col>
                     <Col md={1}>
                         <Label>Level</Label>
                         <Input type="select" name="characterLevel" onChange={((e) => { handleChange(e)})} >
                            <option selected={sheet.characterLevel === 1}>1</option>
                            <option selected={sheet.characterLevel === 2}>2</option>
                            <option selected={sheet.characterLevel === 3}>3</option>
                            <option selected={sheet.characterLevel === 4}>4</option>
                            <option selected={sheet.characterLevel === 5}>5</option>
                            <option selected={sheet.characterLevel === 6}>6</option>
                            <option selected={sheet.characterLevel === 7}>7</option>
                            <option selected={sheet.characterLevel === 8}>8</option>
                            <option selected={sheet.characterLevel === 9}>9</option>
                            <option selected={sheet.characterLevel === 10}>10</option>
                            <option selected={sheet.characterLevel === 11}>11</option>
                            <option selected={sheet.characterLevel === 12}>12</option>
                            <option selected={sheet.characterLevel === 13}>13</option>
                            <option selected={sheet.characterLevel === 14}>14</option>
                            <option selected={sheet.characterLevel === 15}>15</option>
                            <option selected={sheet.characterLevel === 16}>16</option>
                            <option selected={sheet.characterLevel === 17}>17</option>
                            <option selected={sheet.characterLevel === 18}>18</option>
                            <option selected={sheet.characterLevel === 19}>19</option>
                            <option selected={sheet.characterLevel === 20}>20</option>
                            </Input>
                     </Col>
                     <Col md={3}>
                         <Label>Deity</Label>
                         <Input name="deity" defaultValue={sheet.deity} onChange={((e) => handleChange(e))}/>
                     </Col>
                     <Col md={3}>
                         <Label>Homeland</Label>
                         <Input name="homeland" defaultValue={sheet.homeland} onChange={((e) => handleChange(e))}/>
                     </Col>
                 </Row>
                 <Row>
                     <Col md={3}>
                         <Label>Race</Label>
                         <Input type="select" name="raceId" defaultValue={sheet.raceId} onChange={((e) => handleChange(e))}>
                                 <option disabled hidden>Select a Race</option>
                                 {races.map((race) => (
                                     <option value={race.id} key={race.id} selected={sheet.raceId === race.id}>
                                         {race.raceName}
                                     </option>
                                 ))}
                              </Input>  
                     </Col>
                     <Col md={3}>
                         <Label>Size</Label>
                         <Input name="size" defaultValue={sheet.size} onChange={((e) => handleChange(e))}/>
                     </Col>
                     <Col md={1}>
                         <Label>Gender</Label>
                         <Input name="gender" defaultValue={sheet.gender} onChange={((e) => handleChange(e))}/>
                     </Col>
                     <Col md={1}>
                         <Label>Age</Label>
                         <Input name="age" defaultValue={sheet.age} onChange={((e) => handleChange(e))}/>
                     </Col>
                     <Col md={1}>
                         <Label>Height</Label>
                         <Input name="height" defaultValue={sheet.height} onChange={((e) => handleChange(e))}/>
                     </Col>
                     <Col md={1}>
                         <Label>Weight</Label>
                         <Input name="weight" defaultValue={sheet.weight} onChange={((e) => handleChange(e))}/>
                     </Col>
                     <Col md={1}>
                         <Label>Hair</Label>
                         <Input name="hair" defaultValue={sheet.hair} onChange={((e) => handleChange(e))}/>
                     </Col>
                     <Col md={1}>
                         <Label>Eyes</Label>
                         <Input name="eyes" defaultValue={sheet.eyes} onChange={((e) => handleChange(e))}/>
                     </Col>
                 </Row>
            </Col>
            </Row>
            <br></br>
            <Row>
                <Col md={6}>
                        <h1>Attributes</h1>
                            {attributeArray.map(attribute => <Attributes key={attribute} attribute={attribute} handleChange={handleChange} sheet={sheet} />)}
                            <h1>Health</h1>
                    <Row>
                        <Col md={{size:2,offset:4}}>
                        <Label>Current</Label>
                        <Input name="currentHealth" defaultValue={sheet.currentHealth} onChange={((e) => handleChange(e))}/>
                        </Col>
                        <Col md={2}>
                        <Label>Maximum</Label>
                        <Input name="maximumHealth" defaultValue={sheet.maximumHealth} onChange={((e) => handleChange(e))}/>
                        </Col>
                    </Row>
                    <br></br>
                        <h1>Saves</h1>
                        <Row>
                            <Col md={{size:2, offset:3}}>
                                <Label>Fortitude</Label>
                                <Input name="fortitude" defaultValue onChange={((e) => handleChange(e))}/>
                            </Col>
                            <Col md={2}>
                                <Label>Reflex</Label>
                                <Input name="reflex" defaultValue onChange={((e) => handleChange(e))}/>
                            </Col>
                            <Col md={2}>
                                <Label>Will</Label>
                                <Input name="will" defaultValue onChange={((e) => handleChange(e))}/>
                            </Col>
                        </Row>                        
                    <br></br>
                        <h1>Defenses</h1>
                        <Row>
                            <Col md={{size:2, offset:1}}>
                                <Label>Armor Class</Label>
                                <Input name="armorClass" defaultValue={sheet.armorClass} onChange={((e) => handleChange(e))}/>
                            </Col>
                            <Col md={2}>
                                <Label>Touch AC</Label>
                                <Input name="touchAC" defaultValue={sheet.touchAC} onChange={((e) => handleChange(e))}/>
                            </Col>
                            <Col md={2}>
                                <Label>Flat-Footed AC</Label>
                                <Input name="flatFootedAC" defaultValue={sheet.flatFootedAC} onChange={((e) => handleChange(e))}/>
                            </Col>
                            <Col md={2}>
                                <Label>Spell Resistance</Label>
                                <Input name="spellResistance" defaultValue={sheet.spellResistance} onChange={((e) => handleChange(e))}/>
                            </Col>
                            <Col md={2}>
                                <Label>CMD</Label>
                                <Input name="cMDefense" defaultValue={sheet.cMDefense} onChange={((e) => handleChange(e))}/>
                            </Col>
                        </Row>
                        <br></br>
                        <h1>Combat</h1>
                        <Row>
                            <Col md={{size:2, offset:1}}>
                                <Label>Inititiative</Label>
                                <Input name="inititiative" defaultValue={sheet.inititiative} onChange={((e) => handleChange(e))}/>
                            </Col>
                            <Col md={2}>
                                <Label>Basic Attack Bonus</Label>
                                <Input name="basicAttackBonus" defaultValue onChange={((e) => handleChange(e))}/>
                            </Col>
                            <Col md={2}>
                                <Label>Melee</Label>
                                <Input name="melee" defaultValue={sheet.melee} onChange={((e) => handleChange(e))}/>
                            </Col>
                            <Col md={2}>
                                <Label>Ranged</Label>
                                <Input name="ranged" defaultValue={sheet.ranged} onChange={((e) => handleChange(e))}/>
                            </Col>
                            <Col md={2}>
                                <Label>CMB</Label>
                                <Input name="cMBouns" defaultValue={sheet.cMBonus} onChange={((e) => handleChange(e))}/>
                            </Col>
                        </Row>
                        <br></br>
                        <h1>Speed</h1>
                        <Row>
                            <Col md={{size:2, offset:1}}>
                                <Label>Land</Label>
                                <Input name="landSpeed" defaultValue={sheet.landSpeed} onChange={((e) => handleChange(e))}/>
                            </Col>
                            <Col md={2}>
                                <Label>Run</Label>
                                <Input readOnly value={Math.floor(sheet.landSpeed * 4)} />
                            </Col>
                            <Col md={2}>
                                <Label>Climb</Label>
                                <Input name="climbSpeed" defaultValue={sheet.climbSpeed} onChange={((e) => handleChange(e))}/>
                            </Col>
                            <Col md={2}>
                                <Label>Swim</Label>
                                <Input name="swimSpeed" defaultValue={sheet.swimSpeed} onChange={((e) => handleChange(e))}/>
                            </Col>
                            <Col md={2}>
                                <Label>Fly</Label>
                                <Input name="flySpeed" defaultValue={sheet.flySpeed} onChange={((e) => handleChange(e))}/>
                            </Col>
                        </Row>
                        <br></br>
                        <h1>Equipment</h1>
                        <Row>
                        <Col md={{size:5, offset:1}}>
                            <Label>Weapons</Label>
                            <Input rows="5" type="textarea" name="weapon" defaultValue={sheet.weapon} onChange={((e) => handleChange(e))}/>
                        </Col>
                        <Col md={5}>
                            <Label>Armor</Label>
                            <Input rows="5" type="textarea" name="armor" defaultValue={sheet.armor} onChange={((e) => handleChange(e))}/>
                        </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col md={{size:10, offset:1}}>
                                <h1>Inventory</h1>
                                <Input rows="10" type="textarea" name="inventory" defaultValue={sheet.inventory} onChange={((e) => handleChange(e))}/>
                            </Col>
                        </Row>
                </Col>
                    <Col md={6}>
                        <h1>Skills</h1>
                            {skillArray.map(skill => <Skills key={skill} skill={skill} sheet={sheet} handleChange={handleChange} />)}
                            <br></br>
                        <Row>
                        <Col md={{size:2, offset:4}}>
                            <Label>Skill Points Used</Label>
                            <Input readOnly value={addSkillPoints()} />
                        </Col>
                        <Col md={2}>
                            <Label>Total Skill Points</Label>
                            <Input readOnly value />
                        </Col>
                        </Row>
                        <br></br>
                    </Col>
                   
            </Row> 
            <Button color="info" onClick={e => {
                e.preventDefault()
                updateCharacterSheet()
            }}>Save Character</Button>    
        </Form>
    )
};
export default CharacterSheetDetails;