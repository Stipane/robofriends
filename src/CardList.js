// This creates a card for each item in the robots.js file

import React from "react";
import Card from './Card'; // Alows the data from Card.js to be accessed

const CardList = ({robots}) => {
   
    return (
        <div>
        {
         robots.map((user, i) => {
            return (
                // Accesses the data from Card.js and loops through the data to create a card for each id
                <Card 
                    key={i} 
                    id={robots[i].id} 
                    name={robots[i].name} 
                    email={robots[i].email}
                    />
                 );
            })
        }         
    </div>
  )
}

export default CardList;