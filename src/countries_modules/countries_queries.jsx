//Dependencies
import axios  from "axios";

//Business logic
class Countries_Queries {

    GET_COUNTRY_BY_NAME = 'https://restcountries.com/v3.1/name/';

    getCountry = (country_name)=>{
        try{
            return(               
                axios.get(this.GET_COUNTRY_BY_NAME+country_name)
                .then(json=>json.data)
            );
        }catch(error){
            return(Promise.reject(error));
        }
    }

}

export default Countries_Queries;