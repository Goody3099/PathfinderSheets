import React, { useState, useEffect } from "react";

const Home = () => {
    const [sheets, setSheets] = useState([]);

    useEffect(() => {
        fetch("/api/charactersheet")
        .then((res) => res.json())
        .then((sheets) => {
            setSheets(sheets);
        });
    }, []);

    return (
        <div className="column">
          <div className="row">
            <div className="col-lg-10 col-xs-12">
              <CharacterSheetList sheets={sheets} />
            </div>
          </div>
        </div >
      );
}
export default Home;