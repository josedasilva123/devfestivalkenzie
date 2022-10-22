
const nome = window.localStorage.getItem('nome')
const email = window.localStorage.getItem('email')
const quantityTickets = window.localStorage.getItem('quantityTickets')


const nomeLabel = document.getElementById('nome')
const emailLabel = document.getElementById('email')
const ticketLabel = document.getElementById('quantity-tickets')


nomeLabel.innerText = nome
emailLabel.innerText = email
ticketLabel.innerText = quantityTickets


