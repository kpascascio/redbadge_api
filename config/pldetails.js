const plaid = require('plaid');

const client = new plaid.Client(
    process.env.PLCLIENTID,
    process.env.PLSECRET,
    process.env.PLPUBLICKEY,
    plaid.environments.development
);

module.exports = {
    client
}