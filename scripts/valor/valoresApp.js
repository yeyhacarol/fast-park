'use strict'

import { createValue } from "./valores.js"

const saveValue = async () => {

    let vacancyType = document.getElementById('vacancy-type')

    if (vacancyType == '1') {
        vacancyType = 'Carro'
    } else {
        vacancyType = 'Moto'
    }

    const value = {
        "id": "",
        "id_tipo": vacancyType.value,
        "tipo": vacancyType,
        "id_valor": "",
        "hora_inicial": document.getElementById('first-hour').value,
        "demais_horas": document.getElementById('other-hour').value
    }

    await createValue(value)
}

document.getElementById('save-value').addEventListener('click', saveValue)