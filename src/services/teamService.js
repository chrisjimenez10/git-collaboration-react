const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/teams`;

const fetchTeams = async () =>{
    try{
        const response = await fetch(BASE_URL);
        const data = await response.json();
        console.log(data);
        return data;
    }catch(error){
        console.error(error);
    }
};

export {fetchTeams};