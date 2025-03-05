import React from 'react'

const Fruitscard = ({fruit}) => {
  return (
    <div>
        <img src={require(`../assets/${fruit.image}.jpeg`)} alt="" />
        <div>
            <span>{fruit.name}</span>
            <span>{fruit.price}</span>
        </div>
    </div>
  )
}

export default Fruitscard