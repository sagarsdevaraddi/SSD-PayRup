import React from 'react';
export function ListItem(props){


    
    return (
    <div className="listItems flex">
    
    <ul className="list-style flex">
    <li>{props.item}</li>
    <i className="fa fa-times" area-hidden="true" onClick={()=>{
        props.onSelect(props.id)
    }}></i>
    <i className='fa fa-pen-to-square' onClick={()=>{
       
        props.forUpdate(props.id) 
    }}/>
    </ul>

    
    </div>
    )
    
}

