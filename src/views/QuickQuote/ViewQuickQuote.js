import React from 'react';
import {withRouter} from 'react-router';
import {formValueSelector, reset as resetFormValues} from 'redux-form';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import Loader from  '../../components/Loader';
import ViewPageStyles from '../../styles/ViewQuickQuoteStyles';
import ButtonStyle from '../../styles/FormStyles';
import {resetApplication} from '../../actions/myQuoteAction';
import { FormNames } from '../../constants';


class ViewQuote extends React.Component {

  state = {
    isLoaded: false,
  }

  componentWillMount = () => {
    this.setIsLoaded(this.props.QuickQuoteDetails);
  }

  componentWillReceiveProps = (nextProps) => {
    this.setIsLoaded(nextProps.QuickQuoteDetails);
  }

  setIsLoaded = (quickQuoteObject) => {
    if(quickQuoteObject !== undefined && quickQuoteObject.length >= 1){
      this.setState({isLoaded: true});
    } else {
      this.setState({isLoaded: false});
    }
  }
  
  render() {
    return (
      <section>
        { (this.state.isLoaded) ? 
			(this.props.QuickQuoteDetails[0].error) ? 
			<ViewPageStyles.CustomerRateHeader>{this.props.QuickQuoteDetails[0].error.response.data.SystemMessage}</ViewPageStyles.CustomerRateHeader>
		:
		<ViewPageStyles.viewMainDiv>
          <ViewPageStyles.viewSecondaryDiv>
            <ViewPageStyles.CustomerRateSection>
              <ViewPageStyles.CustomerRateHeader>OFX Customer Rate</ViewPageStyles.CustomerRateHeader>
              <ViewPageStyles.CustomerRateValue>
                {this.props.QuickQuoteDetails[0] && 
                this.props.QuickQuoteDetails[0].CustomerRate}
              </ViewPageStyles.CustomerRateValue>
            </ViewPageStyles.CustomerRateSection>

            <ViewPageStyles.CustomerFromToSection>          
              <ViewPageStyles.FromTo>From </ViewPageStyles.FromTo>
              <ViewPageStyles.CurrenyHeading>{this.props.fromCurrency && this.props.fromCurrency} </ViewPageStyles.CurrenyHeading>
              <ViewPageStyles.CurrenyValue> {this.props.amount && this.props.amount} </ViewPageStyles.CurrenyValue>
            </ViewPageStyles.CustomerFromToSection>

            <ViewPageStyles.CustomerFromToSection> 
              <ViewPageStyles.FromTo>To </ViewPageStyles.FromTo>
              <ViewPageStyles.CurrenyHeading>{this.props.toCurrency && this.props.toCurrency} </ViewPageStyles.CurrenyHeading>
              <ViewPageStyles.CurrenyValue> {this.props.QuickQuoteDetails[0] && 
                this.props.QuickQuoteDetails[0].CustomerAmount} </ViewPageStyles.CurrenyValue>          
            </ViewPageStyles.CustomerFromToSection>
          </ViewPageStyles.viewSecondaryDiv>
            </ViewPageStyles.viewMainDiv> : <Loader /> }
            <ViewPageStyles.ButtonSection>
              <ButtonStyle.Button type='button' onClick={() => {
                this.props.actions.resetApplication();
                this.props.history.push('/new');
                this.props.actions.resetFormValues(FormNames.QUICK_QUOTE_FORM);
                }
              }>Start New Quote</ButtonStyle.Button>
            </ViewPageStyles.ButtonSection>
      </section>
    );
  }
}


const selector= formValueSelector(FormNames.QUICK_QUOTE_FORM);

const mapStateToProps = state => ({
  QuickQuoteDetails: state.myQuote,
  fromCurrency: selector(state, 'fromCurrency'),
  toCurrency: selector(state, 'toCurrency'),
  amount: selector(state, 'amount'),
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({resetApplication, resetFormValues}, dispatch)

});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ViewQuote));