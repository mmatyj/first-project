document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.js--toggle-menu').addEventListener('click', function (e) {
        e.preventDefault();


        document.querySelector('.sidebar').classList.toggle('open');
    })
})