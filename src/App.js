import { useState } from "react";
import AddListItem from "./components/AddListItem.component";
import ListItem from "./components/listItem.component";

function App() {
  const [listItems, setListItems] = useState([]);

  const addList = (item)=>{
    if(!item) return;
    const list = [...listItems];
    list.push(item);
    setListItems(list);
  }

  return (
    <div>
      <AddListItem
        addList={addList}
      />
      <ul>
        {listItems.map((item,index)=>(
          <ListItem itemName={item} index={index}/>
        ))}
      </ul>
    </div>
  );
}

export default App;
