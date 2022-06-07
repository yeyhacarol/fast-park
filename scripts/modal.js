'use strict'

const modal = document.querySelector('.modal')

const openModal = () => {
    modal.classList.add('active')
    document.getElementById('html').style.overflowY = "hidden"
}

const closeModal = () => {
    modal.classList.remove('active')
    document.getElementById('html').style.overflowY = "auto"
}

document.getElementById('edit').addEventListener('click', openModal)
document.getElementById('out').addEventListener('click', closeModal)