import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardImg, CardText, CardTitle, Col, Row, Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { UserProfileContext } from "../providers/UserProfileProvider";

const CharacterSheetList = ({sheets, getCharacterSheets}) => {

  const { getToken } = useContext(UserProfileContext);

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const deleteCharacterSheet = (id) => {
   return getToken()
    .then((token) => {
      return fetch(`/api/charactersheet/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
    })
    .then(e => getCharacterSheets())
  }

    return (
      <Row>
      {sheets.map((sheet) => {
           return (
             <Col md={3} key={sheet.characterSheet.id}>
              <Card>
                <CardImg top width="100%" src={sheet.characterSheet.characterPicture} alt={sheet.characterSheet.characterName} />
                <CardBody>
            <Link to={`/charactersheet/${sheet.characterSheet.id}`}>
                  <CardTitle tag="h5">{sheet.characterSheet.characterName}</CardTitle>
                  <CardText tag="h6">Level {sheet.characterSheet.characterLevel} {sheet.race.raceName} {sheet.class.className}</CardText>
            </Link>
                  <Button color="danger" onClick={toggle}>Delete</Button>
                  
                  <div>
                    <Modal isOpen={modal} toggle={toggle}>
                      <ModalBody>
                        Are you sure you want to delete {sheet.characterSheet.characterName}
                      </ModalBody>
                      <ModalFooter>
                        <Button color="danger" onClick={e => {
                          deleteCharacterSheet(sheet.characterSheet.id);
                          toggle()
                        }}>Delete</Button>
                        <Button color="secondary" onClick={toggle}>Cancel</Button>
                      </ModalFooter>
                    </Modal>
                  </div>

                </CardBody>
              </Card>
            </Col>
          );
      })}
      </Row>
    );
};
export default CharacterSheetList;