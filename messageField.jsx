import  React, { Component } from 'react';
import io from 'socket.io-client';
import css from "./messageField.css";

var socket = io.connect('http://localhost:8000');

export default class messageField extends Component {

	constructor(props){
		super(props);
		this.state = {
			msg: ""
		}
		this.submitMessage = this.submitMessage.bind(this);
		this.sendMessage = this.sendMessage.bind(this);
		this.changeMessage = this.changeMessage.bind(this);
		// this.componentDidMount = this.componentDidMount.bind(this);
	}

	componentDidMount(){
		// socket.on('welcome',function(g){
		// 	this.setState({msg: g.d});
		// })
	}

	render(){
		return(
			<div>
				<form>
					<input 
						id="msgField" 
						className="form-control" 
						type="text" 
						size="70" 
						placeholder="Enter your message"
						value={this.state.msg} 
						onChange={this.changeMessage}/>
					<div className={css.button} onClick={this.submitMessage}>
					</div>
				</form>
			</div>
		);
	}

	submitMessage(event){
		console.log("submiting " + this.state.msg);
		socket.emit("message", this.state.msg);
	}

	changeMessage(event){
		this.setState({msg: event.target.value});
	}
}