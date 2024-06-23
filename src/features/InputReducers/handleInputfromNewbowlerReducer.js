








const handleInputfromNewbowlerReducer = (state, action) => {
  if (state.hostteam.toss == "bowling") {
    var bowlingteam = state.hostteam;
  } else {
    bowlingteam = state.localteam;
  }

  
  
  bowlingteam.Bowler.push({
    name: action.payload,
    madines: 0,
    runs: 0,
    wickets: 0,
    Economy: 0,
    overs: [[]],
    iscurrentbowler: false,
  });




  const currentbowler = bowlingteam.Bowler.find(
    (e) => e.iscurrentbowler === true
  );
  
  const nextbowler = bowlingteam.Bowler.findIndex(
    (e) =>  e.name === action.payload && e.iscurrentbowler === false
  );
  
  currentbowler.iscurrentbowler = false;

  bowlingteam.Bowler[nextbowler].iscurrentbowler=true
  
  bowlingteam.Bowler = bowlingteam.Bowler.sort((a, b) => {
    if (a.iscurrentbowler && !b.iscurrentbowler) {
      return -1; // a should come before b
    }
    if (!a.iscurrentbowler && b.iscurrentbowler) {
      return 1; // b should come before a
    }
    return 0; // a and b are equal in terms of sorting
  });

  bowlingteam.newbowlerinput = false;
};
export default handleInputfromNewbowlerReducer;
