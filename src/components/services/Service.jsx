import React from 'react';
import styled from 'styled-components';
import getTimeFromDateString from '../../utils/date';

const platformHeader = 'Plat. ';
const delayedString = 'Delayed';
const onTimeString = 'On time';

class Service extends React.Component {
  getScheduledTime() {
    if (this.props.data.scheduledInfo) {
      return getTimeFromDateString(this.props.data.scheduledInfo.scheduledTime);
    }
  }

  getScheduledPlatform() {
    if (
      this.props.data.realTimeUpdatesInfo &&
      this.props.data.realTimeUpdatesInfo.realTimeServiceInfo &&
      this.props.data.realTimeUpdatesInfo.realTimeServiceInfo.realTimePlatform
    ) {
      return (
        platformHeader + this.props.data.realTimeUpdatesInfo.realTimeServiceInfo.realTimePlatform
      );
    } else if (this.props.data.scheduledInfo) {
      return platformHeader + this.props.data.scheduledInfo.scheduledPlatform;
    }
  }

  getDestination() {
    if (this.props.data.destinationList && this.props.data.destinationList[0]) {
      return this.props.data.destinationList[0].crs;
    }
  }

  renderDelay() {
    if (
      this.props.data.realTimeUpdatesInfo &&
      this.props.data.realTimeUpdatesInfo.realTimeServiceInfo
    ) {
      if (this.props.data.realTimeUpdatesInfo.realTimeServiceInfo.realTimeFlag === delayedString) {
        return <Delayed>{delayedString}</Delayed>;
      } else if (
        this.props.data.scheduledInfo &&
        this.props.data.realTimeUpdatesInfo.realTimeServiceInfo.realTime !==
          this.props.data.scheduledInfo.scheduledTime
      ) {
        return <Delayed>Expected</Delayed>;
      }
      return <OnTime>{onTimeString}</OnTime>;
    }
  }

  /**
   * Render Service
   */
  render() {
    return (
      <ServiceItem>
        <div className="scheduledTime">{this.getScheduledTime()}</div>
        <div className="destination">{this.getDestination()}</div>
        <div className="operator">{this.props.data.serviceOperator}</div>
        <div className="scheduledPlatform">{this.getScheduledPlatform()}</div>
        <div className="delay">{this.renderDelay()}</div>
      </ServiceItem>
    );
  }
}

export default Service;

const ServiceItem = styled.div`
  border: 1px solid #f4f4f4;
  background-color: #ffffff;
`;

const Delayed = styled.div`
  color: #ea2d00;
`;

const OnTime = styled.div`
  color: #49863f;
`;
