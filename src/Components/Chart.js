import React, {Component} from 'react'
import {Line} from 'react-chartjs-2'

class Chart extends Component{
    temperatures = []
    humidities = []

    constructor(props){
        super(props)
    
        if(props.room_data.length == 0){
        }else{
            this.temperatures = props.room_data.map((elem) => elem["temperature"])
            this.humidities = props.room_data.map((elem) => elem["humidity"])
        }

        this.humidities = props.room_data.map((elem) => elem["humiditiy"])
        this.state = {
            data: {
                labels: ["1", "2", "3"],
                datasets: [
                    {
                        label: "Temperatura",
                        backgroundColor: "rgba(255,0,255,0.75)",
                        data: this.temperatures
                    },
                    {
                        label: "Wilgotność",
                        backgroundColor: "rgba(255,250,0.50",
                        data: this.humidities
                    }
                ]
            }
        }
    }

    options = {
        responsive: true
    }

    render(){
        return(
            <div className="chart">
                <Line options={this.options} data={this.state.data} />
            </div>
        )
    }
}

export default Chart