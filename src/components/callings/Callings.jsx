import React from 'react';
import { connect } from 'react-redux';
import Calling from './Calling';

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
    return (
      <div className="callings">
        <div className="header">
          <div className="from">{this.props.callings.serviceOrigins[0]}</div>
          <div className="to">{this.props.callings.serviceDestinations[0]}</div>
          <div className="operator">{this.props.callings.serviceOperator}</div>
        </div>
        {this.renderCallings()}
      </div>
    );
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
