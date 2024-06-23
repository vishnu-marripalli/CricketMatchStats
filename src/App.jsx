import Ballupdater from "./Components/Ballupdater"
import Batsmancard from "./Components/Batsmancard"
import Bowlercard from "./Components/Bowlercard"
import Home from "./Components/Home"
import Navbar from "./Components/Navbar"
import NewBatter from "./Components/NewBatter"
import NewBowler from "./Components/NewBowler"
import Playersinput from "./Components/Playersinput"
import Scoreboard from "./Components/Scoreboard"
import { handleinnings, handlewin, initiallizinginngs } from "./features/Slice"
import {useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import Win from "./Components/Win"

function App() {

  const teams = useSelector(state => state.score)
  const dispatch = useDispatch()

    
    if(teams.hostteam.toss=='batting'){
        var batteam = teams.hostteam
        var ballteam=teams.localteam
      }
      else{
        batteam = teams.localteam
        ballteam= teams.hostteam
      }
    

     

      
      useEffect(() => {

        
        if(batteam.totalballs!==0){ 
          dispatch(handleinnings())
          
          
        }
      }, [batteam.totalballs,dispatch,ballteam.totalballs])
      
      // useEffect(() => {

        
      //   if(batteam.totalballs!==0&&ballteam.totalballs!==0){ 
         
      //     dispatch(handlewin())
          
      //   }
      // }, [batteam.totalballs,dispatch,ballteam.totalballs])
      
      useEffect(() => {
        
        dispatch(initiallizinginngs())
        
      },[batteam.players])
    
      if(batteam.ishomeinput === false){
        return(
          <>
          <Navbar />
          <Home />
          </>
        )
      }else if(batteam.isplayerinput===false){
        return(
          <>
          <Navbar />
          <Playersinput />
          </>
        )
      }else if(batteam.newbatterinput===true){
        return(
          <>
          <Navbar />
          <NewBatter />
          </>
        )
      }else if(ballteam.newbowlerinput===true){
        return(
          <>
          <Navbar />
          <NewBowler />
          </>
        )
      }else if(batteam.iswon===true || ballteam.iswon===true){
        return(
          <>
          <Win />
          </>
        )
      }
      else{
        return(
          <>
          <Navbar />
          <Scoreboard />
          <Batsmancard />
          <Bowlercard />
          <Ballupdater />
          </>
        )
      }
}

export default App

{/* <>
    <Navbar />
    <Home />
    
    <Scoreboard />
    <Batsmancard />
    <Bowlercard />
    <Ballupdater />
    </> */}


    // return (
      //   <>
      //   <Navbar />
      //   {team.ishomeinput=== false ? <Home />:<Playersinput />}
        
        
      //   </>
      // )