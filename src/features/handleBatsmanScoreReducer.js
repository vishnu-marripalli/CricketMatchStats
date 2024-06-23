// features/score/handleBatsmanScoreReducer.js
const handleBatsmanScoreReducer = (state, action) => {

  if(state.hostteam.toss=='batting'){
    var team = state.hostteam
  }
  else{
     team = state.localteam
  }
 


    const stricker = team.Batsman.find(e => e.type === 'stricker');
    if (stricker) {
      stricker.runs += Number(action.payload);
      stricker.ballsplayed += 1;
      if (action.payload === 4) stricker.fours += 1;
      if (action.payload === 6) stricker.sixes += 1;
      stricker.SR= ((stricker.runs / stricker.ballsplayed) * 100).toFixed(2);
    }
  };
  
  export default handleBatsmanScoreReducer;
  