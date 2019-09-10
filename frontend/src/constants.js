const questions = [
    {
        text: 'What is your base hourly rate?',
        name: 'baseHourlyRate',
        type: 'number',
        step: '0.01',
        min: '7.25',
        max: '100'
    }, 
    {
        text: 'How many total hours did you work for the pay period?',
        name: 'payPdTotalHours',
        type: 'number',
        step: '0.25',
        min: '0',
        max: '336'
    }, 
    {
        text: 'How many preceptor hours did you log?',
        name: 'preceptorHours',
        type: 'number',
        step: '0.25',
        min: '0',
        max: '336'
    }, // $2 per hour extra
    {
        text: 'How many 8-hour bonus shifts?',
        name: 'eightHourBonusShifts',
        type: 'number',
        step: '1',
        min: '0',
        max: '14'
    }, // $150 flat rate bonus
    {
        text: 'How many 12-hour bonus shifts?',
        name: 'twelveHourBonusShifts',
        type: 'number',
        step: '1',
        min: '0',
        max: '14'
    } // $200 flat rate bonus
    
]

export default questions