import React from 'react';

import ChannelList from './channel_list';

export default class Sidebar extends React.Component {
    render() {
        return (
            <div id="sidebar" className="sidebar">
                <div className="sidebar-wrapper">
                    Hello!
                
                    <ChannelList />
                </div>
            </div>
        )
    }
}
