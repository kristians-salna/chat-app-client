import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import MessagePanel from '../MessagePanel/MessagePanel';
import MessageInput from '../MessageInput/MessageInput';
import UserPanel from '../UserPanel/UserPanel';
import { navigateTo } from '../../utils/utils';
import { LOBBY_PATH } from '../../constants/paths';
import './_ChatRoom.scss';

const ChatRoom = ({ history, messages, user, userList, connected }) => {
    useEffect(() => {
        if (!connected) navigateTo(LOBBY_PATH, history)
    }, [connected, history]);
    return (
        <div className="chat-room">
            <div className="chat-room__left">
                <UserPanel user={user} userList={userList} />
            </div>
            <div className="chat-room__right">
                <MessagePanel user={user} messages={messages} />
                <MessageInput />
            </div>
        </div>
    )
};

const mapStateToProps = ({
    serverReducer: { messages, user, userList, connected }
}) => ({
    messages, user, userList, connected
});

export default connect(mapStateToProps, null)(ChatRoom);
