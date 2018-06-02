import React from 'react';

class Services extends React.Component {
  renderScheduledTime() {
    if (this.props.data.scheduledInfo) return this.props.data.scheduledInfo.scheduledTime;
  }

  renderScheduledPlatform() {
    if (
      this.props.data.realTimeUpdatesInfo &&
      this.props.data.realTimeUpdatesInfo.realTimeServiceInfo &&
      this.props.data.realTimeUpdatesInfo.realTimeServiceInfo.realTimePlatform
    ) {
      return this.props.data.realTimeUpdatesInfo.realTimeServiceInfo.realTimePlatform;
    } else if (this.props.data.scheduledInfo) {
      return this.props.data.scheduledInfo.scheduledPlatform;
    }
  }

  renderDestination() {
    if (this.props.data.destinationList && this.props.data.destinationList[0]) {
      return this.props.data.destinationList[0].crs;
    }
  }

  renderDelay() {
    if (this.props.data.realTimeUpdatesInfo) {
      return JSON.stringify(this.props.data.realTimeUpdatesInfo);
    }
  }

  /**
   * Render Service
   */
  render() {
    return (
      <div className="service">
        <div className="scheduledTime">{this.renderScheduledTime()}</div>
        <div className="destination">{this.renderDestination()}</div>
        <div className="operator">{this.props.data.serviceOperator}</div>
        <div className="scheduledPlatform">{this.renderScheduledPlatform()}</div>
        <div className="delay">{this.renderDelay()}</div>
      </div>
    );
  }
}

export default Services;
