import React from "react";
import { Grid } from "semantic-ui-react";
import TVShow from "./TVShow"

function TVShowList(props) {

    
const list = props.shows.map((s) => {
  return <TVShow
  key={s.id}
  show={s}
  selectShow={props.selectShow}
  />
})
    
  

  return (
    <div className="TVShowList">
      <Grid>{list}</Grid>
    </div>
  );
  }

export default TVShowList;
