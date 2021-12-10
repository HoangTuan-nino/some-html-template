import React , {Component} from 'react'

class Welcome extends Component {
    render(){
        return <h1>Wellcome, {this.props.name}, {this.props.name2}</h1>
    }
}
export default Welcome