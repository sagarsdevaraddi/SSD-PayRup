import React from 'react'
import './App.css';
import { sculptureList  } from './data';

function Button({onClick,children}) {
  return (
    <button onClick={e =>{
      e.stopPropagation();
      onClick();
    }}>
           {children}
    </button>
  )
}

function ToolBar({onPlayMovie,downloadMovie}){

  return(
    <div className='Toolbar' onClick={()=>alert("you entered div")}>
      <Button onClick={onPlayMovie}>
             Play Movie
      </Button>
      <Button onClick={downloadMovie}>
           Download Movie
      </Button>
      
  
    <form onSubmit={e => {
      e.preventDefault();
      alert('Submitting!');
    }}>
      <input />
      <button>Send</button>
    </form>
  

    </div>
  )
}



function App({title}) {
  let names = ['ssd','sagar','lol']
  return (
            <div id='root'>
           <img src={title}></img>
           
          <ToolBar onPlayMovie={()=>alert("Playing movie....☢️")} downloadMovie={()=>alert("Downloading...")}/>
          
            </div>
  )
}

export default App;
