//Imports and dependencies
import axios from "axios";



// Class and business logic
class Notes_Queries {
    
    //Constants and helper variables
    GET_ALL_NOTES = 'http://localhost:3001/notes';

    HEADERS = {
        id : 'ID',
        important:'Important',
        content:'Content',
        date: 'Date'
    };

    CONTENT = {
        footer: 'My first steps on REACT-Vite',
        loadingMessage: 'We are working on it'
    };


    // GET
    getNotes = ()=>{
        return(
        axios.get(this.GET_ALL_NOTES)
        .then((response)=>(response.data))
        );
    }

}

export default Notes_Queries;