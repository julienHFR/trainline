import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Calling from './Calling';
import text from '../../text/text';

class Callings extends React.Component {
  renderCallings() {
    const callings = [];
    if (this.props.callings && this.props.callings.stops) {
      this.props.callings.stops.map(calling =>
        callings.push(<Calling data={calling} key={calling.location.crs} />));
    }
    return callings;
  }

  /**
   * Render Callings
   */
  render() {
    if (this.props.callings) {
      return (
        <div className="callings">
          <div className="header">
            <Icon src="http://localhost:9000/train.png" />
            <From>{this.props.callings.serviceOrigins[0]}</From>
            <ToString>{text.to}</ToString>
            <To>{this.props.callings.serviceDestinations[0]}</To>
            <Operator>{text.operated + this.props.callings.serviceOperator}</Operator>
          </div>
          {this.renderCallings()}
        </div>
      );
    }
    return null;
  }
}

/**
 * Links the needed state properties to the component
 * @param {*} state
 */
function mapStateToProps(state) {
  return {
    callings: state.get('callings'),
  };
}

export default connect(mapStateToProps)(Callings);

const Icon = styled.img`
  float: left;
  padding-right: 20px;
`;

const From = styled.div`
  font-weight: bold;
`;

const To = styled.div`
  font-weight: bold;
`;

const ToString = styled.div`
  padding-right: 10px;
  color: #bbbbbb;
  float: left;
`;

const Operator = styled.div`
  color: #a9a9a9;
`;
