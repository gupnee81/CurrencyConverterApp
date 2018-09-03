import React from 'react';
import { reduxForm, formValueSelector } from 'redux-form';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import NewPageStyles from '../../styles/NewQuickQuoteStyles';
import ButtonStyle from '../../styles/FormStyles';
import {maxLen, countryCurreny, FormNames} from '../../constants';
import InputComponent from '../../components/form/InputComponent';
import CurrencyComponent from '../../components/form/CurrencyComponent';
import AmountComponent from '../../components/form/AmountComponent';
import {retrieveApplicationRequest} from '../../actions/myQuoteAction';

class NewQuickQuote extends React.Component {

  isDisabled = () => {
    if (this.props.fromCurrency && this.props.toCurrency && this.props.amount && this.props.firstName && this.props.lastName) {
      return false;
    }
    return true;
  }

  render() {
    return (
      <NewPageStyles.MainDiv>
        <form>
          <NewPageStyles.Row>
            <NewPageStyles.Col50>
              <InputComponent
                id='firstName'
                name='firstName'
                text='First Name'
                type='text'
                maxLength={maxLen.firstName}
                width='90'
                required
              />
            </NewPageStyles.Col50>
            <NewPageStyles.Col50>
              <InputComponent
                id='lastName'
                name='lastName'
                text='Last Name'
                type='text'
                maxLength={maxLen.lastName}
                width='90'
                required
              />
            </NewPageStyles.Col50>
          </NewPageStyles.Row>
          <NewPageStyles.Row>
            <InputComponent
              id='emailAddress'
              name='emailAddress'
              text='Email'
              type='email'
              maxLength={maxLen.email}
              width='95'
            />
          </NewPageStyles.Row>
          <NewPageStyles.Row>
            <NewPageStyles.Col50>
              <CurrencyComponent
                id='fromCurrency'
                name='fromCurrency'
                text='From Currency'
                displayElements={countryCurreny}
                width='90'
                required
              />
            </NewPageStyles.Col50>
            <NewPageStyles.Col50>
              <CurrencyComponent
                id='toCurrency'
                name='toCurrency'
                text='To Currency'
                displayElements={countryCurreny}
                width='90'
                required
              />
            </NewPageStyles.Col50>
          </NewPageStyles.Row>
          <NewPageStyles.Row>
            <NewPageStyles.Col50>
              <AmountComponent
                id='amount'
                name='amount'
                text='Amount'
                type='number'
                maxLength={maxLen.amount}
                width='90'
                required
              />
            </NewPageStyles.Col50>
          </NewPageStyles.Row>
          <NewPageStyles.Row>
            <NewPageStyles.ButtonDiv>
              <ButtonStyle.Button type='button' disabled={this.isDisabled()} onClick={() => {
                this.props.actions.retrieveApplicationRequest();
                this.props.history.push('/view');
                }
              }>Get Quote</ButtonStyle.Button>
            </NewPageStyles.ButtonDiv>
          </NewPageStyles.Row>
        </form>
      </NewPageStyles.MainDiv>
    );
  }
}

NewQuickQuote = reduxForm({
  form: FormNames.QUICK_QUOTE_FORM,
  destroyOnUnmount: false,
})(NewQuickQuote);

const selector= formValueSelector(FormNames.QUICK_QUOTE_FORM);

const mapStateToProps = state => ({
  firstName: selector(state, 'firstName'),
  lastName: selector(state, 'lastName'),
  fromCurrency: selector(state, 'fromCurrency'),
  toCurrency: selector(state, 'toCurrency'),
  amount: selector(state, 'amount'),
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({retrieveApplicationRequest}, dispatch)

});

export default connect(mapStateToProps, mapDispatchToProps)(NewQuickQuote);
