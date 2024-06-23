// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useSelector } from 'react-redux'

export default function Batsmancard() {
    
    const teams = useSelector(state => state.score)
    
    if(teams.hostteam.toss=='batting'){
        var Batsman = teams.hostteam.Batsman
      }
      else{
        Batsman = teams.localteam.Batsman
      }
    
    const stricker = Batsman.find(e => e.type=='stricker')
    const nonstricker = Batsman.find(e => e.type=='nonstricker')
   
  return (
    <div className="flex items-center justify-center m-6">
        <div className="bg-white    w-80 rounded p-2  ">
            <div className="grid grid-cols-8">
                <h1 className=" col-span-4 text-sm text-slate-500">Batsman</h1>
                <h1 className="text-sm text-slate-500">B</h1>
                <h1 className="text-sm text-slate-500">4s</h1>
                <h1 className="text-sm text-slate-500">6s</h1>
                <h1 className="text-sm text-slate-500">SR</h1>
            </div>
            <hr />
            <div className="grid grid-cols-8">
            <h1 className=" col-span-3 text-sm text-green-600 font-normal">{stricker.name}*</h1>
                <h1 className="text-sm">{stricker.runs}</h1>
                <h1 className="text-sm text-slate-500">{stricker.ballsplayed} </h1>
                <h1 className="text-sm text-slate-500">{stricker.fours} </h1>
                <h1 className="text-sm text-slate-500">{stricker.sixes}</h1>
                <h1 className="text-sm text-slate-500">{stricker.SR}</h1>
            </div>
            <div className="grid grid-cols-8">
            <h1 className=" col-span-3 text-sm text-green-600 font-normal">{nonstricker.name}</h1>
                <h1 className="text-sm">{nonstricker.runs}</h1>
                <h1 className="text-sm text-slate-500">{nonstricker.ballsplayed} </h1>
                <h1 className="text-sm text-slate-500">{nonstricker.fours} </h1>
                <h1 className="text-sm text-slate-500">{nonstricker.sixes}</h1>
                <h1 className="text-sm text-slate-500">{nonstricker.SR}</h1>
            </div>
            
        </div>
    </div>
  )
}
