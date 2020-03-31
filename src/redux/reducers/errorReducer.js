import { SET_INTERNAL_ERROR } from '../actions/errorActions';
import defaultState, {
    INTERNAL_ERROR,
} from '../states/errorState';

export default (state = defaultState, action) => {
    switch (action.type) {
        case SET_INTERNAL_ERROR:
            return {
                ...state,
                [INTERNAL_ERROR]: {
                    ...action.payload
                }
            };
        default:
            return state;
    }
};
