import React from "react"
import myData from "../data/data"

function SkillSet() {
    return (
        <div>
            <h1>SkillSet</h1>
            {myData.skill.map((skill,index)=>{
                return (
                    <p key={index}>{skill.title}</p>
                )
            })}
        </div>
    )
}
function CareerTraits() {
    return (

    )
}
function RecentWork() {
    return (

    )
}

function SideSection() {
    return (

    )
}

export default SideSection