import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PageStyle from '../styles/MainStyles';
import Banner from '../views/Banner';
import NewQuickQuote from '../views/QuickQuote/NewQuickQuote';
import ViewQuickQuote from '../views/QuickQuote/ViewQuickQuote';

class AppShell extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    
  }

  render() {
    return (
      <PageStyle.PageBody>
          <Banner />
        <main>
          <Router>
            <Switch>
                <Route exact path="/new" render = {routerProps => <NewQuickQuote {...routerProps} />} />
                <Route exact path="/view" render = {routerProps => <ViewQuickQuote />} />
            </Switch>
          </Router>
        </main>
      </PageStyle.PageBody>
    );
  }
}



export default AppShell;
