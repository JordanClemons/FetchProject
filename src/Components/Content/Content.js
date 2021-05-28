import './Content.css'
import {useState, useEffect} from 'react'
import {getRequest} from '../../Functions/Requests'
import Item from './Item/Item'
function Content() {

    //Holds the list of items from API
    const [items, setItems] = useState([]);

    // Pulls API on render
    useEffect(() => {
        getRequest(setItems);
      },[]);

    console.log(items)
    return (
      <div className="content-container">
        <input placeholder="Search by name" className="search-input"></input>
        <input placeholder="Search by tag" className="search-input"></input>
        <div className="scrolling-container">
            {items.map((item) => (
                <Item id={item.id} name={item.name} listid={item.listId}/>
            ))}
        </div>
      </div>
    );
  }
  
  export default Content;
  