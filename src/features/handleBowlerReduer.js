


const handleBowlerReducer = (state,action) => {

    if(state.hostteam.toss=='bowling'){
        var team = state.hostteam
    }
    else{
         team = state.localteam
    }


        const currentbowler =team.Bowler.find(e => e.iscurrentbowler ===true )
        const currentover = currentbowler.overs[currentbowler.overs.length-1]
        
        const ismadine = currentover.every(e=> e===0)

    
        currentover.push(action.payload)
        if ([1, 2, 3, 4, 5, 6, 0].includes(action.payload)){
          currentbowler.runs += action.payload
        }else{
            currentbowler.wickets+=1
        }
        
    if(ismadine && currentover.length ===6){
        currentbowler.madines+=1
    }
   
    currentbowler.Economy= parseFloat(currentbowler.runs/currentbowler.overs.length).toFixed(2)

}


export default handleBowlerReducer