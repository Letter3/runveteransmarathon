import React from 'react';
import Section from '../../components/section';
import Heading from '../../components/heading';
import PropTypes from 'prop-types';
import Sponsors from '../../components/sponsors';

class RaceDay extends React.Component {
  render() {
    return (
      <div className={'section-wrapper'}>
        <Heading message={'Day of the Race'}/>
        <Section url={this.props.enJson.raceDayScheduleWP} title={'Schedule of Events'}/>
        <Section url={this.props.enJson.raceDayParkingWP} title={'Parking'} image='images/parking.jpg' />
        <Section url={this.props.enJson.raceDayPostRaceWP} title={'Post Race'}/>
        <Section url={this.props.enJson.raceDayAwardWP} title={'Awards'}/>
        <Section url={this.props.enJson.raceDaySpectatorWP} title={'Spectators'}/>
        <Sponsors/>
      </div>
    );
  }
}

RaceDay.propTypes = {
  enJson: PropTypes.object,
  raceDayScheduleWP: PropTypes.string,
  raceDayParkingWP: PropTypes.string,
  raceDayPostRaceWP: PropTypes.string,
  raceDayAwardWP: PropTypes.string,
  raceDaySpectatorWP: PropTypes.string
};

export default RaceDay;
