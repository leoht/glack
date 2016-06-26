import React from 'react';
import Sidebar from './sidebar'
import MessageBox from './message_box'
import MessageFeed from './message_feed'

export default class Chat extends React.Component {
    constructor(props) {
        super(props);
        
        let socket = new WebSocket('ws://localhost:8080/ws');
        
        socket.onmessage = (msg) => {
            console.log(msg);
        };
        socket.onopen = () => {
            socket.send('{"id": 3,"from":"Léo","type": "message","body":"Hello world","channel": "general"}');
        };
        
        this.socket = socket;
    }
    
    render() {
        return (
            <div className="chat main">
                <Sidebar />
                <MessageFeed socket={this.socket} />
                <MessageBox socket={this.socket} />
            </div>
        );
    }
}
