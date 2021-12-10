import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username: '',
             comment: '',
             topic: 'React'
        }
    }
    handleUsernameChange = (event) => {
        this.setState({
            username : event.target.value
        })
    }
    handleCommentChanges = event => {
        this.setState ({
            comment : event.target.value
        })
    }
    handleTopicChanges = event => {
        this.setState ({
            topic : event.target.value
        })
    }
    handleSubmit = event => {
        alert(`${this.state.username} ${this.state.comment} ${this.state.topic}`)
        event.preventDefault() 
    }
    render() {
        const {username, comment, topic} = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>UserName</label>
                    <input type='text' 
                    // value={this.state.username}
                    value = {username}
                    onChange={this.handleUsernameChange} />
                </div>
                <div>
                    <label>Comment</label>
                    <textarea type='text' 
                    // value = {this.state.comment} 
                    value = {comment}
                    onChange={this.handleCommentChanges}></textarea>
                </div>
                <div>
                    <label>Topic</label>
                    <select 
                    // value={this.state.topic} 
                    value = {topic}
                    onChange={this.handleTopicChanges}>
                        <option value='react'>React</option>
                        <option value='angular'>Angular</option>
                        <option value='vue'>Vue</option>
                    </select>
                </div>
                <button type='submit'>Submit</button>
            </form>
        )
    }
}

export default Form
