const intiallizingInningsReducer = (state) =>{


    if(state.hostteam.toss=='batting'){
        var team = state.hostteam
      }
      else {
         team = state.localteam
      }
      
      team.totalwickets=team.players-1
      state.localteam.totalwickets=team.players-1
      state.localteam.firstinngings=state.localteam.toss
      state.hostteam.firstinngings=state.hostteam.toss
      

}


export default intiallizingInningsReducer