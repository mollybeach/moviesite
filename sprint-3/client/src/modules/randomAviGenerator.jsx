
/****************************RANDOM AVI GENERATOR*********************/

 let randomAviGenerator = variant =>{
    let apiRandomImageURL = `https://randomuser.me/api/portraits/thumb/`;
    let apiRandomGenderM = `men/`;
    let apiRandomGenderF = `women/`;
    let apiRandomGender;
    if (variant % 2 === 0) {
      apiRandomGender = apiRandomGenderF;
    } else {
      apiRandomGender = apiRandomGenderM;
    }
    let apiRandomNumber = Math.floor(Math.random() * (100 - variant));
    let apiRandomImageEndOf = `.jpg`;
    let apiRandomPhoto =
      apiRandomImageURL + apiRandomGender + apiRandomNumber + apiRandomImageEndOf;
    return apiRandomPhoto;
  }
  export default randomAviGenerator;