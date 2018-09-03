import { applicationActions as actionTypes} from '../constants';

const defaultQuickQuoteState = {};

const myQuoteReducer = (state = defaultQuickQuoteState, action) => {
    switch(action.type) {
        case actionTypes.RETRIEVE_APPLICATION_SUCCESS: 
        return [
			...state,
			action.data
        ]
		case actionTypes.RETRIEVE_APPLICATION_FAIL: 
        return [
			...state,
			action.error
        ]
        case actionTypes.RESET_APPLICATION: 
        return [
        ]
        default:
		return state;
    }
}

export default myQuoteReducer;