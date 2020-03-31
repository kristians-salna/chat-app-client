import React from 'react';
import User from '../User/User';
import { isSelf } from '../../utils/utils';
import './_UserPanel.scss';

export default ({ user, userList }) => (
    <div className="user-panel">
        {
            userList.map((_user, index) => (
                <User key={index} user={_user} isSelf={isSelf(user, _user)} />
            ))
        }
    </div>
);
