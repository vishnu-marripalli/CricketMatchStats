const handleWinReducer = (state) => {
  const { hostteam, localteam } = state;

  // Helper function to determine if a team has won
  const determineWinner = (battingTeam, bowlingTeam) => {
    // If the team batting second exceeds the first team's score
    if (bowlingTeam.score > battingTeam.score) {
      return bowlingTeam.name;
    }
    
    // If the team batting second is all out and hasn't exceeded the first team's score
    if (bowlingTeam.wickets >= bowlingTeam.totalwickets && bowlingTeam.score <= battingTeam.score) {
      return battingTeam.name;
    }

    return null;
  };

  // Logic for checking the winner based on innings and current scores
  let winner = null;
  if (hostteam.firstinngings === "batting") {
    winner = determineWinner(hostteam, localteam);
    console.log('hs')
  } else {
    winner = determineWinner(localteam, hostteam);
    console.log('hs 2')
  }

  if (winner) {
    
            
    return {
      ...state,
      matchStatus: 'completed',
      winner,
      hostteam: {
        ...hostteam,
        isplayerinput: true,
        newbatterinput: false,
        newbowlerinput:false,

      },
      localteam: {
        ...localteam,
        isplayerinput: true,
        newbatterinput: false,
        newbowlerinput:false,
      },
    };
  }

  return state;
      


}

export default handleWinReducer