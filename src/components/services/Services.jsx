import React from 'react';
import { connect } from 'react-redux';
import Service from './Service';

class Services extends React.Component {
  renderServices() {
    const services = [];
    if (this.props.services) {
      this.props.services.map(service =>
        services.push(<Service data={service} key={service.serviceIdentifier} />));
    }
    return services;
  }
  /**
   * Render Services
   */
  render() {
    return <div className="services">{this.renderServices()}</div>;
  }
}

/**
 * Links the needed state properties to the component
 * @param {*} state
 */
function mapStateToProps(state) {
  return {
    services: state.services.get('services'),
  };
}

export default connect(mapStateToProps)(Services);
