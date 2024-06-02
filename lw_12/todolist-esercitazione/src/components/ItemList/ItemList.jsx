import Item from "../Item/Item"
import './ItemList.css'

const ItemList = ({items = [], addItems=()=>{}}) => {

    const handleCancelation = (id) => {
      addItems(items.filter((item) => item.id !== id));
    };

    return (
      <ul className="itemslist">
        {items.map((item, index) => (
          <Item
            key={index}
            text={item.text}
            handleClick={() => handleCancelation(item.id)}
          />
        ))}
      </ul>
    );

}

export default ItemList