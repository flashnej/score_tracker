import React from "react";

const RoundTile = (props) => {
    let round = props.round

    return (
      <div className="roundTile">
          <p> {round["Course Name"]} <br/> {round["Score"]}</p>
      </div>
    );
};

export default RoundTile;
