'use strict'

import { createVacancies } from './vagas.js'

const saveVacancy = async () => {

    let preferencial = document.getElementById('preferencial')
    
    if (preferencial.checked) {
        preferencial = '1'
    } else {
        preferencial = '0'
    }

    const vacancy = {
        "id": "",
        "ocupacao": "0",
        "preferencial": preferencial,
        "id_tipo": document.getElementById('type').value,
        "id_estacionamento": "1",
        "piso": document.getElementById('floor').value,
        "corredor": document.getElementById('hall').value,
        "sigla": document.getElementById('initials').value
    }

    await createVacancies(vacancy)
}

document.getElementById('save-vacancy').addEventListener('click', saveVacancy)
