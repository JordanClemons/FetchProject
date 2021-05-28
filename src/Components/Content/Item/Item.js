import './Item.css'
function Item({id, name, listid}) {
  return (
    <div className="item-container">
      <div className="name-container">{name}</div>
      <div className={`id-container color-${listid}`}>{listid}</div>
    </div>
  );
}

export default Item;
