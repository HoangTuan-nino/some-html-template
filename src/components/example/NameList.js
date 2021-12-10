import React from 'react'
import Person from './Person'

function NameList() {
    const names = ['Bruh','Bruhh','Bruhhh']
    const persons = [ 
    {
        id : 1,
        name : 'Bruh',
        age : 18,
        skill : 'React'
    },
    {
        id : 2,
        name : 'Bruhh',
        age : 18,
        skill : 'Angular'
    },
    {
        id : 3,
        name : 'Bruhhh',
        age : 18,
        skill : 'Vue'
    },
]
    //const personList = persons.map(person => <Person key = {person.name} person = {person} />)
    const nameList = names.map((name, index) => <h2 key={index}>{index} {name}</h2>)
    return <div>{nameList}</div>
}

export default NameList
