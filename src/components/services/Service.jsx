import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { store } from '../../redux/store';
import getTimeFromDateString from '../../utils/date';
import setError from '../../utils/error';
import text from '../../text/text';

class Service extends React.Component {
  constructor(props) {
    super(props);
    this.routeToCallings = this.routeToCallings.bind(this);
  }

  getScheduledTime() {
    if (this.props.data.scheduledInfo) {
      return getTimeFromDateString(this.props.data.scheduledInfo.scheduledTime);
    }
    return text.toBeDisplayed;
  }

  getScheduledPlatform() {
    if (
      this.props.data.realTimeUpdatesInfo &&
      this.props.data.realTimeUpdatesInfo.realTimeServiceInfo &&
      this.props.data.realTimeUpdatesInfo.realTimeServiceInfo.realTimePlatform
    ) {
      return (
        text.platform + this.props.data.realTimeUpdatesInfo.realTimeServiceInfo.realTimePlatform
      );
    } else if (this.props.data.scheduledInfo && this.props.data.scheduledInfo.scheduledPlatform) {
      return text.platform + this.props.data.scheduledInfo.scheduledPlatform;
    }
    return text.platform + text.toBeDisplayed;
  }

  getDestination() {
    if (this.props.data.destinationList && this.props.data.destinationList[0]) {
      return this.props.data.destinationList[0].crs;
    }
    return text.toBeDisplayed;
  }

  routeToCallings() {
    axios
      .get(this.props.data.callingPatternUrl)
      .then((response) => {
        if (response.data && response.data.service) {
          store.dispatch({
            type: 'SET_CALLINGS',
            callings: response.data.service,
            url: this.props.data.callingPatternUrl,
          });
          this.props.history.push('/callings');
        } else {
          setError('No callings received');
        }
      })
      .catch((error) => {
        setError(error.toString());
      });
  }

  renderDelay() {
    if (
      this.props.data.realTimeUpdatesInfo &&
      this.props.data.realTimeUpdatesInfo.realTimeServiceInfo &&
      this.props.data.scheduledInfo &&
      this.props.data.realTimeUpdatesInfo.realTimeServiceInfo.realTime ===
        this.props.data.scheduledInfo.scheduledTime
    ) {
      return <OnTime>{text.onTime}</OnTime>;
    } else if (
      this.props.data.realTimeUpdatesInfo &&
      this.props.data.realTimeUpdatesInfo.realTimeServiceInfo
    ) {
      const expectedTimeString =
        text.expected +
        getTimeFromDateString(this.props.data.realTimeUpdatesInfo.realTimeServiceInfo.realTime);
      return <Delayed>{expectedTimeString}</Delayed>;
    }
    return <Delayed>{text.delayed}</Delayed>;
  }

  /**
   * Render Service
   */
  render() {
    return (
      <ServiceItem onClick={this.routeToCallings}>
        <FirstRow>
          <ScheduledTime>{this.getScheduledTime()}</ScheduledTime>
        </FirstRow>
        <SecondRow>
          <Destination>{this.getDestination()}</Destination>
          <Operator>{this.props.data.serviceOperator}</Operator>
        </SecondRow>
        <ThirdRow>
          <ScheduledPlatform>{this.getScheduledPlatform()}</ScheduledPlatform>
          {this.renderDelay()}
        </ThirdRow>
        <FourthRow>
          <Arrow>&gt;</Arrow>
        </FourthRow>
      </ServiceItem>
    );
  }
}

export default withRouter(Service);

const ServiceItem = styled.tr`
  border: 1px solid #f4f4f4;
  background-color: #ffffff;

  &:hover {
    background: #d7f3ec;
    border-left: 3px solid #234775;
  }
`;

const FirstRow = styled.td`
  width: 70px;
  text-align: center;
`;

const SecondRow = styled.td`
  width: 150px;
`;

const ThirdRow = styled.td`
  width: 95px;
`;

const FourthRow = styled.td`
  width: 20px;
  position: relative;
`;

const Delayed = styled.div`
  color: #ea2d00;
`;

const OnTime = styled.div`
  color: #49863f;
`;

const ScheduledTime = styled.div`
  color: #000000;
  font-weight: bold;
`;

const Destination = styled.div`
  color: #000000;
`;

const Operator = styled.div`
  color: #8d9190;
`;

const ScheduledPlatform = styled.div`
  color: #000000;
`;

const Arrow = styled.div`
  color: #332478;
  position: absolute;
  font-weight: bold;
  top: 25%;
`;
