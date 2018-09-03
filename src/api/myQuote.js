import { get, post } from './restApi';

// ALL the API call related to Quick Quote module will come here...
const entity = 'https://api.ofx.com/PublicSite.ApiService/OFX/spotrate/Individual/';


export const getQuote = (quickQuoteData) => get({
    url: `${entity}/${quickQuoteData.fromCurrency}/${quickQuoteData.toCurrency}/${quickQuoteData.amount}/?format=json`,
});
