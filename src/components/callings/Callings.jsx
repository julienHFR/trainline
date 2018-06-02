import React from 'react';
import { connect } from 'react-redux';

class Callings extends React.Component {
  renderCallings() {
    const callings = [];
    if (this.props.callings && this.props.callings.stops) {
      this.props.callings.stops.map(calling =>
        callings.push(<div data={calling} key={calling.location.crs}>
            calling
                      </div>));
    }
    return callings;
  }

  /**
   * Render Callings
   */
  render() {
    return (
      <div className="callings">
        <div className="header">header</div>
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
    callings: state.callings.get('callings'),
  };
}

export default connect(mapStateToProps)(Callings);
