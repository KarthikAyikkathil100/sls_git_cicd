const {sendSqsMessage} = require('@AwsHelpers/index.js')
// const AWS = require( 'aws-sdk' )

// var sqs = new AWS.SQS( {
// 	apiVersion: '2012-11-05'
// } )

// function sendSqsMessage(body) {
//     return sqs.sendMessage({
//         MessageBody: JSON.stringify({
//             queueUrl: process.env.QueueURL,
//             ...body
//         }),
//         QueueUrl: process.env.QueueURL,
//     }).promise()
// }

exports.handler = async (event, context, callback) => {
    try {
        console.warn(event);

        // This fn should push record to queue
        const data = {
            testData: 'This is test data. (updated again)'
        }
        const sqsRes = await sendSqsMessage(data)
        console.log('sqsRes => ', sqsRes);
        callback( null, {
            body: JSON.stringify( {
                messages: 'Success',
            } ),
            statusCode: 200
        } )
    } catch (err) {
        console.error('[ERROR] => ', err)
        callback( null, {
            body: JSON.stringify( {
                messages: 'Internal Server Error',
            } ),
            statusCode: 500
        } )
    }
}