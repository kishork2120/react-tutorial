import React, {useState,useRef} from 'react';

const AddListItem = ({addList})=>{
  const [text, setText] = useState('');
  const inputRef = useRef()

  const onAdd = ()=>{
    addList(text);
    setText('');
    inputRef.current.value = ''
  }  

  return(
    <div>
      <input type="text" ref={inputRef} onChange={(event)=>{ setText(event.target.value) }}/>
      <button onClick={onAdd}>Add</button>
    </div>
  )
}

export default AddListItem;
