import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardImg, CardSubtitle, CardTitle, Col, Container, Row } from "reactstrap";

const CharacterSheetList = ({sheets}) => {
  console.log(sheets)
    return (
      <Row>
      {sheets.map((sheet) => {
           return (
             <Col md={6}>
            <Link to={`/charactersheet/${sheet.id}`}>
              <Card>
                <CardImg top width="100%" src={sheet.CharacterPicture} alt={sheet.characterName} />
                <CardBody>
                  <CardTitle tag="h5">{sheet.characterName}</CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">Level {sheet.characterLevel} {sheet.class}</CardSubtitle>
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