import React, { useState } from "react";
import Episode from "./Episode";

function SelectedShowContainer({show, episodes}) {
const [epOptions, setEpOptions] = useState(null)
if (!show) return "no show"

const seasons = episodes.map((e) => e.season)
const lastSeason = Math.max(...seasons)

const options = []
for(let i = 0 ; i< lastSeason ; i++){
options[i] = i +1
}

const optionSeasons = options.map((o) => (
 <option key={o}>{"Season " + o}</option>
))

function handleChange(e) {
  e.preventDefault()
  const selected = e.target.value
  const number = parseInt(selected.match(/\d+/)[0])
  const eps = episodes.filter((ep) => ep.season === number)
  const epO = eps.map((episode) => {
    return <Episode
    key={episode.id}
    myEpisode={episode}
    />
  })
  setEpOptions(epO)
  
}

return (
      <div style={{ position: "static" }}>
        <h2>{show.name}</h2>
        <img src={show.image.medium} alt="" />
        <p dangerouslySetInnerHTML={{ __html: show.summary }}></p>
        <p>Premiered: {show.premiered}</p>
        <p>Status: {show.status}</p>
        <p>Average Rating: {show.rating.average}</p>
        <ul>
   
        </ul>
        <select 
        style={{ display: "block" }} 
        onChange={handleChange}
        >
       
        {optionSeasons}
        </select>
        {epOptions}
        
      </div>
    );
  }
  


export default SelectedShowContainer
 