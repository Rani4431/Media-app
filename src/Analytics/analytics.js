import React, { Component } from 'react';
import { Bar, Line } from "react-chartjs-2";
import './analytics.css'

class Analytics extends Component {
    constructor(props){
        super(props);
        this.state={
            userName:[],
        }
    }
    componentDidMount() {
        this.userData = JSON.parse(localStorage.getItem('user'));

        if (localStorage.getItem('user')) {
            this.setState({
              userName: this.userData.userName,
            })
        } else {
            this.setState({
              userName: [],
            })
        }
        // const login = localStorage.getItem('user')
        // console.log(login, "login")
    }

    render() {
        const login=localStorage.getItem('user')
        console.log(login,"login")
        const line = {
            labels: this.state.userName,
            datasets: [
                {
                    label: 'Login Data',
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: '#b9161a',
                    borderColor: '#b9161a',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: '#b9161a',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: '#b9161a',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [4, 2, 6, 4, 8]
                }
            ]
        };

        const bar = {
            labels: [
                "Just Dance International Radio",
                "Water flow",
                "For the child in you"
                
            ],
            datasets: [
                {
                    label: "Likes",
                    backgroundColor: "rgba(255,99,132,0.2)",
                    borderColor: "rgba(255,99,132,1)",
                    borderWidth: 1,
                    hoverBackgroundColor: "rgba(255,99,132,0.4)",
                    hoverBorderColor: "rgba(255,99,132,1)",
                    data: [4, 4, 6]
                },

                {
                    label: "Number of Play",
                    backgroundColor: "rgba(155,231,91,0.2)",
                    borderColor: "rgba(255,99,132,1)",
                    borderWidth: 1,
                    hoverBackgroundColor: "rgba(255,99,132,0.4)",
                    hoverBorderColor: "rgba(255,99,132,1)",
                    data: [2, 6, 7]
                }
            ]
        };

        const options = {
            responsive: true,
            legend: {
                display: false
            },
            type: "bar"
        };
        return (
             <div className="row">
                <div className="col">
                    <div className="card">
                        <Bar data={bar} options={options} />
                    </div>
                    </div>
                        <div className="col">
                    <div className="card">
                        <Line data={line} />
                    </div>
                    </div>

            </div>
        )
    }
}
export default Analytics;