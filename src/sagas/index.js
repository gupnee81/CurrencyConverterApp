import { take, call } from 'redux-saga/effects';
import {retrieveApplicationSaga} from './myQuoteSaga';
import { applicationActions as actionTypes} from '../constants';

// watcher saga: watches for actions dispatched to the store, call associated saga then.
export function* watcherSaga() {
    while(true) {
        const action = yield take([
            actionTypes.RETRIEVE_APPLICATION_REQUEST,
        ]);

        switch (action.type) {
            case actionTypes.RETRIEVE_APPLICATION_REQUEST: 
                yield call(retrieveApplicationSaga);
                break;

            default:
                break;
        }
    }
  }
