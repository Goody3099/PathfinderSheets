import React, { useState, useEffect, useContext } from "react";
import CharacterSheetList from "../components/CharacterSheetList";
import { UserProfileContext } from "../providers/UserProfileProvider";

const Home = () => {
    const [sheets, setSheets] = useState([]);
    const { getToken } = useContext(UserProfileContext);

    useEffect(() => {
      getCharacterSheets()
    }, []);

    const getCharacterSheets = () => {
      return getToken()
      .then((token) =>
        fetch("/api/charactersheet", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`
          },
        })
        .then((res) => res.json())
        .then((sheets) => {
            setSheets(sheets);
        }));
    }
    
    if(!sheets) return null;
    
    return (
        <div className="column">
          <div className="row">
            <div className="col-lg-10 col-xs-12">
              <CharacterSheetList sheets={sheets} getCharacterSheets={getCharacterSheets} />
            </div>
          </div>
        </div >
      );
}
export default Home;