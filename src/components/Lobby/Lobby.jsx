import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { MDBInput, MDBBtn } from "mdbreact";

import { EMPTY, NAME_EMPTY, LETTERS_SPACES_ONLY } from '../../constants/messages';
import {
    sendNewUserConnectionAction, establishConnectionAction, setErrorAction
} from '../../redux/actions/serverActions';
import { navigateTo } from '../../utils/utils';
import { CHAT_ROOM_PATH } from '../../constants/paths';
import { lettersAndSpaces } from '../../constants/regex';
import './_Lobby.scss';

const Lobby = ({ history, connected, error, sendNewUserConnection, setError, establishConnection }) => {
    const [name, setName] = useState(EMPTY);
    /** Connect to the server on load. */
    useEffect(establishConnection, []);
    useEffect(() => {
        if (connected) navigateTo(CHAT_ROOM_PATH, history)
    }, [connected, history]);
    const onChangeHandler = (value) => {
        /** Reset error on typing. */
        if (error) setError(EMPTY);
        /** Store the user name. */
        setName(value)
    };
    const onClickHandler = (e) => {
        e.preventDefault();
        if (name.length === 0) {
            setError(NAME_EMPTY);
        } else if (lettersAndSpaces.test(name)) {
            /** Connect user to the chat room. */
            sendNewUserConnection(name);
        } else {
            setError(LETTERS_SPACES_ONLY);
        }
    };
    return (
        <form noValidate className="lobby" onSubmit={onClickHandler}>
            <p className="h5 text-center mb-4">Sign in</p>
            <div className="grey-text">
                <MDBInput
                    label="Enter your user name"
                    icon="user"
                    type="text"
                    getValue={onChangeHandler}
                />
                <div className="error-message">
                    {error}
                </div>
            </div>
            <div className="text-center">
                <MDBBtn onClick={onClickHandler}>Enter</MDBBtn>
            </div>
        </form>
    );
};

const mapStateToProps = ({ serverReducer: { connected, error } }) => ({ connected, error });

const mapDispatchToProps = {
    sendNewUserConnection: sendNewUserConnectionAction,
    establishConnection: establishConnectionAction,
    setError: setErrorAction
};

export default connect(mapStateToProps, mapDispatchToProps)(Lobby);
