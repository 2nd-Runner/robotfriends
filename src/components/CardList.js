import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    return (
        <div>
            {
              robots.map((user, i) => {
        // Have to give a KEY in react!! Should be something that DOESN'T change (like id)
                return (
                    <Card 
                        key={i}
                        id={robots[i].id} 
                        name={robots[i].name} 
                        email={robots[i].email}/>
                    );
                })  
            }
        </div>
    );
}

export default CardList;