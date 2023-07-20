// Dependencies
import {useState,useEffect} from 'react';
import CountriesQueries from './countries_queries.jsx';
import '../App.css'

//Components
const Countries = ()=>{

    //Helpers and business logic
    const countries_queries = new CountriesQueries();
    
    const handleTyping = (event)=>{
    setLookingFor(event.target.value);
    }

    //All states
    const [lookingFor,setLookingFor] = useState('');
    const [countries,setCountries] = useState([]);

    useEffect(()=>{
        //Triggered if user is typing
        console.log('Effect triggered');
        countries_queries.getCountry(lookingFor)
        .then(response=>setCountries(response))
        .catch(error=>setCountries([]));
    },[lookingFor])


    //UI
    return (
         <div>
            <input type='text' onChange={handleTyping} placeholder='Nombre del pais: '></input>
            {
            countries.length>0
            ?
                <ul>{countries.length>10
                    ?
                    <li>Demasiadas coincidencias, especifique mas</li>
                    :
                    countries.map((country)=>(
                    <>
                        <div key={country.flags.svg} className='container'>
                                <li className='title'>
                                {country.name.common}
                                </li>
                                <img src={country.flags.svg} 
                                alt={country.flags.alt} 
                                className='card'>
                                </img> 
                                {country.subregion}
                        </div>   
                    </>
                    
                    
                    ))
                    }   
                </ul>
            :
                <h1>Nada aun</h1>
            }
         </div>
    )



}  

export default Countries;

