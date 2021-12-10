import { render } from '@testing-library/react'
import React from 'react'

// function Greet() {
//     render()
//     {
//     return <h1>Hello Vishwas</h1>
// }
// }
const Greet = props => {
    console.log(props)
    return( 
    <div>
        <h1>Hello, {props.name} {props.name2}</h1>
    {props.children}
    </div>   
    )   
}

export default Greet