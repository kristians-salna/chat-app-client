export const SET_INTERNAL_ERROR = 'SET_INTERNAL_ERROR';

export const setInternalErrorAction = error => ({
    type: SET_INTERNAL_ERROR,
    payload: {
        error
    }
});
