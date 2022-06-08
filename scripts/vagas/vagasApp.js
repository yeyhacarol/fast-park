'use strict'

import { readVacancies } from "./vagas.js"

const createRow = (vacancy) => {
    const row = document.createElement('div')
    row.classList.add('label')
    row.innerHTML =
        ` <span>${vacancy.localizacao.piso}</span>
          <span>${vacancy.localizacao.corredor}</span>
          <span class="sigla">${vacancy.localizacao.sigla}</span>
          <span>
                <img src="${vacancy.preferencial == '1' ? './img/preferencial.png' : './img/free-car.png'}">
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

updateTable()