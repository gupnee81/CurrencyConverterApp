
import {createStore, compose, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import { watcherSaga } from "../sagas";

// dev tools middleware
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// create a redux store with our reducer
const configureStore = initialState => ({
    ...createStore(
        rootReducer,
        initialState,
        composeEnhancers(applyMiddleware(sagaMiddleware))
    ),
});

const store = configureStore();
// run the saga
sagaMiddleware.run(watcherSaga);

export default store;
