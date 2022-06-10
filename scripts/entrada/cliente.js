'use strict'

const url = 'http://localhost/FastPark/BackEndFastPark/api/clientes'

const createCustomer = async (customer) => {
    const options = {
        'method': 'POST',
        'body': JSON.stringify(customer),
        'headers': {
            'content-type': 'application/json'
        }
    }

    await fetch(url, options)
}

export { createCustomer }