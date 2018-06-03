import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import axios from 'axios';
import { store } from '../../redux/store';
import Calling from './Calling';
import text from '../../text/text';

class Callings extends React.Component {
  componentDidMount() {
    this.pollCallings();
  }

  componentDidUpdate() {
    this.pollCallings();
  }

  /**
   * Poll api for real time
   */
  pollCallings() {
    if (this.props.url) {
      setTimeout(() => {
        axios.get(this.props.url).then((response) => {
          if (response.data && response.data.service) {
            store.dispatch({
              type: 'SET_CALLINGS',
              callings: response.data.service,
              url: this.props.url,
            });
          }
        });
      }, 60000);
    }
  }

  /**
   * Calculate position and sttus for each calling and create the component
   */
  renderCallings() {
    const callings = [];
    if (this.props.callings && this.props.callings.stops) {
      this.props.callings.stops.map((calling, index) => {
        let status;
        if (
          index === 0 &&
          calling.departure &&
          calling.departure.realTime &&
          calling.departure.realTime.realTimeServiceInfo &&
          !calling.departure.realTime.realTimeServiceInfo.hasDeparted
        ) {
          status = 'station';
        } else if (
          index === 0 &&
          calling.departure &&
          calling.departure.realTime &&
          calling.departure.realTime.realTimeServiceInfo &&
          calling.departure.realTime.realTimeServiceInfo.hasDeparted &&
          new Date(this.props.callings.stops[index + 1].arrival.realTime.realTimeServiceInfo.realTime) > new Date()
        ) {
          status = 'after';
        } else if (
          index === this.props.callings.stops.length &&
          calling.arrival &&
          calling.arrival.realTime &&
          calling.arrival.realTime.realTimeServiceInfo &&
          !calling.arrival.realTime.realTimeServiceInfo.hasArrived
        ) {
          status = 'station';
        } else if (
          calling.arrival &&
          calling.arrival.realTime &&
          calling.arrival.realTime.realTimeServiceInfo &&
          calling.departure &&
          calling.departure.realTime &&
          calling.departure.realTime.realTimeServiceInfo
        ) {
          if (
            calling.arrival.realTime.realTimeServiceInfo.hasArrived &&
            !calling.departure.realTime.realTimeServiceInfo.hasDeparted
          ) {
            status = 'station';
          } else if (
            new Date(calling.departure.realTime.realTimeServiceInfo.realTime) < new Date() &&
            this.props.callings.stops[index + 1].arrival &&
            this.props.callings.stops[index + 1].arrival.realTime &&
            this.props.callings.stops[index + 1].arrival.realTime.realTimeServiceInfo &&
            new Date(this.props.callings.stops[index + 1].arrival.realTime.realTimeServiceInfo.realTime) > new Date()
          ) {
            status = 'after';
          }
        }
        let position;
        if (calling.location.crs === this.props.callings.serviceOrigins[0]) {
          position = 'start';
        } else if (calling.location.crs === this.props.callings.serviceDestinations[0]) {
          position = 'stop';
        }
        return callings.push(<Calling data={calling} key={calling.location.crs} position={position} status={status} />);
      });
    }
    return callings;
  }

  /**
   * Render Callings
   */
  render() {
    if (this.props.callings) {
      return (
        <CallingsContainer>
          <Header>
            <Icon src="http://localhost:9000/train.png" />
            <From>{this.props.callings.serviceOrigins[0]}</From>
            <ToString>{text.to}</ToString>
            <To>{this.props.callings.serviceDestinations[0]}</To>
            <Operator>{text.operated + this.props.callings.serviceOperator}</Operator>
          </Header>
          {this.renderCallings()}
        </CallingsContainer>
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
    url: state.get('url'),
  };
}

export default connect(mapStateToProps)(Callings);

const CallingsContainer = styled.div`
  background-color: #ffffff;
`;

const Header = styled.div`
  margin-bottom: 30px;
`;

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
