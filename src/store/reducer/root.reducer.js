import { combineReducers } from 'redux';
import { CounterReducer } from '../reducer/counter.reducer'
import { ModalReducer } from '../reducer/modal.reducer'

export default combineReducers({
    counter: CounterReducer,
    modal: ModalReducer
})