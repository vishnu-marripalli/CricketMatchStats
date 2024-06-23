


const handleOversReducer =(state)=>{

  if(state.hostteam.toss=='batting'){
    var team = state.hostteam
  }
  else{
     team = state.localteam
  }



  team.totalballs +=1;
  const completedOvers = Math.floor(team.totalballs / 6);
  const remainingBalls = team.totalballs % 6;

  team.Overs = `${completedOvers}.${remainingBalls}`


  if (team.totalballs % 6 === 0) {
    const stricker = team.Batsman.find(e => e.type=='stricker')
    const nonstricker = team.Batsman.find(e => e.type=='nonstricker')
    stricker.type='nonstricker'
    nonstricker.type='stricker'
  }

  
  
}

export default handleOversReducer