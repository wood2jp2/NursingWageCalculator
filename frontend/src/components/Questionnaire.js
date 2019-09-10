import React, { Component } from 'react'
import questions from '../constants'

class Questionnaire extends Component {
    state = {
        baseHourlyRate: 0,
        payPdTotalHours: 0,
        preceptorHours: 0,
        eightHourBonusShifts: 0,
        twelveHourBonusShifts: 0
    }

    handleChange = e => {
        const question = e.target.name
        const value = e.target.value

        this.setState({
            [question]: Number(value)
        })
    }

    handleCalculate = e => {
        e.preventDefault()

        const { baseHourlyRate, payPdTotalHours, preceptorHours, eightHourBonusShifts, twelveHourBonusShifts } = this.state
        const baseWages = baseHourlyRate * payPdTotalHours
        const addPreceptorHourWages = baseWages + preceptorHours * 2
        const addEightHourBonusShifts = addPreceptorHourWages + eightHourBonusShifts * 150
        const addTwelveHourBonusShifts = addEightHourBonusShifts + twelveHourBonusShifts * 200

        const overtimeHours = 40%payPdTotalHours
        const overtimeWages = overtimeHours * baseHourlyRate / 2
        const addOvertime = addTwelveHourBonusShifts + overtimeWages

        const result = addOvertime

        console.log(result)
    }

    render() {
        return (
            <div> 
                <form onSubmit={ e => this.handleCalculate(e) }>

                {questions.map(({ name, text, type, step, min, max }, index) => 
                    <div key={index}>
                        <label>{index+1}. {text}</label>
                        <input
                            name={name}
                            type={type}
                            step={step}
                            max={max}
                            min={min}
                            value={this.state[name]}
                            onChange={this.handleChange}
                            >

                        </input>
                    </div>
                    )}

                    <input type="submit" value="Calculate"/>
                </form>
            </div>
        )
    }

}

export default Questionnaire