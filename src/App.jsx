//Import
import * as teamService from "./services/teamService.js";
const {fetchTeams} = teamService;


//Parent Component
const App = () => {
  fetchTeams();

  return (

    <div>App</div>

  )
}

export default App;
