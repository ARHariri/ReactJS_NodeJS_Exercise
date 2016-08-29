import React from 'react';
import io from 'socket.io-client';

var socket = io.connect('http://localhost:8000');

class messageField extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			msg: ""
		}

		this.sendMessage = this.sendMessage.bind(this);
		this.changeMessage = this.changeMessage.bind(this);
	}
	
	componentDidMount(){
		//socket.emit('message', data);
		socket.on('welcome',function(g){
			this.setState({msg: g.d});
		})
	}

	sendMessage(){
		socket.emit('message',data);
	}

	changeMessage(e){
		this.setState({msg: e.target.value});
	}

	render(){
		return(
			<div>
				<form>
					<div class="form-group">
						<input id="msgField" class="form-control" type="text" size="70" placeholder="Enter your message"
							value={this.state.msg} onChange={this.changeMessage}/>
						<input class="form-control" type="submit" value="send" onSubmit=""/>
					</div>
				</form>
			</div>
		);
	}
}

export default messageField;