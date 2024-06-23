const handleInputfromPlayerReducer = (state,action) =>{

    if(state.hostteam.toss=='batting'){
        var battingteam = state.hostteam
        var bowlingteam= state.localteam
      }
      else{
         battingteam = state.localteam
         bowlingteam= state.hostteam
      }

      battingteam.Batsman.push({
        type: "stricker",
        name: action.payload.stricker,
        runs: 0,
        ballsplayed: 0,
        fours: 0,
        sixes: 0,
        SR: 0,
      })
      battingteam.Batsman.push({
        type: "nonstricker",
        name: action.payload.nonstricker,
        runs: 0,
        ballsplayed: 0,
        fours: 0,
        sixes: 0,
        SR: 0,
      })
      bowlingteam.Bowler.push({
        name: action.payload.bowler,
        madines: 0,
        runs: 0,
        wickets: 0,
        Economy: 0,
        overs:[[]],
        iscurrentbowler:true,
      })
      battingteam.isplayerinput=true
      
}

export default handleInputfromPlayerReducer