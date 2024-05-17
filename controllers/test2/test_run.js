const { addUpdateBonusValidation } = require("../../services/Validations/testValidations");
const { getByName } = require('@AwsHelpers/index.js')

exports.handler = async (event, context, callback) => {
    try {
        const dbName = await getByName('db_name');
        console.log('DB NAME => ', dbName)
        // This fn should push record to queue
        addUpdateBonusValidation({
            id: "dcv"
        }, async (validate, message) => {
            console.log('validate => ', validate)
            if (validate) {
                callback( null, {
                    body: JSON.stringify( {
                        messages: 'Updated success response 1!!',
                    } ),
                    statusCode: 200
                } )
            } else {
                callback( null, {
                    body: JSON.stringify( {
                        messages: 'Updated fail response 1!!',
                    } ),
                    statusCode: 200
                } )
            }
        })
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