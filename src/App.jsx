//Import
import * as teamService from "./services/teamService.js";
const {fetchTeams} = teamService;
import { useState, useEffect } from "react";



//Parent Component
const App = () => {
  const [teams, setTeams] = useState([]);
  const [filteredTeams, setFilteredTeams] = useState([]);

  useEffect(() => {
    const fetchTeamsData = async () => {
      const data = await fetchTeams();
      setTeams(data);
      setFilteredTeams(data);
    }
    fetchTeamsData();
  }
  , []);

  const handleSearch = async (searchTerm) => {
    const filteredTeams = teams.filter((team) => {
      return team.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setFilteredTeams(filteredTeams);
  }

  return (

    <div>App</div>

  )
}

export default App;
