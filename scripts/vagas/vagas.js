'use strict'

const url = 'http://localhost/FastPark/BackEndFastPark/api/vagas'

const createVacancy = async (vacancy) => {
    const options = {
        'method': 'POST',
        'body': JSON.stringify(vacancy),
        'headers': {
            'content-type': 'application/json'
        }
    }

    const response = await fetch(url, options)

}

const filterVacancy = async () => {
    const response = await fetch(url)

    const data = await response.json()

    let filtered = data.filter((item) => {
        if (item == item.localizacao.sigla) 
            return true;

        console.log(item.localizacao.sigla)
    })
}

filterVacancy()

const readVacancies = async () => {
    const response = await fetch(url)

    const data = await response.json()

    return data
}

export { createVacancy, filterVacancy, readVacancies }