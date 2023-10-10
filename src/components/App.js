import React, { useEffect, useState } from "react";
import { Grid } from "semantic-ui-react";

import TVShowList from "./TVShowList";
import Nav from "./Nav";
import SelectedShowContainer from "./SelectedShowContainer";

function App() {
  const [shows, setShows] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedShow, setSelectedShow] = useState(null);
  const [episodes, setEpisodes] = useState([]);
  const [filterByRating, setFilterByRating] = useState("");
  const [filteredShows, setFilteredShows] = useState(shows)

  useEffect(() => {
    fetch("http://api.tvmaze.com/shows")
    .then((res) => res.json()) 
    .then((shows) => setShows(shows))
  
    }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function handleSearch(e) {
    setSearchTerm(e.target.value.toLowerCase());
  }

  function handleFilter(e) {
    e.target.value === "No Filter"
      ? setFilterByRating("")
      : setFilterByRating(e.target.value);

      const displayShows = shows.filter((s) => s.rating.average >= e.target.value);
      setFilteredShows(displayShows)
  }

  function selectShow(show) {
    setSelectedShow(show)
  
    fetch(`http://api.tvmaze.com/shows/${show.id}/episodes`)
    .then((res) => res.json())
    .then((episodes) => {
     
      setEpisodes(episodes);
      console.log(episodes)
    });
  
  }
 
 
  
console.log(filteredShows)

// console.log(selectedShow)
//  console.log(shows)
//   if (filterByRating) {
//     const displayShows = shows.filter((s) => s.rating.average >= filterByRating);
//     // setShows(displayShows)
//     console.log(displayShows)
//   // setShows(displayShows)
//   }

  return (
    <div>
      <Nav
        handleFilter={handleFilter}
        handleSearch={handleSearch}
        searchTerm={searchTerm}
      />
      <Grid celled>
        <Grid.Column width={5}>
        
                <SelectedShowContainer
                  show={selectedShow}
                  episodes={episodes}
                />

        </Grid.Column>
        <Grid.Column width={11}>
          <TVShowList
            shows={filteredShows}
            selectShow={selectShow}
          />
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default App;
