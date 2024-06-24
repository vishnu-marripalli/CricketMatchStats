const handleWickectReducer = (state) =>{
      
    if(state.hostteam.toss=='batting'){
        var team = state.hostteam
      }
      else{
         team = state.localteam
      }


      team.wickets +=1
      const hasnone = team.Batsman.find(e => e.type === 'none');
      if(!hasnone){
        team.newbatterinput=true
      }
      else{
         console.log('last wicket')
      }

   }

export default handleWickectReducer