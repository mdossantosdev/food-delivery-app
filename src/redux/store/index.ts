import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from '../reducers';

const initialStore = {};
const middleware = applyMiddleware(thunk);

export const store = createStore(rootReducer, initialStore, middleware);
