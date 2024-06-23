const handleWinReducer = (state) =>{


    const { hostteam, localteam } = state;
    const batteam = hostteam.firstinnings === 'batting' ? hostteam : localteam;
      const ballteam = hostteam.firstinnings === 'batting' ? localteam : hostteam;
      if (batteam.firstinnings === 'batting') {
        if (ballteam.score > batteam.score && batteam.score > 1) {
          ballteam.iswon = true;
          batteam.iswon = false;
        } else if (batteam.score >= ballteam.score) {
          batteam.iswon = true;
          ballteam.iswon = false;
        }
      } else {
        if (ballteam.score > batteam.score) {
          ballteam.iswon = true;
          batteam.iswon = false;
        } else if (batteam.score >= ballteam.score && ballteam.score > 1) {
          batteam.iswon = true;
          ballteam.iswon = false;
        }
      }

      


}

export default handleWinReducer