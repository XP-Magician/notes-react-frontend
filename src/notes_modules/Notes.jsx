//Dependencies
import { useState,useEffect } from "react";
import Notes_Queries from './notes_queries.jsx'


//Components
export const Notes = ()=>{

    // Business logic
   const notesQueries = new Notes_Queries();
   //All states
   const [notes,setNotes] = useState([]);

   //All efects
   useEffect(()=>{
       notesQueries.getNotes()
       .then(json=>setNotes(json))
       .catch(err=>console.log(err));
   },[])

   //UI 
   return(
        <div>
            <table>
                <thead>

                    <tr>
                        <td>
                            {notesQueries.HEADERS.id}
                        </td>
                        <td>
                            {notesQueries.HEADERS.important}
                        </td>
                        <td>
                            {notesQueries.HEADERS.content}
                        </td>
                        <td>
                            {notesQueries.HEADERS.date}
                        </td>
                    </tr>
                </thead>
                        
                <tbody>
                    {
                        notes.length>0
                        ?
                        notes.map((nt)=>{
                        let {id,content,important,date} = nt;
                        return(
                            <tr key={id}>
                                <td>
                                    {id}
                                </td>
                                <td>
                                    {important?'Yes':'No'}
                                </td>
                                <td>
                                    {content}
                                </td>
                                <td>
                                    {date}
                                </td>
                            </tr>
                            
                            )})
                        
                        : <tr>
                            <td>{notesQueries.CONTENT.loadingMessage}</td>
                          </tr>
                    }
                </tbody>

                <tfoot>
                    <tr>
                        <td>{notesQueries.CONTENT.footer}</td>
                    </tr>
                </tfoot>
            </table>

        </div>
   );

}

