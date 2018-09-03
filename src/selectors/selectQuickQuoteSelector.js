import {getFormValues} from 'redux-form';
import {FormNames} from '../constants';

export const selectQuickQuoteSelector = state => {
    const currencyConversionObject = {};
    const quickFormDetails = getFormValues(FormNames.QUICK_QUOTE_FORM)(state);
    currencyConversionObject.fromCurrency = quickFormDetails.fromCurrency;
    currencyConversionObject.toCurrency = quickFormDetails.toCurrency;
    currencyConversionObject.amount = quickFormDetails.amount;

    return currencyConversionObject;
};