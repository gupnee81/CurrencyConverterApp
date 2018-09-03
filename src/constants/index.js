export const applicationActions = {
    RETRIEVE_APPLICATION_REQUEST: 'RETRIEVE_APPLICATION_REQUEST',
    RETRIEVE_APPLICATION_SUCCESS: 'RETRIEVE_APPLICATION_SUCCESS',
    RETRIEVE_APPLICATION_FAIL: 'RETRIEVE_APPLICATION_FAIL',
    RESET_APPLICATION: 'RESET_APPLICATION',
}

export const maxLen = {
    firstName: 15,
    lastName: 10,
    email: 100,
    amount: 10,
}

export const countryCurreny = [
    {value: '', text: 'Select'},
    {value: 'AUD', text: 'Australian Dollar'},
    {value: 'INR', text: 'Indian Rupee'},
    {value: 'USD', text: 'United State Dollar'},
    {value: 'EUR', text: 'Austria Euro'},
    {value: 'SGD', text: 'Singapore Dollar'},
]

export const FormNames = {
    QUICK_QUOTE_FORM: 'quickQuoteForm',
}