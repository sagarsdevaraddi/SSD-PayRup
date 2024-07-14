
import { useState,useEffect} from 'react';
import './App.css';
import { ListItem } from './components/ListItem';



const getLocalData = () => {
  const lists = localStorage.getItem("mytodolist")

  if(lists){
      return JSON.parse(lists)
  }else{
      return []
  }
}



function App() {

 const [inputList,setInputList] = useState("");
  const [items,setItems] = useState(getLocalData())
  const [isEditItem,setisEditItem] = useState(-1)

  let itemEvent = (e) =>{
  setInputList(e.target.value)
  }

  let listOfItems = () =>{
        
    console.log("is"+isEditItem)
    setItems((olditems)=>{
          olditems[isEditItem] = inputList
   
         return isEditItem!==-1?[...olditems]:[...olditems,inputList]
          
     

    })
    setisEditItem(-1)
    setInputList('')
  }

  let deleteItem= (id)=>{
          setItems((olditems)=>{
            return( olditems.filter((ele,index)=>{
                    return index!==id
            }))
          })
    
  }
 
  let updateItem =(id)=>{
    console.log(items)
   
    const item_todo_edited = items.find((curEl,index) => {
      return id === index
    })
    setInputList(item_todo_edited)
    setisEditItem(id)
    console.log(id)
    console.log(item_todo_edited)

           
      
    }
    useEffect(() => {localStorage.setItem("mytodolist", JSON.stringify(items))},[items]);

   
 
  return (
    <div className="App">
        <div className="center-div">
             <h2 className='header'>Todo's</h2>
            
             <input id='input' value={inputList} type='text' placeholder='Add things' onChange={itemEvent}></input>
             <button onClick={listOfItems}  className='add-btn'>+</button>
           
             <ul className='list-style'>
             
             {
              items.map( (e,i)=>{
               return( <ListItem key={i} id={i}  item={e} forUpdate={updateItem} onSelect={deleteItem }/>)
              })
             } 
             </ul>
        </div>
    </div>
  );
            }

export default App;
