const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb+srv://rohitlohra3036:m8FP1u2VGNMS7FVT@cluster0.lwpqlde.mongodb.net/test'

async function getEmpData() {
    let client = await MongoClient.connect(url);
    let connection = client.db('issueTracker'); // Establish connection
    return connection.collection('IssueTracker2023'); // creating a collection and naming it also
}

module.exports = getEmpData;