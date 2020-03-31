import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';
import serverMiddleWareReducer from '../reducers/middlewares/serverMiddlewareReducer';

export default createStore(
    rootReducer,
    applyMiddleware(thunk, serverMiddleWareReducer())
);