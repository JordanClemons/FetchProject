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
            sortList(JSON.parse(result), setItems)
        })
        .catch(error => {return getRequestAlt(setItems)});
}

//Only gets called if API fails because CORS is disabled
const getRequestAlt = (setItems) => {
    sortList(API, setItems)
}

// Sorts list by removing blanks, sorting by name and id
const sortList = (data, setItems) =>{
    var filtered = data.filter((item) =>{
        if(item.name !== null && item.name !== ""){return item;}
        return '';
    });
    filtered.sort((a,b) =>{
        if(a.listId === b.listId){
            if(parseInt(a.name.match(/\d+/)[0]) > parseInt(b.name.match(/\d+/)[0])){return 1;}
            else{return -1;}
        }
        else if (a.listId > b.listId){return 1;}
        else{return -1;}
    });
    setItems(filtered)
}

export {getRequest}