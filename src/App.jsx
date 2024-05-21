//Import
import * as teamService from "./services/teamService.js";
const {fetchTeams} = teamService;
import { useState, useEffect } from "react";


//Parent Component
const App = () => {
  const [teams, setTeams] = useState([]);
  const [filteredTeams, setFilteredTeams] = useState([]);
  const [searchString, setSearchString] = useState('')

  useEffect(() => {
    const fetchTeamsData = async () => {
      const data = await fetchTeams();
      setTeams(data);
      setFilteredTeams(data);
    }
    fetchTeamsData();
  }
  , []);

  const handleSearch = async (event) => {
    event.preventDefault();
    const filteredTeams = teams.filter((team) => {
      return team.name.toLowerCase().includes(searchString.toLowerCase());
    });
    setFilteredTeams(filteredTeams);
  }

  return (
    <>
    <h1>Soccer Teams!</h1>
      <form onSubmit={handleSearch}>
        <label htmlFor="searchString">Enter name of team: </label>
        <input
          type="text"
          name="searchString"
          id="searchString"
          value={searchString}
          onChange={(event) => setSearchString(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    
    <ul>
      {filteredTeams.map((team) => (
      <li key={team._id}>
        <h2>{team.name}</h2>
      </li>
      ))}
    </ul>

      {/* <ul>
        {teams.map((team) => (
          <li key={team._id}>
            <span>{team.name}</span>
            <p>City: {team.city}</p>
          </li>
        ))}
      </ul> */}
    </>
  )
}

export default App;
