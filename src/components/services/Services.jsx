import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Service from './Service';

class Services extends React.Component {
  renderServices() {
    const services = [];
    if (this.props.services) {
      this.props.services.map(service =>
        services.push(<Service
          data={service}
          key={service.serviceIdentifier + service.destinationList[0].crs}
        />));
    }
    return services;
  }
  /**
   * Render Services
   */
  render() {
    return (
      <Table>
        <tbody>{this.renderServices()}</tbody>
      </Table>
    );
  }
}

const Table = styled.table`
  border-collapse: collapse;
`;

/**
 * Links the needed state properties to the component
 * @param {*} state
 */
function mapStateToProps(state) {
  return {
    services: state.get('services'),
  };
}

export default connect(mapStateToProps)(Services);
