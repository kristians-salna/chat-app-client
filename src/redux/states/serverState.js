export const CONNECTED = 'connected';
export const MESSAGES = 'messages';
export const MESSAGE = 'message';
export const USER = 'user';
export const INFO = 'info';
export const NAME = 'name';
export const AVATAR = 'avatar';
export const USER_LIST = 'userList';
export const ERROR = 'error';
export const DATE = 'date';
export default {
    [CONNECTED]: false,
    [MESSAGES]: [],
    [USER]: {
        [NAME]: null,
        [AVATAR]: null,
    },
    [USER_LIST]: [],
    [ERROR]: null
};