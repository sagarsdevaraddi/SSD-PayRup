import { useState } from 'react';
import { sculptureList  } from './data.js';


export default function SculptureList(){

   
    const [index,setIndex] = useState(0);
    const [showMore,setShowMore] =useState(false);
   

    
    function handleNextClick(){
        (index<sculptureList.length-1)?setIndex(index+1):setIndex(0);
    }
    function handlePrevClick(){
        index>0?setIndex(index-1):setIndex(0);
      }
    function handleMoreClick(){
        setShowMore(!showMore)
    }
    let sculpture = sculptureList[index]
    return(
        
        <div>
            <button onClick={handleNextClick}>Next</button>
            <button onClick={handlePrevClick}>Previous</button>
            <h2> {sculpture.name} by {sculpture.artist} </h2>
          <h3>({index+1} of {sculptureList.length})</h3>

          <img src={sculpture.url} alt={sculpture.alt}></img>
          <button onClick={handleMoreClick}>
            {showMore ?'Hide':'show'} details
          </button>
         { showMore && <p>{sculpture.description}</p>} 
        </div>
    )





}