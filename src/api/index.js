
import axios from "axios";

const  URL = process.env.REACT_APP_API_URL

export const getAllClass = async () =>{
    let data = null;
    await axios
       
      .get( `${URL}/classes`)
      .then((res) => {
        data= res.data
      })
      .catch((error) => {
        console.log(error);
       
      });
    
    return data;
}
export const createClass = async (name,Section,Subject,Room) =>{

    await axios.post(`${URL}/classes`, {
        name: name,
        Section: Section,
        Subject: Subject,
        Room: Room,
      });

}