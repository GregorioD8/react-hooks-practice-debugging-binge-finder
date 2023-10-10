import React from "react";

function TVShow({ show, selectShow }) {

  function onSelectShow() {
    selectShow(show)
  }
  return (
    <div>
      <br />
      <img 
      src={show.image.medium}  
      onClick={onSelectShow}
      alt="" />
    </div>
  );
}

export default TVShow;
// onClick={props.selectShow(props.show)}