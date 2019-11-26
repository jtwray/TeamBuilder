import React form "react"

export const SingleTeammate = ({tm})=>{
     return(
            <div>
                <h2>{tm.name}</h2>
                <ul>
                    <li>{tm.email}</li>
                    <li>{tm.role}</li>
                </ul>
            </div> 
          )
        } 
