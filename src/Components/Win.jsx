// eslint-disable-next-line no-unused-vars
  import {React,useState,useEffect} from 'react'
import {useSelector} from 'react-redux'

export default function Win() {
  const teams = useSelector(state => state.score)
  const [winMargin, setWinMargin] = useState(null);

  useEffect(() => {
    if (teams.winner) {
      if (teams.winner === teams.hostteam.name) {
        if (teams.hostteam.score > teams.localteam.score) {
          setWinMargin(teams.hostteam.score - teams.localteam.score);
        } else {
          setWinMargin(10 - teams.localteam.wickets);
        }
      } else {
        if (teams.localteam.score > teams.hostteam.score) {
          setWinMargin(teams.localteam.score - teams.hostteam.score);
        } else {
          setWinMargin(10 - teams.hostteam.wickets);
        }
      }
    }
  }, [teams.winner, teams.hostteam.name, teams.hostteam.score, teams.localteam.score, teams.localteam.wickets]);

  if (!teams.winner) {
    return null; // Return null if there's no winner yet
  }


  return (
    <>
    <div className="flex items-center justify-center m-6 flex-col">
      
        <div className="bg-white  h-56  w-80 rounded-lg  p-3 flex flex-col items-center gap-2 justify-center">
        
              <h1 className=" font-normal text-2xl text-green-500">Congratulations</h1>
              <h1 className=" font-normal text-sm text-green-500">{teams.winner} won by {winMargin}  </h1>
              
        </div>
       </div>
    </>
  )
}
