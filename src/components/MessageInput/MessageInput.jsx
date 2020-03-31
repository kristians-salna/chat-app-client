import React, { useState } from 'react';
import { connect } from 'react-redux';
import { MDBInput } from 'mdbreact';
import { ENTER } from '../../constants/keyCodes';
import { sendNewUserMessageAction } from '../../redux/actions/serverActions'
import { EMPTY } from '../../constants/messages';
import './_MessageInput.scss';

const MessageInput = ({ user: { name }, sendNewUserMessage }) => {
    const [message, setMessage] = useState(EMPTY);
    const onGetValue = (value) => {
        setMessage(value);
    };
    const onKeyUpHandler = (event) => {
        if (event.keyCode === ENTER && message.length) {
            /** Send new message. */
            sendNewUserMessage({ name, message });
            /** Reset input field. */
            setMessage(EMPTY);
        }
    };
    return (
        <div className="message-input">
            <MDBInput
                label="Write your message..."
                icon="paper-plane"
                type="text"
                value={message}
                getValue={onGetValue}
                onKeyUp={onKeyUpHandler}
            />
        </div>
    );
};

const mapStateToProps = ({
     serverReducer: { user }
 }) => ({
    user
});

const mapDispatchToProps = {
    sendNewUserMessage: sendNewUserMessageAction
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageInput);