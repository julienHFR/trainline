import React from 'react';
import styled from 'styled-components';

class Calling extends React.Component {
  /**
   * Render Calling
   */
  render() {
    return <CallingItem onClick={this.routeToCallings}>Calling+</CallingItem>;
  }
}

export default Calling;

const CallingItem = styled.div`
  color: #000000;
`;
