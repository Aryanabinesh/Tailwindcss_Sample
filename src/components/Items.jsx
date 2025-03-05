import React from 'react'
import { useState } from 'react';
import Fruitscard from './Fruitscard';

const Items = () => {

    const [fruits,setfruits] = useState([
        
        {
            id: 1,
            image: '1',
            name: 'Green Grapes',
            price: 100
          },
          {
            id: 2,
            image: '2',
            name: 'Pomegranate',
            price: 200
          },
          {
            id: 3,
            image: '3',
            name: 'Black Grapes',
            price: 250
          },
          {
            id: 4,
            image: '4',
            name: 'Grape Fruit',
            price: 300
          },
          {
            id: 5,
            image: '5',
            name: 'Berry',
            price: 250
          },
          {
            id: 6,
            image: '6',
            name: 'lemon',
            price: 150
          }
        ]);

  return (
    <section>     
            {
                fruits.map((fruit) => {
                    return (
                        <Fruitscard key={fruit.id} fruit={fruit} />
                        ) 
                        })
            }        
    </section>
  )
}

export default Items