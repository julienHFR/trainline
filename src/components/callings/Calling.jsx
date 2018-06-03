import React from 'react';
import styled from 'styled-components';
import getTimeFromDateString from '../../utils/date';
import text from '../../text/text';

class Calling extends React.Component {
  getTime() {
    if (
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
    }
    return 'unknown';
  }

  /**
   * Render Calling
   */
  render() {
    return (
      <CallingItem>
        <Time>{this.getTime()}</Time>
        <Drawing>t</Drawing>
        <Station>{this.getStation()}</Station>
        <Delay>{this.getDelay()}</Delay>
      </CallingItem>
    );
  }
}

export default Calling;

const CallingItem = styled.div`
  color: #000000;
`;

const Time = styled.div`
  color: #000000;
`;

const Drawing = styled.div`
  color: #000000;
`;

const Station = styled.div`
  color: #000000;
`;

const Delay = styled.div`
  color: #000000;
`;
