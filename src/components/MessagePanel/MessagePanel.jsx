import React, { useEffect, useRef } from 'react';
import Message from '../Message/Message';
import Info from '../Info/Info';
import { isSelf } from '../../utils/utils';
import './_MessagePanel.scss';

export default ({ messages, user }) => {
    const scroll = useRef(null);
    useEffect(() => {
        scroll.current.scrollIntoView();
    });
    return (
        <div className="message-panel">
            {messages.map((message, index) => {
                return message.info ? <Info key={index} message={message} /> : (
                    <Message
                        key={index}
                        isSelf={isSelf(user, message)}
                        message={message}
                    />
                );
            })}
            <div ref={scroll} />
        </div>
    )
};
