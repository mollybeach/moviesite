
import axios from 'axios';
let newArray = [];
let apiRandomNameUrl = `https://randomuser.me/api/?results=1&inc=name&noinfo`;


/******************RANDOM NAME GENERATOR*************/

let getRandomName = () => {
    axios.get(apiRandomNameUrl)
        .then(response => {
        let nameList = response.data.results[0];
        let newFirstName = nameList.name.first;
        let newLastName = nameList.name.last;
        let fullName = (`${newFirstName} ${newLastName}`);
        return(newArray.unshift(fullName));
       
        })
        .catch(error => {
            console.log('something went wrong', error);
        })
  }
  export default getRandomName;