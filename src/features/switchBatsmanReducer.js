

const switchBatsmanReducer = (state)=>{

    if(state.hostteam.toss=='batting'){
        var team = state.hostteam
      }
      else{
         team = state.localteam
      }

    const stricker = team.Batsman.find(e => e.type=='stricker')
    const nonstricker = team.Batsman.find(e => e.type=='nonstricker')
    stricker.type='nonstricker'
    nonstricker.type='stricker'

}


export default switchBatsmanReducer