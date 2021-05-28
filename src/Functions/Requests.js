import {API} from './Strings'

// Pulls API
const getRequest = (setItems) =>{
    /* The API has Cors from anywhere disabled, so I can't call the API, however, this is how it would be done!!! */
    var requestOptions = {
        method: 'GET',
        redirect: 'follow',
      };
      
      fetch("https://fetch-hiring.s3.amazonaws.com/hiring.json", requestOptions)
        .then(response => response.text())
        .then(result => {
            setItems(JSON.parse(result))
        })
        .catch(error => {return getRequestAlt(setItems)});
}

//Only gets called if API fails because CORS is disabled
const getRequestAlt = (setItems) => {
    setItems(API)
}

export {getRequest}