import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import styled from 'styled-components';
import { store } from '../../redux/store';
import Service from './Service';
import setError from '../../utils/error';

class Services extends React.Component {
  /**
   * Initialize services data into the state
   */
  componentWillMount() {
    const servicesUrl = 'https://realtime.thetrainline.com/departures/wat';
    axios
      .get(servicesUrl)
      .then((response) => {
        if (response.data && response.data.services) {
          store.dispatch({
            type: 'SET_SERVICES',
            services: response.data.services,
          });
        } else {
          setError('No services received');
        }
      })
      .catch((error) => {
        setError(error.toString());
      });
  }

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
