'use strict'

import { createVacancy, filterVacancy, readVacancies } from "./vagas.js"

const createRow = (vacancy) => {
    const row = document.createElement('div')
    row.classList.add('label')
    row.innerHTML =
        ` <span>${vacancy.localizacao.piso}</span>
          <span>${vacancy.localizacao.corredor}</span>
          <span class="sigla">${vacancy.localizacao.sigla}</span>
          <span>
                <img src="${vacancy.preferencial == '1' ? './img/preferencial.png' : './img/livre.png'}">
                <img src="${vacancy.tbl_tipo.tipo == 'Carro' ? './img/free-car.png' : './img/motorcycle.png'}">
          </span>
          <div class="label actions">
                <img src="img/delete.png" alt="deletar" title="apagar vaga">
                <img src="img/edit.png" alt="editar" title="editar vaga">
          </div>`

    return row
}

const updateTable = async () => {
    const tableContainer = document.querySelector('.values')

    const vacancies = await readVacancies()

    const rows = vacancies.map(createRow)
    tableContainer.replaceChildren(...rows)   
}

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

    await createVacancy(vacancy)

}

updateTable()

document.getElementById('save-vacancy').addEventListener('click', saveVacancy)