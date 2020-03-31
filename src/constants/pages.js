import Lobby from '../components/Lobby/Lobby';
import ChatRoom from '../components/ChatRoom/ChatRoom';
import { LOBBY_PATH, CHAT_ROOM_PATH } from './paths';

export const LOBBY = {
    path: LOBBY_PATH,
    component: Lobby
};
export const CHAT_ROOM = {
    path: CHAT_ROOM_PATH,
    component: ChatRoom
};

export const ALL_PAGES = [
    LOBBY, CHAT_ROOM
];
