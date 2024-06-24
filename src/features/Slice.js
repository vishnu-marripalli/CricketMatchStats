import { createSlice } from "@reduxjs/toolkit";
 import handleBatsmanScoreReducer from './handleBatsmanScoreReducer'
 import  handleEachBallReducer  from './handleEachBallReducer'
import handleOversReducer from "./handleOversReducer";
import switchBatsmanReducer from "./switchBatsmanReducer";
import handleInningsReducer from "./handleInningsReducer";
import handleWickectReducer from "./handleWicketReducer";
import intiallizingInningsReducer from "./initiallizingInningsReducer";
import handleBowlerReducer from "./handleBowlerReduer";
import switchBowlerReducer from "./switchBowlerReducer";
import hadleInputfromHomeReducer from "./InputReducers/hadleInputfromHomeReducer";
import handleInputfromPlayerReducer from "./InputReducers/handleInputfromPlayerReducer";
import handleInputfromNewbatterReducer from "./InputReducers/handleInputfromNewbatterReducer";
import handleInputfromNewbowlerReducer from "./InputReducers/handleInputfromNewbowlerReducer";
import handleWinReducer from "./InputReducers/handleWinReducer";

const initialState = {
  hostteam: {
    name: '',
    toss:'',
    firstinngings:'',
    score: 0,
    players:0,
    totalballs : 0,
    totalovers: 0,
    Overs: '0.0',
    wickets: 0,
    totalwickets : 0,
    CRR: 0.0,
    ishomeinput:false,
    isplayerinput:false,
    newbatterinput:false,
    newbowlerinput:false,
    
    Batsman: [],
    Bowler: [
    
    ],
  },
  localteam: {
    name: '',
    toss:'',
    firstinngings:'',
    score: 0,
    players:0,
    totalballs : 0,
    totalovers: 0,
    Overs: '0',
    wickets: 0,
    totalwickets : 0,
    CRR: 0.0,
    ishomeinput:false,
    isplayerinput:false,
    newbatterinput:false,
    newbowlerinput:false,
    
    Batsman: [
     
    ],
    Bowler: [
      // {
      //   name: 'b',
      //   madines: 0,
      //   runs: 0,
      //   wickets: 0,
      //   Economy: 0,
      //   overs: [[]],
      //   iscurrentbowler: false,
      // },
      // {
      //   name: 'c',
      //   madines: 0,
      //   runs: 0,
      //   wickets: 0,
      //   Economy: 0,
      //   overs: [[]],
      //   iscurrentbowler: false,
      // }
      
    ],
  },
  matchStatus: 'ongoing', // Possible values: 'ongoing', 'completed'
  winner: null,
};

export const Scoreslice = createSlice({
  name: "Score",
  initialState,
  reducers: {
    handleeachball: handleEachBallReducer,
    handlebatsmanscore: handleBatsmanScoreReducer,
    handleover:handleOversReducer,
    switchbatsman:switchBatsmanReducer,
    handleinnings:handleInningsReducer,
    handlewicket:handleWickectReducer,
    initiallizinginngs:intiallizingInningsReducer,
    handlebowler:handleBowlerReducer,
    switchbowler:switchBowlerReducer,
    handleinputfromhome:hadleInputfromHomeReducer,
    handleinputfromplayer:handleInputfromPlayerReducer,
    handleinputfromnewbatter:handleInputfromNewbatterReducer,
    handleinputfromnewbowler:handleInputfromNewbowlerReducer,
    handlewin:handleWinReducer
   
  }
});

export const { handleeachball,handlebatsmanscore,handleover,switchbatsman,handleinnings,handlewicket,
                initiallizinginngs,handlebowler,handleinputfromhome,switchbowler,handleinputfromplayer,
                handleinputfromnewbatter,handleinputfromnewbowler,handlewin
               } = Scoreslice.actions;
               
export default Scoreslice.reducer;
