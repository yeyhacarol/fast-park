'use strict'

const url = 'http://localhost/FastPark/BackEndFastPark/api/valor'

const createValue = async (value) => {
    const options = {
        'method': 'POST',
        'body': JSON.stringify(value),
        'headers': {
            'content-type': 'application/json'
        }
    }

    const response = await fetch(url, options)
}

export {
    createValue
}