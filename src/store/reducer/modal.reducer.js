import { SHOW, HIDE } from '../const/modal.const'
const initialState = {
    show: false
  }
  
export const ModalReducer = (state = initialState, action) => {
    switch(action.type) {
      case SHOW:
        return {
          show: true
        }
      case HIDE: 
        return {
          show: false
        }
      default: 
        return state
    }
  }