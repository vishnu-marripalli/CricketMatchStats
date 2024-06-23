import { useSelector } from 'react-redux'

export default function Bowlercard() {

  const teams = useSelector(state => state.score)

  if (teams.hostteam.toss == 'bowling') {
    var Bowler = teams.hostteam.Bowler
  }
  else {
    Bowler = teams.localteam.Bowler
  }

  const currentbowler =Bowler.find(e => e.iscurrentbowler ===true )
  const currentover = currentbowler.overs[currentbowler.overs.length-1]
 
  return (
    <>
      <div className="flex items-center justify-center m-6">
        <div className="bg-white  grid grid-cols-9 w-80  content-center justify-items-center items-center rounded p-2 gap-0.5">
          <div className=" col-span-2 text-xs font-normal">This over:</div>
          {currentover.map((ball,index) =>(
            <div key={index} className=" border-gray-400 border-2 rounded-full w-6 h-6 text-xs flex justify-center items-center">{ball}</div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center m-6">
        <div className="bg-white  w-80  rounded p-2 gap-0.5">

          <div className="grid grid-cols-8">
            <h1 className=" col-span-3 text-sm text-slate-500">Bowler</h1>
            <h1 className="text-sm text-slate-500">O</h1>
            <h1 className="text-sm text-slate-500">M</h1>
            <h1 className="text-sm text-slate-500">R</h1>
            <h1 className="text-sm text-slate-500">W</h1>
            <h1 className="text-sm text-slate-500">ER</h1>
          </div>
          <hr />
          {Bowler.map((bowler, index) => (
            <div key={index} className="grid grid-cols-8">
              <h1 className=" col-span-3 text-sm text-green-600 font-normal">{bowler.name}</h1>
              <h1 className="text-sm text-slate-500">{bowler.overs[bowler.overs.length-1].length>=6? bowler.overs.length :bowler.overs.length - 1+'.'+bowler.overs[bowler.overs.length-1].length}</h1>
              <h1 className="text-sm text-slate-500">{bowler.madines}</h1>
              <h1 className="text-sm text-slate-500">{bowler.runs} </h1>
              <h1 className="text-sm text-slate-500">{bowler.wickets}</h1>
              <h1 className="text-sm text-slate-500">{bowler.Economy}</h1>
            </div>
          ))}

        </div>
      </div>
    </>
  )
}
