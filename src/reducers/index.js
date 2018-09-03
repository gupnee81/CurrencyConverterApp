import {combineReducers} from 'redux';
import myQuote from './myQuoteReducer';
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
    myQuote,
    form: formReducer,
});

export default rootReducer;
