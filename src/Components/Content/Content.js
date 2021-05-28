import './Content.css'
import {useState, useEffect} from 'react'
import {getRequest} from '../../Functions/Requests'
import {handleNameSearch, handleIdSearch} from '../../Functions/HandleSearch'
import Item from './Item/Item'
function Content() {

    //Holds the list of items from API
    const [items, setItems] = useState([]);
    // State for current name search
    const [nameSearch, setNameSearch] = useState('');
    // State for current id search
    const [idSearch, setIdSearch] = useState('');

    // Pulls API on render
    useEffect(() => {
        getRequest(setItems);
      },[]);

    return (
      <div className="content-container">
        <input placeholder="Search by name" className="search-input" 
          value={nameSearch} onChange={(e) => setNameSearch(e.target.value)}>
        </input>
        <input placeholder="Search by list #" className="search-input"
          value={idSearch} onChange={(e) => setIdSearch(e.target.value)}>
        </input>
        <div className="scrolling-container">
            {items.length > 0 ? items.filter((item) => {
              // If nothing is searched
              if(nameSearch === '' && idSearch === ''){return item;}
              // If just a name is searched
              else if(idSearch === ''){
                if(handleNameSearch(item, nameSearch)){return item;}
              }
              // If just id is searched
              else if(nameSearch === ''){
                if(handleIdSearch(item, idSearch)){return item;}
              }
              //Both entered
              else if(nameSearch !== '' && idSearch !==''){
                if(handleNameSearch(item, nameSearch) && handleIdSearch(item, idSearch)){return item;}
              }
              return '';
            }).map((item) => (
                <Item id={item.id} name={item.name} listid={item.listId}/>
            )):
            <div>Loading</div>
            }
        </div>
      </div>
    );
  }
  
  export default Content;
  