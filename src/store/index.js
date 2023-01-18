import { createStore } from 'redux';
import RootReducer from '../store/reducer/root.reducer'

export const store = createStore(RootReducer);