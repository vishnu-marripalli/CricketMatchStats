const intiallizingInningsReducer = (state) =>{


      
      state.hostteam.totalwickets=state.hostteam.players-1
      state.localteam.totalwickets=state.hostteam.players-1
      state.localteam.firstinngings=state.localteam.toss
      state.hostteam.firstinngings=state.hostteam.toss
      

}


export default intiallizingInningsReducer