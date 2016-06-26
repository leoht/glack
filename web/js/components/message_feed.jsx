import React from 'react'

export default class MessageFeed extends React.Component {
    
    constructor(props, ctx) {
        super(props, ctx)
        
        this.state = {
            messages: []
        };
    }
    
    componentDidMount() {
        this.setState({
            messages: [
                { id: 1, from: 'Léo', body: 'Hello world' },
                { id: 2, from: 'Léo', body: 'Goodbye world' },
            ]
        });
        
        this.props.socket.onmessage = (message) => {
            var msg = JSON.parse(message.data)
            var messages = this.state.messages;
            messages.push(msg);
            
            this.setState({ messages: messages })
        };
    }
    
    render() {
        var messageNodes = this.state.messages.map((message) => {
            return (
                <div key={message.id} className="message">
                    <span className="author">{message.from}</span>
                    <div className="body">
                        {message.body}
                    </div>
                </div>
            );
        });
        
        return (
            <div className="message-feed">
                {messageNodes}
            </div>
        )
    }
}
