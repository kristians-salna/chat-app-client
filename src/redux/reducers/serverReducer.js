import {
    RECEIVE_NEW_USER_CONNECTION,
    RECEIVE_NEW_USER_CONNECTION_SUCCESS,
    RECEIVE_NEW_USER_CONNECTION_ERROR,
    RECEIVE_NEW_USER_CONNECTION_LIST,
    RECEIVE_NEW_USER_DISCONNECTION,
    RECEIVE_NEW_USER_MESSAGE,
    RECEIVE_NEW_USER_DISCONNECTION_SUCCESS,
    RECEIVE_NEW_USER_DISCONNECTION_IDLE,
    RECEIVE_CONNECT_TIMEOUT,
    RECEIVE_CONNECT_ERROR,
    RECEIVE_VALIDATION_ERROR,
    SET_ERROR
} from '../actions/serverActions';
import defaultState, {
    CONNECTED,
    MESSAGES,
    USER,
    USER_LIST,
    NAME,
    INFO,
    AVATAR,
    ERROR,
    MESSAGE,
    DATE
} from '../states/serverState';
import {
    CONNECTION_TIMED_OUT, SERVER_UNAVAILABLE, ERROR_OCCURRED
} from '../../constants/messages'
import { arrayReducer } from './utils/arrayReducer';
import { ARRAY_ACTION } from './constants/arrayActions';

export default (state = defaultState, action) => {
    switch (action.type) {
        case RECEIVE_NEW_USER_CONNECTION:
            return {
                ...state,
                [MESSAGES]: arrayReducer(state[MESSAGES], {
                    type: ARRAY_ACTION.ADD,
                    value: {
                        [MESSAGE]: action.payload[MESSAGE],
                        [INFO]: true
                    }
                })
            };
        case RECEIVE_NEW_USER_CONNECTION_SUCCESS:
            return {
                ...state,
                [CONNECTED]: true,
                [ERROR]: null,
                [USER]: {
                    [NAME]: action.payload[NAME],
                    [AVATAR]: action.payload[AVATAR]
                }
            };
        case RECEIVE_NEW_USER_CONNECTION_ERROR:
            return {
                ...state,
                [ERROR]: action.payload
            };
        case RECEIVE_NEW_USER_CONNECTION_LIST:
            return {
                ...state,
                [USER_LIST]: action.payload[USER_LIST]
            };
        case RECEIVE_NEW_USER_DISCONNECTION:
            return {
                ...state,
                [MESSAGES]: arrayReducer(state[MESSAGES], {
                    type: ARRAY_ACTION.ADD,
                    value: {
                        [NAME]: action.payload[NAME],
                        [MESSAGE]: action.payload[MESSAGE],
                        [INFO]: true
                    }
                })
            };
        case RECEIVE_NEW_USER_MESSAGE:
            return {
                ...state,
                [MESSAGES]: arrayReducer(state[MESSAGES], {
                    type: ARRAY_ACTION.ADD,
                    value: {
                        [NAME]: action.payload[NAME],
                        [MESSAGE]: action.payload[MESSAGE],
                        [AVATAR]: action.payload[AVATAR],
                        [DATE]: action.payload[DATE]
                    }
                })
            };
        case RECEIVE_NEW_USER_DISCONNECTION_SUCCESS:
            return {
                ...state,
                [CONNECTED]: false,
                [MESSAGES]: arrayReducer(state[MESSAGES], {
                    type: ARRAY_ACTION.ERASE
                })
            };
        case RECEIVE_NEW_USER_DISCONNECTION_IDLE:
            return {
                ...state,
                [CONNECTED]: false,
                [ERROR]: action.payload,
                [MESSAGES]: arrayReducer(state[MESSAGES], {
                    type: ARRAY_ACTION.ERASE
                })
            };
        case RECEIVE_CONNECT_TIMEOUT:
            return {
                ...state,
                [CONNECTED]: false,
                [ERROR]: CONNECTION_TIMED_OUT,
                [MESSAGES]: arrayReducer(state[MESSAGES], {
                    type: ARRAY_ACTION.ERASE
                })
            };
        case RECEIVE_CONNECT_ERROR:
            return {
                ...state,
                [CONNECTED]: false,
                [ERROR]: SERVER_UNAVAILABLE,
                [MESSAGES]: arrayReducer(state[MESSAGES], {
                    type: ARRAY_ACTION.ERASE
                })
            };
        case RECEIVE_VALIDATION_ERROR:
            return {
                ...state,
                [ERROR]: ERROR_OCCURRED,
                [MESSAGES]: arrayReducer(state[MESSAGES], {
                    type: ARRAY_ACTION.ERASE
                })
            };
        case SET_ERROR:
            return {
                ...state,
                [ERROR]: action.payload
            };
        default:
            return state;
    }
};
