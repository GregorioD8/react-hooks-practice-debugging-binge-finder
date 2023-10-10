import React from "react";

function Episode({ myEpisode }) {
  let { number, name } = myEpisode
  console.log(myEpisode)
  return (
    <div>
      Episode {number} - {name}
    </div>
  );
}

export default Episode;
