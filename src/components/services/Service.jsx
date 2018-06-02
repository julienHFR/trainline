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
      <tr>
        <ServiceItem>
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
      </tr>
    );
  }
}

export default Service;

const ServiceItem = styled.div`
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
  width: 70px;
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
