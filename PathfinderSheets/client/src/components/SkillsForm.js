import React, { useState } from 'react';
import { Col, Input, Label, Row } from 'reactstrap';

const SkillsForm = ({skill, handleChange, sheet}) => {

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

      const skillMath = (skill) => {
        let result = sheet[getName(skill)]
        ? parseInt(sheet[getName(skill)])
        : 0;
        if(["Climb", "Swim"].includes(skill)) {
          result += Math.floor(parseInt((sheet.strength - 10) / 2))
          return result;
        }
        if([
          "Acrobatics",
          "Disable Device",
          "Escape Artist",
          "Fly",
          "Ride",
          "Sleight Of Hand",
          "Stealth",
        ].includes(skill)) {
          result += Math.floor(parseInt((sheet.dexterity - 10) / 2))
          return result;
        }
        if([
          "Appraise",
          "Craft",
          "Linguistics",
          "Knowledge(Arcana)",
          "Knowledge(Dungeoneering)",
          "Knowledge(Engineering)",
          "Knowledge(Geography)",
          "Knowledge(History)",
          "Knowledge(Local)",
          "Knowledge(Nature)",
          "Knowledge(Nobility)",
          "Knowledge(Planes)",
          "Knowledge(Religion)",
          "Spellcraft",
        ].includes(skill)) {
          result += Math.floor(parseInt((sheet.intelligence - 10) / 2))
          return result;
        }
        if(["Heal","Perception","Profession", "Survival"].includes(skill)) {
          result += Math.floor(parseInt((sheet.wisdom - 10) / 2))
          return result;
        }
        if([
          "Use Magic Device",
          "Perform",
          "Intimidate",
          "Handle Animal",
          "Bluff",
          "Disguise",
          "Diplomacy"
        ].includes(skill)) {
          result += Math.floor(parseInt((sheet.charisma - 10) / 2))
          return result;
        }
      }

      const skillMod = (skill) => {
        let result = 0;
        if(["Climb", "Swim"].includes(skill)) {
          result += Math.floor(parseInt((sheet.strength - 10) / 2))
          return result;
        }
        if([
          "Acrobatics",
          "Disable Device",
          "Escape Artist",
          "Fly",
          "Ride",
          "Sleight Of Hand",
          "Stealth",
        ].includes(skill)) {
          result += Math.floor(parseInt((sheet.dexterity - 10) / 2))
          return result;
        }
        if([
          "Appraise",
          "Craft",
          "Linguistics",
          "Knowledge(Arcana)",
          "Knowledge(Dungeoneering)",
          "Knowledge(Engineering)",
          "Knowledge(Geography)",
          "Knowledge(History)",
          "Knowledge(Local)",
          "Knowledge(Nature)",
          "Knowledge(Nobility)",
          "Knowledge(Planes)",
          "Knowledge(Religion)",
          "Spellcraft",
        ].includes(skill)) {
          result += Math.floor(parseInt((sheet.intelligence - 10) / 2))
          return result;
        }
        if(["Heal","Perception","Profession", "Survival"].includes(skill)) {
          result += Math.floor(parseInt((sheet.wisdom - 10) / 2))
          return result;
        }
        if([
          "Use Magic Device",
          "Perform",
          "Intimidate",
          "Handle Animal",
          "Bluff",
          "Disguise",
          "Diplomacy"
        ].includes(skill)) {
          result += Math.floor(parseInt((sheet.charisma - 10) / 2))
          return result;
        }
      }

      const checkNaN = (skill) => {
          if(isNaN(skillMod(skill)))
          {
            return 0;
          }
          else 
          {
              return skillMod(skill)
          }
      }

    return (
        <>
            <Col md={{offset:2}}>
                <Row>
                        <Label md={2}>{skill}</Label>
                    <Col md={2}>
                        <Input name={getName(skill)} defaultValue={checkNaN(skill)} onChange={((e) => handleChange(e))}/>
                    </Col> +
                    <Col md={2}>
                        <Input readOnly value={checkNaN(skill)} />
                    </Col> =
                    <Col md={2}>
                        <Input readOnly value={checkNaN(skill)} />
                    </Col>
                </Row>
            </Col>
            <br></br>
        </>
    )
}

export default SkillsForm;