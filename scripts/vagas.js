'use strict'

const url = 'http://localhost/FastPark/BackEndFastPark/api/vagas/1'

const getVagas = async () => {
    const response = await fetch(url)

    console.log(await response.json())
}