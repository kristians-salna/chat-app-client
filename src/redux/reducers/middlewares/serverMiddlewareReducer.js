import io from 'socket.io-client';

import { SERVER_URL } from '../../../config/config';
import {
    ESTABLISH_CONNECTION,
    SEND_NEW_USER_CONNECTION,
    SEND_NEW_USER_DISCONNECTION,
    SEND_NEW_USER_MESSAGE,
    receiveNewUserConnectionAction,
    receiveNewUserConnectionSuccessAction,
    receiveNewUserDisconnectionSuccessAction,
    receiveNewUserDisconnectionIdleAction,
    receiveNewUserConnectionErrorAction,
    receiveNewUserConnectionListAction,
    receiveNewUserDisconnectionAction,
    receiveNewUserMessageAction,
    receiveConnectTimeoutAction,
    receiveConnectErrorAction,
    receiveValidationErrorAction
} from '../../actions/serverActions';
import * as ExportEvents from '../../../constants/exportEvents';
import {
    RECEIVE_NEW_USER_MESSAGE,
    RECEIVE_NEW_USER_DISCONNECTION,
    RECEIVE_NEW_USER_DISCONNECTION_IDLE,
    RECEIVE_NEW_USER_DISCONNECTION_SUCCESS,
    RECEIVE_NEW_USER_CONNECTION,
    RECEIVE_NEW_USER_CONNECTION_SUCCESS,
    RECEIVE_NEW_USER_CONNECTION_LIST,
    RECEIVE_NEW_USER_CONNECTION_ERROR
} from '../../../constants/importEvents';

const {
    ERROR,
    CONNECT,
    CONNECT_ERROR,
    CONNECT_TIMEOUT,
} = ExportEvents;

export default function() {
    let socket;
    return store => next => action => {
        switch(action.type) {
            /** Client actions. */
            case ESTABLISH_CONNECTION:
                /**
                 * Initiate the connection to the server.
                 */
                socket = io.connect(SERVER_URL);
                /**
                 * On refresh / close tab we disconnect user without reconnection.
                 */
                window.onbeforeunload = () => {
                    socket.emit(ExportEvents.SEND_NEW_USER_DISCONNECTION);
                };
                /**
                 * Connection timeout.
                 */
                socket.on(CONNECT_TIMEOUT, () => {
                    store.dispatch(
                        receiveConnectTimeoutAction()
                    )
                });
                /**
                 * Server unavailable.
                 */
                socket.on(CONNECT_ERROR, () => {
                    store.dispatch(
                        receiveConnectErrorAction()
                    )
                });
                /**
                 * Validation Error. We disconnect user if this occurs.
                 */
                socket.on(ERROR, () => {
                    store.dispatch(
                        receiveValidationErrorAction()
                    );
                    socket.emit(ExportEvents.SEND_NEW_USER_DISCONNECTION)
                });
                /**
                 * Initiate the successful connection to the server.
                 */
                socket.on(CONNECT, () => {
                    /**
                     * Create listener for successful connection to the chat room.
                     */
                    socket.on(RECEIVE_NEW_USER_CONNECTION_SUCCESS, user => {
                        /**
                         * Create listener for new received user connections.
                         */
                        socket.on(RECEIVE_NEW_USER_CONNECTION, user => {
                            store.dispatch(
                                receiveNewUserConnectionAction(user)
                            );
                        });
                        /**
                         * Create listener for total user list updates.
                         */
                        socket.on(RECEIVE_NEW_USER_CONNECTION_LIST, userList => {
                            store.dispatch(
                                receiveNewUserConnectionListAction(userList)
                            );
                        });
                        /**
                         * Create listener for a new incoming messages.
                         */
                        socket.on(RECEIVE_NEW_USER_MESSAGE, payload => {
                            store.dispatch(
                                receiveNewUserMessageAction(payload)
                            );
                        });
                        /**
                         * Create listener for when someone disconnects.
                         */
                        socket.on(RECEIVE_NEW_USER_DISCONNECTION, user => {
                            store.dispatch(
                                receiveNewUserDisconnectionAction(user)
                            );
                        });
                        /**
                         * Create listener to notify disconnecting client about successful disconnection.
                         */
                        socket.on(RECEIVE_NEW_USER_DISCONNECTION_SUCCESS, () => {
                            store.dispatch(
                                receiveNewUserDisconnectionSuccessAction()
                            )
                        });
                        /**
                         * Create listener to notify user being idle.
                         */
                        socket.on(RECEIVE_NEW_USER_DISCONNECTION_IDLE, reason => {
                            store.dispatch(
                                receiveNewUserDisconnectionIdleAction(reason)
                            );
                        });
                        /**
                         * Store user information after successful connection to the chat.
                         */
                        store.dispatch(
                            receiveNewUserConnectionSuccessAction(user)
                        );
                    });
                    /**
                     * Create listener for any connection errors. (Username taken, e.t.c.).
                     */
                    socket.on(RECEIVE_NEW_USER_CONNECTION_ERROR, error => {
                        store.dispatch(
                            receiveNewUserConnectionErrorAction(error)
                        )
                    });
                });
                break;
            case SEND_NEW_USER_CONNECTION:
                /**
                 * Emit new user connection to the chat room.
                 */
                socket.emit(ExportEvents.SEND_NEW_USER_CONNECTION, {
                    name: action.payload
                });
                break;
            case SEND_NEW_USER_MESSAGE:
                /**
                 * Emit new user message.
                 */
                socket.emit(ExportEvents.SEND_NEW_USER_MESSAGE, action.payload);
                break;
            case SEND_NEW_USER_DISCONNECTION:
                /**
                 * Emit new user disconnection.
                 */
                socket.emit(ExportEvents.SEND_NEW_USER_DISCONNECTION);
                break;
            default: break;
        }
        return next(action);
    }
}