import React from "react";
import './clock.css'

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: this.props.time };
    this._update = this._updateTime.bind(this);
    this._formatTime = this._formatTime.bind(this);
    this.day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];;
    this.month= ["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"]
  }

  render() {
    const time = this._formatTime(this.state.time);

    return (
      <h1 className={'clock'}>
        {time.hours} : {time.minutes} : {time.seconds} &nbsp; &nbsp; {time.date} {this.month[parseInt(time.month)]} {this.day[parseInt(time.day)]}
      </h1>
    );
  }

  componentDidMount() {
    this._interval = setInterval(this._update, 1000);
  }

  componentWillUnmount() {
    clearInterval(this._interval);
  }

  _formatTime(time) {
    var [hours, minutes, seconds, date, day, month] = [
      time.getHours(),
      time.getMinutes(),
      time.getSeconds(),
      time.getDate(),
      time.getDay(),
      time.getMonth()
    ].map(num => (num < 10 ? "0" + num : num));
    return { hours, minutes, seconds, date, day, month };
  }

  _updateTime() {
    this.setState({
      time: new Date()
    });
  }
}

Clock.defaultProps = {
  time: new Date()
};
