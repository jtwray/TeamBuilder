import React from "react"
import {SingleTeamMate} from "./SingleTeamMate"
export function AllTeamMates({teammates}) {
    return (
        <>
            {
                teammates.map(tm => <SingleTeamMate key={`${tm.name}${tm.role}`} tm={tm} /> )
            }
        </>
    )
}
