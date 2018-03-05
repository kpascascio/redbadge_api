const twilio = require('twilio');

twilioNumber = '(321) 250-2962'

module.exports = {
    twilio: new twilio(process.env.TWACCOUNTSID, process.env.TWAUTHTOKEN),
    twilioNumber
}