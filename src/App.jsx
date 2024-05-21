//Import
import * as teamService from "./services/teamService.js";
const {fetchTeams} = teamService;
import { useState, useEffect } from "react";
import { createUseStyles } from "react-jss";
import "./App.css";

const styles = createUseStyles({
  btn: {
    borderRadius: "7px",
    backgroundColor: "black",
    color: "white",
    cursor: "pointer",
  },
  title: {
    backgroundColor: "hsla(0, 0%, 9%, 0.53)",
    color: "white",
    padding: "5px",
    borderRadius: "7px",
    width: "295px",
    textShadow: "3px 3px 2px black",
  },
  teamName: {
    color: "white",
    textShadow: "3px 3px 3px black",
  }
});




//Parent Component
const App = () => {
  const [teams, setTeams] = useState([]);
  const [filteredTeams, setFilteredTeams] = useState([]);
  const [searchString, setSearchString] = useState('');

  const classes = styles();

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
    <div className="container">

      <main>
        <h1 className={classes.title}>Soccer Teams!</h1>
        <form onSubmit={handleSearch}>
          <label htmlFor="searchString">Enter name of team: </label>
          <input
            type="text"
            name="searchString"
            id="searchString"
            value={searchString}
            onChange={(event) => setSearchString(event.target.value)}
          />
          <button type="submit" className={classes.btn}>Search</button>
        </form>
        
        <ul>
          {filteredTeams.map((team) => (
          <li key={team._id}>
            <h2 className={classes.teamName}>{team.name}</h2>
            <p><span style={{color: "blue"}}>City:</span> <span style={{color: 'yellow'}}>{team.city}</span></p>
          </li>
          ))}
        </ul>
      </main>

      <div id="image">
        <img src="src/assets/soccer-net.jpg" alt="soccer-net" width="200px" style={{borderRadius: "100px"}}/>
      </div> 

    </div>
  )
}

export default App;
