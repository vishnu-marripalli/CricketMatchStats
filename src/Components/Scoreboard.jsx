// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useSelector } from 'react-redux'


export default function Scoreboard() {
    
    
    const teams = useSelector(state => state.score)
    
    if(teams.hostteam.toss=='batting'){
        var team = teams.hostteam
      }
      else{
        team = teams.localteam
      }

  
    
    

    return (
        <div className="flex items-center justify-center m-6">
            <div className="bg-white  h-24  w-80 rounded p-2 flex flex-col  justify-around ">
                <div className="flex  flex-row flex-wrap  justify-around  ">
                    <h1 className="text-base font-normal">{team.name},1st inning</h1> <h1 className="text-base font-normal">CRR</h1>
                </div>
                <div className="flex  flex-row flex-wrap justify-around  items-baseline ">
                    <div className="flex flex-row items-baseline gap-2"><h1 className=" text-4xl font-semibold">{team.score}-{team.wickets}</h1> 
                    <h1 className="text-xl font-normal text-slate-500">({team.Overs})</h1>
                    </div> 
                    <h1 className="">{team.CRR}</h1>
                </div>
            </div>
        </div>
    )
}
