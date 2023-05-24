import { Component } from 'react';


export default class Clock extends Component {
    constructor() {
        super();
        this.state = {
            time: new Date().toString()
        };
    }
}