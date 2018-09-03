import { applicationActions as actionTypes} from '../constants';

export const retrieveApplicationRequest = () => ({
    type: actionTypes.RETRIEVE_APPLICATION_REQUEST,
});

export const retrieveApplicationSuccess = (data) => ({
    type: actionTypes.RETRIEVE_APPLICATION_SUCCESS,
    data,
});

export const retrieveApplicationFail = (error) => ({
    type: actionTypes.RETRIEVE_APPLICATION_FAIL,
    error,
});

export const resetApplication = () => ({
    type: actionTypes.RESET_APPLICATION,
});