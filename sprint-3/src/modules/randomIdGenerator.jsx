  /******GET RANDOM ID*****/ 
  let getRandomId = () => {
    let result = '';
    let characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for ( let i = 0; i < 12; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
   
  }

  export default getRandomId;