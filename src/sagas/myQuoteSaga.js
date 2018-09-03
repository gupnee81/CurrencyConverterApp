import { call, put, select } from 'redux-saga/effects';
import {getQuote} from '../api/myQuote'
import * as myQuoteActions from '../actions/myQuoteAction';
import { selectQuickQuoteSelector } from '../selectors/selectQuickQuoteSelector';

export function* retrieveApplicationSaga() {
    const quickQuoteData = yield select(selectQuickQuoteSelector);
    const apiResponse = yield call(getQuote, quickQuoteData);

    if(apiResponse.response) {
        yield put(myQuoteActions.retrieveApplicationSuccess(apiResponse.response.data));
    } else {
		console.log('aaaaa');
		console.log(apiResponse);
        yield put(myQuoteActions.retrieveApplicationFail(apiResponse));
    }

};
