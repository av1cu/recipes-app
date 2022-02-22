import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

const store = createStore(reducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof reducer>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
