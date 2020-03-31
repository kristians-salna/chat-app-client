/** Connection */
export const ESTABLISH_CONNECTION = 'ESTABLISH_CONNECTION';
/** Export */
export const SEND_NEW_USER_CONNECTION = 'SEND_NEW_USER_CONNECTION';
export const SEND_NEW_USER_DISCONNECTION = 'SEND_NEW_USER_DISCONNECTION';
export const SEND_NEW_USER_MESSAGE = 'SEND_NEW_USER_MESSAGE';
/** Import */
export const RECEIVE_NEW_USER_CONNECTION = 'RECEIVE_NEW_USER_CONNECTION';
export const RECEIVE_NEW_USER_CONNECTION_SUCCESS = 'RECEIVE_NEW_USER_CONNECTION_SUCCESS';
export const RECEIVE_NEW_USER_DISCONNECTION_SUCCESS = 'RECEIVE_NEW_USER_DISCONNECTION_SUCCESS';
export const RECEIVE_NEW_USER_DISCONNECTION_IDLE = 'RECEIVE_NEW_USER_DISCONNECTION_IDLE';
export const RECEIVE_NEW_USER_CONNECTION_ERROR = 'RECEIVE_NEW_USER_CONNECTION_ERROR';
export const RECEIVE_NEW_USER_CONNECTION_LIST = 'RECEIVE_NEW_USER_CONNECTION_LIST';
export const RECEIVE_NEW_USER_DISCONNECTION = 'RECEIVE_NEW_USER_DISCONNECTION';
export const RECEIVE_NEW_USER_MESSAGE = 'RECEIVE_NEW_USER_MESSAGE';
export const RECEIVE_CONNECT_TIMEOUT = 'RECEIVE_CONNECT_TIMEOUT';
export const RECEIVE_CONNECT_ERROR = 'RECEIVE_CONNECT_ERROR';
export const RECEIVE_VALIDATION_ERROR = 'RECEIVE_VALIDATION_ERROR';
/** Internal */
export const SET_ERROR = 'SET_ERROR';

export const establishConnectionAction = () => dispatch => {
    dispatch({
        type: ESTABLISH_CONNECTION
    })
};

export const sendNewUserConnectionAction = user => dispatch => {
    dispatch({
        type: SEND_NEW_USER_CONNECTION,
        payload: user
    })
};

export const sendNewUserDisconnectionAction = () => dispatch => {
    dispatch({
        type: SEND_NEW_USER_DISCONNECTION
    });
};

export const receiveNewUserConnectionAction = user => ({
    type: RECEIVE_NEW_USER_CONNECTION,
    payload: user
});

export const receiveNewUserConnectionSuccessAction = user => ({
    type: RECEIVE_NEW_USER_CONNECTION_SUCCESS,
    payload: user
});

export const receiveNewUserDisconnectionSuccessAction = () => ({
    type: RECEIVE_NEW_USER_DISCONNECTION_SUCCESS
});

export const receiveNewUserDisconnectionIdleAction = reason => ({
    type: RECEIVE_NEW_USER_DISCONNECTION_IDLE,
    payload: reason
});

export const receiveNewUserConnectionErrorAction = error => ({
    type: RECEIVE_NEW_USER_CONNECTION_ERROR,
    payload: error
});

export const receiveNewUserConnectionListAction = userList => ({
    type: RECEIVE_NEW_USER_CONNECTION_LIST,
    payload: userList
});

export const receiveNewUserDisconnectionAction = user => ({
    type: RECEIVE_NEW_USER_DISCONNECTION,
    payload: user
});

export const receiveConnectTimeoutAction = () =>  ({
    type: RECEIVE_CONNECT_TIMEOUT
});

export const receiveConnectErrorAction = () =>  ({
    type: RECEIVE_CONNECT_ERROR
});

export const receiveValidationErrorAction = () => ({
    type: RECEIVE_VALIDATION_ERROR
});

export const sendNewUserMessageAction = payload => dispatch => {
    dispatch({
        type: SEND_NEW_USER_MESSAGE,
        payload
    })
};

export const receiveNewUserMessageAction = payload => dispatch => {
    dispatch({
        type: RECEIVE_NEW_USER_MESSAGE,
        payload
    })
};

export const setErrorAction = message => dispatch => {
    dispatch({
        type: SET_ERROR,
        payload: message
    })
};
