'use strict'

const url = 'http://localhost/FastPark/BackEndFastPark/api/vagas'

const createVacancy = async (vacancy) => {
    const options = {
        'method': 'POST',
        'body': JSON.stringify(vacancy),
        'headers': {
            'Content-type': 'application/json'
        }
    }

    const response = await fetch(url, options)
    console.log(response.ok)
}

const readVacancies = async () => {
    const response = await fetch(url)

    return await response.json()
}

export { createVacancy, readVacancies }