import React from "react"
import {SingleTeamMate} from "./SingleTeamMate"
export function TeamMate({teammates}) {
    return (
        <>
            {
                teammates.map(tm => <SingleTeamMate key={`${tm.name}${tm.role}`} tm={tm} /> )
            }
        </>
    )
}
