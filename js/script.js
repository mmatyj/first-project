// HAMBURGER
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.js--toggle-menu').addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector('.sidebar').classList.toggle('open');
    })
})


// CLOSING MODALS
function closeModal() {
    document.getElementById('overlay').classList.remove('show')
}

document.querySelectorAll('#overlay .js--close-modal').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        e.preventDefault()
        closeModal()
    })
})

document.querySelector('#overlay').addEventListener('click', function (e) {
    if (e.target === this) {
        closeModal()
    }
})

document.addEventListener('keyup', function (e) {
    if (e.keyCode === 27) {
        closeModal()
    }
})

// OPENING MODAL QUIT

document.querySelector('.quit').addEventListener('click', function () {
    document.querySelector('#overlay').classList.add('show')
})