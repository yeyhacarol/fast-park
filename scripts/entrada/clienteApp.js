'use strict'

import { createCustomer } from "./cliente.js"

const saveCustomer = async () => {
    

    const customer = {
        "id": "",
        "nome": document.getElementById('nome').value,
        "telefone": document.getElementById('telefone').value ? document.getElementById('telefone').value : ''
    }

    await createCustomer(customer)
}

const maskTel = ({target}) => {
    let number = target.value 

    number = number.replace(/[^0-9]/g, '')
    number = number.replace(/(.{2})(.{5})(.{4})/, '($1) $2-$3')
    number = number.replace(/(.{15})(.*)/, '$1')

    target.value = number
}

document.getElementById('submit').addEventListener('click', saveCustomer)
document.getElementById('telefone').addEventListener('keyup', maskTel)