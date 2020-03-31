import React from 'react';
import Avatar from '../Avatar/Avatar';
import { formatDate } from '../../utils/utils';
import './_Message.scss';

export default ({ isSelf, message: { message, avatar, date } }) => (
    <div className={`message-container${isSelf ? ' self' : ''}`}>
        <span className="message-container__message">{message}
            <span className="message-container__message__date">{formatDate(date)}</span>
        </span>
        <Avatar src={avatar} />
    </div>
);