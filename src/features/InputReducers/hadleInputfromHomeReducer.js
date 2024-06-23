const hadleInputfromHomeReducer =(state,action) =>{

    state.hostteam.name=action.payload.hostname
    state.hostteam.toss=action.payload.hosttoss
    state.hostteam.totalovers=action.payload.totalovers
    state.localteam.name=action.payload.visitorname
    state.localteam.toss=action.payload.localtoss
    state.localteam.totalovers=action.payload.totalovers
    state.hostteam.players=action.payload.players
    state.localteam.players=action.payload.players

    
    if(action.payload.totalovers>0&&action.payload.hostname!==''&&action.payload.visitorname!==''){
    state.localteam.ishomeinput=true
    state.hostteam.ishomeinput=true
    }

}

export default hadleInputfromHomeReducer