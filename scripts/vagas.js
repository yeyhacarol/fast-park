'use strict'

const url = 'http://localhost/FastPark/BackEndFastPark/api/vagas'

const createVacancies = async (vacancy) => {
    const options = {
        'method': 'POST',
        'body': JSON.stringify(vacancy),
        'headers': {
            'content-type': 'application/json'
        }
    }

    const response = await fetch(url, options)
    console.log(response.ok)
}

export {
    createVacancies
}