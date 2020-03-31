import React from 'react';
import { connect } from 'react-redux';
import { MDBIcon } from 'mdbreact';

import { sendNewUserDisconnectionAction } from '../../redux/actions/serverActions';
import Avatar from '../Avatar/Avatar'
import './_User.scss';

const User = ({ user: { name, avatar }, isSelf, sendNewUserDisconnection }) => (
    <div className="user">
        <Avatar src={avatar}/>
        <strong>{name}</strong>
        { isSelf && <MDBIcon
            onClick={sendNewUserDisconnection}
            icon="sign-out-alt"
            size="1x"
        />}
    </div>
);

const mapDispatchToProps = {
    sendNewUserDisconnection: sendNewUserDisconnectionAction
};


export default connect(null, mapDispatchToProps)(User);
