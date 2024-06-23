const switchBowlerReducer = (state) => {
    
    if(state.hostteam.toss=='bowling'){
        var team = state.hostteam
    }
    else{
         team = state.localteam 
    }


    const currentbowler =team.Bowler.find(e => e.iscurrentbowler ===true )
    const currentover = currentbowler.overs[currentbowler.overs.length-1]
    
    if(currentover.length>=6){

        
        
            team.newbowlerinput=true
        
    }
}
export default switchBowlerReducer