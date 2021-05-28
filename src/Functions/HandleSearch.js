// Handles searching of name - Returns true if name found
const handleNameSearch = (item, search) =>{
    if(item.name.toLowerCase().includes(search.toLowerCase())){
        return item;
    }
}

// Handles searching of id - Returns true if name found
const handleIdSearch = (item, search) =>{
    if(item.listId.toString().includes(parseInt(search))){
        return item;
    }
}

export{handleNameSearch, handleIdSearch}