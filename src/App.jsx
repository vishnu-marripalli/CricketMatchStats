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
import Fotter from "./Components/Fotter"

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

        
        if(teams.matchStatus !== 'completed'){ 
          dispatch(handlewin())
          dispatch(handleinnings())
          console.log('in e')
          console.log(teams)
          
          
          
        }
      }, [batteam.totalballs, dispatch, teams.matchStatus])
      
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
          <Fotter />
          </>
        )
      }else if(batteam.isplayerinput===false){
        return(
          <>
          <Navbar />
          <Playersinput />
          <Fotter />
          </>
        )
      }else if(batteam.newbatterinput===true){
        return(
          <>
          <Navbar />
          <NewBatter />
          <Fotter />
          </>
        )
      }else if(ballteam.newbowlerinput===true){
        return(
          <>
          <Navbar />
          <NewBowler />
          <Fotter />
          </>
        )
      }else if((teams.matchStatus === 'completed')){
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
          <Fotter />
          {/* <Win /> */}
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