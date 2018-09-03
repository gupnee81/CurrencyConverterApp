import React from 'react';
import HeaderStyles from '../../styles/HeaderStyles';


class Banner extends React.Component {

  render() {
    return (
      <header>
          <HeaderStyles.HeaderContainer>Quick Quote</HeaderStyles.HeaderContainer>
          <HeaderStyles.BorderBottom />
      </header>
    );
  }
}


export default Banner;