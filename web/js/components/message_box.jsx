import React from 'react';

export default class MessageBox extends React.Component {
    messageDidChange(event) {
        var socket = this.props.socket;
        // socket.send('{"from": "Léo", "channel": "general", "type": "typing", "body": ""}');
    }
    
    send(event) {
        var socket = this.props.socket;
        var msg = this.input.value;
        this.input.innerHTML = '';
        
        if (msg.trim() == '') return;
        
        socket.send(JSON.stringify({
            id: Math.random() * 1000,
            from: 'Léo',
            channel: 'general',
            type: 'message',
            body: msg
        }));
    }
    
    handleKeyPress(event) {
        if (event.which == 13) {
            this.send(event);
        }
    }
    
    render() {
        return (
            <div id="message_box">
                <textarea
                    ref={(t) => this.input = t} 
                    onChange={this.messageDidChange.bind(this)}
                    onKeyPress={this.handleKeyPress.bind(this)}
                    ></textarea>
                <div className="send-btn" onClick={this.send.bind(this)}><span>Send</span></div>
            </div>
        );
    }
}
