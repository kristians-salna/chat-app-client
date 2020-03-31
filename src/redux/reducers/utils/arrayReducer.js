import { ARRAY_ACTION } from '../constants/arrayActions';

export const arrayReducer = (array, { type, value }) => {
    switch (type) {
        case ARRAY_ACTION.ADD:
            return [...array, value];
        case ARRAY_ACTION.REMOVE:
            return array.filter(item => value !== item);
        case ARRAY_ACTION.ERASE:
            return [];
        default:
            return array;
    }
};