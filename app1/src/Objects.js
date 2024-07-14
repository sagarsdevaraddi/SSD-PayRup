import { useState } from "react"
import { useImmer } from 'use-immer'


export default function Objects(){

let [person,setPerson] = useState(
    {
        firstName:"sagar",
        lastName:"Dev",
       email:"sagardev@g.com"
    }
)

const [person2, updatePerson2] = useImmer({
    name: 'Niki de Saint Phalle',
    artwork: {
      title: 'Blue Nana',
      city: 'Hamburg',
      image: 'https://i.imgur.com/Sd1AgUOm.jpg',
    }
  });


function handleChange(e){
     setPerson({
        ...person,
        [e.target.name]:e.target.value
     }
        );

}

function handleChangePerson2name(e){
  updatePerson2( d =>{
    
   d.name = e.target.value;
  })
}

function handleChangePerson2city(e){
  updatePerson2( d =>{
    
   d.artwork.city = e.target.value;
  })
}



        


    return(
            <div>
                <label>
                FirstName:
                    <input name="firstName" value={person.firstName} onChange={handleChange}></input>
                </label>
                <label>
                        LastName:
                        <input name="lastName" value={person.lastName} onChange={handleChange}></input>
                </label>
                <label>
                      Email:
                        <input name="email" value={person.email} onChange={handleChange}></input>
                </label>
                <p>
        {person.firstName}{' '}
        {person.lastName}{' '}
        ({person.email})
      </p>
                    

      <div>
      <label>
        Name:
      </label>
        <input name="name" onChange={handleChangePerson2name}></input>
        <label>
       City:
      </label>
        <input name="city" onChange={handleChangePerson2city}></input>
        <p>{person2.name} {person2.artwork.city}</p>
      </div>
            </div> 
    )
    }