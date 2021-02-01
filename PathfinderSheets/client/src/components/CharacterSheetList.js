import React from "react";
import { Card } from "reactstrap";


const CharacterSheetList = ({sheets}) => {
    return (
        <div>
      {sheets.map((sheet) => {
           return (
            <Link to={`/charactersheet/${sheet.id}`}>
              <Card>
                <CardImg top width="100%" src={sheet.CharacterPicture} alt={sheet.CharacterName} />
                <CardBody>
                  <CardTitle tag="h5">{sheet.CharacterName}</CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">Level {sheet.CharacterLevel} {sheet.Class}</CardSubtitle>
                </CardBody>
              </Card>
            </Link>
          );
      })}
    </div>
    );
};
export default CharacterSheetList;