import React, { Component } from 'react';
import './TeslaBattery.css';
import TeslaNotice from '../components/TeslaNotice/TeslaNotice'

class TeslaBattery extends Component {
    render() {
        return (
            <form>
            <h1>Range Per Charge</h1>
            <TeslaNotice />
            </form>
        );
    }
}

export default TeslaBattery;