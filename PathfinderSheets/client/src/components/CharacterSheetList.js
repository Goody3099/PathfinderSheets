import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardImg, CardText, CardTitle, Col, Row } from "reactstrap";

const CharacterSheetList = ({sheets}) => {
  console.log(sheets)
    return (
      <Row>
      {sheets.map((sheet) => {
           return (
             <Col md={3}>
            <Link to={`/charactersheet/${sheet.characterSheet.id}`}>
              <Card>
                <CardImg top width="100%" src={sheet.characterSheet.characterPicture} alt={sheet.characterSheet.characterName} />
                <CardBody>
                  <CardTitle tag="h5">{sheet.characterSheet.characterName}</CardTitle>
                  <CardText tag="h6">Level {sheet.characterSheet.characterLevel} {sheet.race.raceName} {sheet.class.className}</CardText>
                </CardBody>
              </Card>
            </Link>
            </Col>
          );
      })}
      </Row>
    );
};
export default CharacterSheetList;