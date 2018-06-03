import React from 'react';
import styled from 'styled-components';
import getTimeFromDateString from '../../utils/date';
import text from '../../text/text';

class Calling extends React.Component {
  getTime() {
    if (
      this.props.data.arrival &&
      this.props.data.arrival.realTime &&
      this.props.data.arrival.realTime.realTimeServiceInfo &&
      this.props.data.arrival.realTime.realTimeServiceInfo.realTime
    ) {
      return getTimeFromDateString(this.props.data.arrival.realTime.realTimeServiceInfo.realTime);
    } else if (
      this.props.data.arrival &&
      this.props.data.arrival.scheduled &&
      this.props.data.arrival.scheduled.scheduledTime
    ) {
      return getTimeFromDateString(this.props.data.departure.scheduled.scheduledTime);
    } else if (
      this.props.data.departure &&
      this.props.data.departure.realTime &&
      this.props.data.departure.realTime.realTimeServiceInfo &&
      this.props.data.departure.realTime.realTimeServiceInfo.realTime
    ) {
      return getTimeFromDateString(this.props.data.departure.realTime.realTimeServiceInfo.realTime);
    } else if (
      this.props.data.departure &&
      this.props.data.departure.scheduled &&
      this.props.data.departure.scheduled.scheduledTime
    ) {
      return getTimeFromDateString(this.props.data.departure.scheduled.scheduledTime);
    }
    return 'unknown';
  }

  getStation() {
    if (this.props.data.location && this.props.data.location.crs) {
      return this.props.data.location.crs;
    }
    return 'unknown';
  }

  getDelay() {
    if (
      this.props.data.departure &&
      this.props.data.departure.realTime &&
      this.props.data.departure.realTime.realTimeServiceInfo
    ) {
      if (!this.props.data.departure.realTime.realTimeServiceInfo.hasDeparted) {
        return (
          text.expected +
          getTimeFromDateString(this.props.data.departure.realTime.realTimeServiceInfo.realTime)
        );
      } else if (this.props.data.departure.scheduled) {
        if (
          this.props.data.departure.scheduled.scheduledTime ===
          this.props.data.departure.realTime.realTimeServiceInfo.realTime
        ) {
          return text.onTime;
        }
        return (
          text.departed +
          getTimeFromDateString(this.props.data.departure.realTime.realTimeServiceInfo.realTime)
        );
      }
    } else if (
      this.props.data.arrival &&
      this.props.data.arrival.realTime &&
      this.props.data.arrival.realTime.realTimeServiceInfo
    ) {
      if (this.props.data.arrival.scheduled) {
        if (
          this.props.data.arrival.scheduled.scheduledTime ===
          this.props.data.arrival.realTime.realTimeServiceInfo.realTime
        ) {
          return text.onTime;
        }
        return (
          text.departed +
          getTimeFromDateString(this.props.data.arrival.realTime.realTimeServiceInfo.realTime)
        );
      }
    }
    return 'unknown';
  }

  getCallingType() {
    if (this.props.position) {
      return 'http://localhost:9000/callingFull.png';
    }
    return 'http://localhost:9000/callingEmpty.png';
  }

  /**
   * Render Calling
   */
  render() {
    return (
      <CallingItem>
        <Time>{this.getTime()}</Time>
        <Drawing src={this.getCallingType()} stop={this.props.position === 'stop'} />
        <Station>
          <StationName>{this.getStation()}</StationName>
          <Delay>{this.getDelay()}</Delay>
        </Station>
      </CallingItem>
    );
  }
}

export default Calling;

const CallingItem = styled.div`
  display: block;
  position: relative;
  padding-bottom: 12px;
  font-weight: bold;
`;

const Time = styled.div`
  color: #808080;
  display: inline-block;
  position: absolute;
`;

const Drawing = styled.img`
  color: #000000;
  display: inline-block;
  margin-left: 85px;
  position: absolute;

  ${({ stop }) =>
    stop &&
    `
  clip: rect(0px, 22px, 16px, 0px);
  `};
`;

const Station = styled.div`
  display: inline-block;
  margin-left: 120px;
`;

const StationName = styled.div`
  color: #808080;
  display: block;
`;

const Delay = styled.div`
  color: #a6a6a6;
  display: block;
  font-size: 14px;
`;
