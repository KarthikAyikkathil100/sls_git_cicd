
exports.handler = async (event, context, callback) => {
    try {
        console.warn(event);
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