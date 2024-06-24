

const handleInningsReducer = (state) =>{

    if(state.hostteam.toss=='batting'){
        var team = state.hostteam
      }
      else {
         team = state.localteam
      }
    if(team.totalballs=== team.totalovers*6 || team.totalwickets=== team.wickets){
        
        
        if(state.hostteam.toss=='batting' || state.localteam.toss=='bowling' && state.matchStatus!== 'completed'){
            state.hostteam.toss='bowling'
            state.localteam.toss='batting'
            
            
            
        }else{
            state.hostteam.toss='batting'
            state.localteam.toss='bowling'

            
            
        }

    }
   
  }
        
      



export default handleInningsReducer