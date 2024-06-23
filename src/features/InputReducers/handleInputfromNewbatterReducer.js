const handleInputfromNewbatterReducer = (state,action) =>{

    if(state.hostteam.toss=='batting'){
        var battingteam = state.hostteam
    
      }
      else{
         battingteam = state.localteam
         
      }

      
      
      battingteam.Batsman.push({
        type: "none",
        name: action.payload,
        runs: 0,
        ballsplayed: 0,
        fours: 0,
        sixes: 0,
        SR: 0,
      })
      const stricker = battingteam.Batsman.find(e => e.type === 'stricker');
      stricker.type = 'wicket'
      const nextbater = battingteam.Batsman.find(e => e.type === 'none');
      nextbater.type='stricker'


      battingteam.newbatterinput=false

}
export default handleInputfromNewbatterReducer