import generateRandomNumber from './generate-random-number'
import generateTimestamp from './generate-time-stamp'

const generateTransactionId = ({ transactionIdSiteNumber = null }) => {
    if (transactionIdSiteNumber === null) {
        throw new Error('Missing transaction ID site number')
    }

    return '' + transactionIdSiteNumber + generateTimestamp() + generateRandomNumber()
}

export default generateTransactionId
