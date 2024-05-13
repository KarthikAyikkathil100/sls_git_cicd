const {test} = require('@AwsHelpers/index.js')

exports.handler = async (event, context, callback) => {
    try {
        console.warn(event);
        console.log('Lambda layer response test => ', test());
        // This fn should push record to queue
        callback( null, {
            body: JSON.stringify( {
                messages: 'Successs',
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