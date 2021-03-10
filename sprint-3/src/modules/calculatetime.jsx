 /***************************GET TIME***********************************/
let calculateTime = timestamp => {
      let utcStart = new Date(timestamp).getTime();
      let today = new Date().getTime();
      let unit = today - utcStart;
      //Mil to Sec
      unit = unit / 1000;
      //Sec to Min
      let seconds = Math.floor(unit % 60);
      unit = unit / 60;
      //Min to Hours
      let min = Math.floor(unit % 60);
      unit = unit / 60;
      //Hours to Days
      let hours = Math.floor(unit % 24);
      let days = Math.floor(unit / 24);
    
      //let timeSinceUtcStart;
      if (days > 0) {
          timestamp = `${days} days ago`;
      } else if (days === 0 & hours === 1) {
        timestamp = `${hours} hour ago`;
      } else if (days === 0 & hours > 0) {
        timestamp = `${hours} hours ago`;
      } else if (hours === 0 & min === 1) {
        timestamp = `${min} minute ago`;
      } else if (hours === 0 & min > 0) {
        timestamp = `${min} minutes ago`;
      } else {
        timestamp = `${seconds} seconds ago`;
      };
      return timestamp;
    }

export default calculateTime;





