
const handleEachBallReducer = (state, action) => {

  if(state.hostteam.toss=='batting'){
    var team = state.hostteam
  }
  else{
     team = state.localteam
  }
  
    if ([1, 2, 3, 4, 5, 6, 0].includes(action.payload)) {
      team.score += Number(action.payload);
    } 
    const overs = team.totalballs/6
    if(team.score===0){
      team.CRR=0
    }else{
      team.CRR=parseFloat(team.score/overs).toFixed(2)
    }
   
  };
  
  export default handleEachBallReducer;
  