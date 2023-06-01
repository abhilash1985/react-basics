import React from 'react'

function Person({person, index}) {
  return (
    <div>
      <h2>
        {index} - Id: {person.id}, I am {person.name}, age: {person.age}
      </h2>
    </div>
  )
}

export default Person