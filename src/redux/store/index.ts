import { createStore, applyMiddleware, AnyAction } from 'redux';
import thunk, { ThunkAction } from 'redux-thunk';
import { rootReducer } from '../reducers';

const initialStore = {};
const middleware = applyMiddleware(thunk);

export const store = createStore(rootReducer, initialStore, middleware);

export type RootState = ReturnType<typeof rootReducer>;
export type AppThunkAction = ThunkAction<void, RootState, unknown, AnyAction>;
