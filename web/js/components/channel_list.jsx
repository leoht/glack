import React from 'react';

export default class ChannelList extends React.Component {
    render() {
        return (
            <div className="channel-list">
                <span className="sidebar-section-title">Channels</span>
                <ul>
                    <li>#general</li>
                    <li>#random</li>
                </ul>
            </div>
        )
    }
}
